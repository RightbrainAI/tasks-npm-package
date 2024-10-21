import IdentityClient from './IdentityClient.js'
import TokenClient from './TokenClient.js'
import TasksClient from './TasksClient.js'

const defaultTasksClientOptions = {
  apiHost: 'app.rightbrain.ai',
  authHost: 'oauth.rightbrain.ai',
  clientID: null,
  clientSecret: null
}

/**
 * Creates a new Tasks Client
 * @param options An object of options to replace the defaults.
 * @return {object}
 */
function NewDefaultTasksClient (options) {
  options = { ...defaultTasksClientOptions, ...options }
  const identityClient = new IdentityClient(options.apiHost)
  const tokenClient = new TokenClient(options.authHost)
  return new TasksClient(tokenClient, identityClient, options.apiHost, options.clientID, options.clientSecret)
}

export { NewDefaultTasksClient }
