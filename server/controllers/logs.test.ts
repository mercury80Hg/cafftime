const getLogs = require ('./logs')

test('properly get all logs from database', () => {

  it('return 200 if successful', () => {
    expect(getLogs().toBe(200))
  });
})