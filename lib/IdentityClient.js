/**
 * The IdentityClient class. Uses an Access Token to find the Org and Project Identity to which it belongs.
 */
class IdentityClient {
  constructor (apiHost) {
    this.apiHost = apiHost
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
    })
    if (res.status !== 200) {
      throw new Error(
        `cannot get identity, expected 200 but got ${res.status}: ${res.statusText}`
      )
    }
    const details = await res.json()
    if (!details.client) {
      throw new Error(
        'cannot get identity, expected response to contain client details'
      )
    }
    return details.client
  }
}

export default IdentityClient
