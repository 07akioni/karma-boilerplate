import {
  hello,
  helloAgain
} from 'main/hello'

describe('have a try', function () {
  it('true should equal true', function () {
    expect(true).to.equal(true)
  })
  it('should return \'hello world\'', function () {
    expect(hello()).to.equal('hello world')
  })
})