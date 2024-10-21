/**
 * The TokenClient class. Performs a Client Credentials OAuth2 Grant for an given Client ID and Secret.
 */
class TokenClient {
  constructor (authHost, clientID, clientSecret) {
    this.authHost = authHost
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
    })
    if (res.status !== 200) {
      throw new Error(
        `cannot create token, expected 200 but got ${res.status}: ${res.statusText}`
      )
    }
    const data = await res.json()
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
    const formData = new FormData()
    formData.append('grant_type', grantType)
    return formData
  }
}

export default TokenClient
