const maxTaskInputLength = 128000

/**
 * The TasksClient class. Performs various Tasks CRUD operations against the Rightbrain AI API.
 */
class TasksClient {
  constructor (tokenClient, identityClient, apiHost, clientID, clientSecret) {
    this.tokenClient = tokenClient
    this.identityClient = identityClient
    this.apiHost = apiHost
    this.clientID = clientID
    this.clientSecret = clientSecret
  }

  /**
   * Creates a new Task
   * @param definition A task definition as required by the API
   * @return {object}
   */
  async Create (definition) {
    const accessToken = await this.tokenClient.Create(this.clientID, this.clientSecret)
    const response = await fetch(await this.getTaskCreateURL(accessToken), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      },
      body: JSON.stringify(definition)
    })
    if (response.status !== 200) {
      throw new Error(
        `Error creating Task, expected status code of 200, but got ${response.status}: ${response.statusText}`
      )
    }
    return await response.json()
  }

  /**
   * Runs a Task
   * @param taskID The ID of the Task to be ran.
   * @param taskInput The Task Input required by the Task.
   * @param taskRevision If supplied, the revision of the Task to be ran.
   * @return {object}
   */
  async Run (taskID, taskInput, taskRevision) {
    const data = JSON.stringify(taskInput)
    this.assertTaskInputSize(data)
    const accessToken = await this.authClient.CreateToken()
    const response = await fetch(await this.getTaskRunURL(accessToken, taskID, taskRevision), {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
      body: this.getTaskInputFormData(data)
    })
    if (response.status !== 200) {
      throw new Error(
        `Error running Task, expected status code of 200, but got ${response.status}: ${response.statusText}`
      )
    }
    return await response.json()
  }

  /**
   * @private
   */
  async getTaskCreateURL (accessToken) {
    const identity = await this.getIdentity(accessToken)
    return `https://${this.apiHost}/api/v1/org/${identity.org_id}/project/${identity.project_id}/task`
  }

  /**
   * @private
   */
  async getTaskRunURL (accessToken, taskID, taskRevision) {
    const identity = await this.getIdentity(accessToken)
    let url = `https://${this.apiHost}/api/v1/org/${identity.org_id}/project/${identity.project_id}/task/${taskID}/run`
    if (taskRevision) {
      url += `?revision=${taskRevision}`
    }
    return url
  }

  /**
   * @private
   */
  assertTaskInputSize (taskInput) {
    if (taskInput.length > maxTaskInputLength) {
      throw new Error(`Error running task, max task input is ${maxTaskInputLength} but input was ${taskInput.length}`)
    }
  }

  /**
   * @private
   */
  getTaskInputFormData (taskInput) {
    const formData = new FormData()
    formData.append('task_input', taskInput)
    return formData
  }

  /**
   * @private
   */
  async getIdentity (accessToken) {
    if (!this.cachedIdentity) {
      this.cachedIdentity = await this.identityClient.GetIdentity(accessToken)
    }
    return this.cachedIdentity
  }
}

export default TasksClient
