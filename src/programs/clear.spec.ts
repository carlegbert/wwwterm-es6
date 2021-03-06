import { assert } from 'chai'

import { testShellFactory } from '../util/test-helpers'

import ShellCommandResult from '../Shell/ShellCommandResult'

describe('clear', function() {
  const testShell = testShellFactory()

  beforeEach(function() {
    // assign value to innerHTML property of empty object standing in for the DOM
    testShell.outputElement.innerHTML = 'This element is not empty'
  })

  it('clears output element', function() {
    const oldOutputElementContent = testShell.outputElement.innerHTML
    const res = testShell.executeCommand('clear')
    assert.instanceOf(res, ShellCommandResult)
    assert.notEqual(oldOutputElementContent, testShell.outputElement.innerHTML)
    assert.isEmpty(res.stdOut)
    assert.isEmpty(res.stdErr)
  })
})
