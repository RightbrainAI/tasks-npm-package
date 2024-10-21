/* global beforeEach afterEach */
import { describe } from 'mocha'
import TasksClient from '../lib/TasksClient.js'

describe('TasksClient', function () {
  let client

  beforeEach(function () {
    client = new TasksClient()
  })

  afterEach(function () {
    client = null
  })
})
