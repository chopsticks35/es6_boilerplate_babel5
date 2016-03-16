import a from '../src/demo.es6';

describe('demo', function() {
  it('should be awesome', function() {
    expect(a.sum(1,2)).toBe(3)
  })
  it('should say hello', function() {
    expect(a.greet()).toBe('hello Johnny')
  })
  it('should toUpperCase()', ()=> {
    expect(a.shout()).toBe('JOHNNY')
  })
})