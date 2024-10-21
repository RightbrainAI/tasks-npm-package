/* global beforeEach afterEach */
import { describe } from 'mocha'
import IdentityClient from '../lib/IdentityClient.js'

describe('IdentityClient', function () {
  let client

  beforeEach(function () {
    client = new IdentityClient()
  })

  afterEach(function () {
    client = null
  })
})
