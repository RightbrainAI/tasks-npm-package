/* global beforeEach afterEach */
import { describe } from 'mocha'
import TokenClient from '../lib/TokenClient.js'

describe('TokenClient', function () {
  let client

  beforeEach(function () {
    client = new TokenClient()
  })

  afterEach(function () {
    client = null
  })
})
