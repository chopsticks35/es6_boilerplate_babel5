import a from 'demo';

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
  it('should sqaure a number', ()=> {
    expect(a.sqaure(2).toBe(4))
  })
})