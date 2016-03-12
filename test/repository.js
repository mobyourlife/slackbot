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

  it('should add a message to the repository', function (done) {
    let repo = new Repository()
    repo.Push('foo', new Date(), 'lorem ipsum')

    expect(repo.Count()).to.be(1)

    done()
  })

  it('should not take anything from an empty repository', function (done) {
    let repo = new Repository()
    let item = repo.Pop()

    expect(repo.Count()).to.be(0)
    expect(item).not.to.be.ok()

    done()
  })

  it('should take the added message from the repository', function (done) {
    let data = {
      username: 'foo',
      date: Date.now(),
      message: 'lorem ipsum'
    }

    let repo = new Repository()
    repo.Push(data.username, data.date, data.message)

    let item = repo.Pop()

    expect(repo.Count()).to.be(1)

    expect(item).to.be.ok()
    // expect(item).to.be.a(Repository)
    expect(item.username).to.be(data.username)
    expect(item.date).to.be(data.date)
    expect(item.message).to.be(data.message)

    done()
  })
})
