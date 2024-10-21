/**
 * The IdentityClient class. Uses an Access Token to find the Org and Project Identity to which it belongs.
 */
class IdentityClient {
  constructor (apiHost) {
    this.apiHost = apiHost;
  }

  /**
   * Returns the Org and Project ID for a given access token.
   * @param accessToken An access token
   * @return {object}
   */
  async GetIdentity (accessToken) {
    if (!accessToken) {
      throw new Error(
        'cannot get identity, expected access token to not be empty'
      )
    }
    const res = await fetch(`https://${this.apiHost}/api/v1/whoami`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    if (res.status !== 200) {
      throw new Error(
        `cannot get identity, expected 200 but got ${res.status}: ${res.statusText}`
      )
    }
    const details = await res.json();
    if (!details.client) {
      throw new Error(
        'cannot get identity, expected response to contain client details'
      )
    }
    return details.client
  }
}

/**
 * The TokenClient class. Performs a Client Credentials OAuth2 Grant for an given Client ID and Secret.
 */
class TokenClient {
  constructor (authHost, clientID, clientSecret) {
    this.authHost = authHost;
  }

  /**
   * Create an Access Token
   * @param clientID The OAuth Client App ID.
   * @param clientSecret The OAuth Client App Secret.
   * @return {string}
   */
  async Create (clientID, clientSecret) {
    const res = await fetch(`https://${this.authHost}/oauth2/token`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${this.getBasicAuthorizationHeader(clientID, clientSecret)}`
      },
      body: this.getFormDataWithGrantType('client_credentials')
    });
    if (res.status !== 200) {
      throw new Error(
        `cannot create token, expected 200 but got ${res.status}: ${res.statusText}`
      )
    }
    const data = await res.json();
    if (!data.access_token) {
      throw new Error(
        'cannot create token, expected response to contain access token'
      )
    }
    return data.access_token
  }

  /**
   * @private
   */
  getBasicAuthorizationHeader (clientID, clientSecret) {
    return btoa(`${clientID}:${clientSecret}`)
  }

  /**
   * @private
   */
  getFormDataWithGrantType (grantType) {
    const formData = new FormData();
    formData.append('grant_type', grantType);
    return formData
  }
}

const maxTaskInputLength = 128000;

/**
 * The TasksClient class. Performs various Tasks CRUD operations against the Rightbrain AI API.
 */
class TasksClient {
  constructor (tokenClient, identityClient, apiHost, clientID, clientSecret) {
    this.tokenClient = tokenClient;
    this.identityClient = identityClient;
    this.apiHost = apiHost;
    this.clientID = clientID;
    this.clientSecret = clientSecret;
  }

  /**
   * Creates a new Task
   * @param definition A task definition as required by the API
   * @return {object}
   */
  async Create (definition) {
    const accessToken = await this.tokenClient.Create(this.clientID, this.clientSecret);
    const response = await fetch(await this.getTaskCreateURL(accessToken), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      },
      body: JSON.stringify(definition)
    });
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
    const data = JSON.stringify(taskInput);
    this.assertTaskInputSize(data);
    const accessToken = await this.authClient.CreateToken();
    const response = await fetch(await this.getTaskRunURL(accessToken, taskID, taskRevision), {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
      body: this.getTaskInputFormData(data)
    });
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
    const identity = await this.getIdentity(accessToken);
    return `https://${this.apiHost}/api/v1/org/${identity.org_id}/project/${identity.project_id}/task`
  }

  /**
   * @private
   */
  async getTaskRunURL (accessToken, taskID, taskRevision) {
    const identity = await this.getIdentity(accessToken);
    let url = `https://${this.apiHost}/api/v1/org/${identity.org_id}/project/${identity.project_id}/task/${taskID}/run`;
    if (taskRevision) {
      url += `?revision=${taskRevision}`;
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
    const formData = new FormData();
    formData.append('task_input', taskInput);
    return formData
  }

  /**
   * @private
   */
  async getIdentity (accessToken) {
    if (!this.cachedIdentity) {
      this.cachedIdentity = await this.identityClient.GetIdentity(accessToken);
    }
    return this.cachedIdentity
  }
}

const defaultTasksClientOptions = {
  apiHost: 'app.rightbrain.ai',
  authHost: 'oauth.rightbrain.ai',
  clientID: null,
  clientSecret: null
};

/**
 * Creates a new Tasks Client
 * @param options An object of options to replace the defaults.
 * @return {object}
 */
function NewDefaultTasksClient (options) {
  options = { ...defaultTasksClientOptions, ...options };
  const identityClient = new IdentityClient(options.apiHost);
  const tokenClient = new TokenClient(options.authHost);
  return new TasksClient(tokenClient, identityClient, options.apiHost, options.clientID, options.clientSecret)
}

export { NewDefaultTasksClient };
//# sourceMappingURL=index.js.map
