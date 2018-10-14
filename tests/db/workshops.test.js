const db = require('../../server/db/workshops')
const testEnv = require('../testEnvironment')

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => {
  testEnv.cleanup(testDb)
})

test('getWorkshops returns 5 workshops', () => {
  return db.getWorkshops(testDb)
    .then(workshops => {
      expect(workshops.length).toBe(5)
    })
})
