/* global describe, it */

'use strict'

const expect = require('expect.js')

const Repository = require('../lib/repository')

describe('Repository tests', function () {
  it('should create an empty repository', function (done) {
    let repo = new Repository()

    expect(repo.Count()).to.be(0)

    done()
  })

  it('should add one message to the repository', function (done) {
    let repo = new Repository()
    repo.Push('foo', Date.now(), 'lorem ipsum')

    expect(repo.Count()).to.be(1)

    done()
  })
})
