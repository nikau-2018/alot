const db = require('../server/db')
const testEnv = require('./testEnvironment')

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => {
  testEnv.cleanup(testDb)
})

test('getDrivers returns 3 drivers', () => {
  return db.getDrivers(testDb)
    .then(drivers => {
      expect(drivers.length).toBe(3)
    })
})