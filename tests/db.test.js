const db = require('../server/db/tools')
const testEnv = require('./testEnvironment')

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => {
  testEnv.cleanup(testDb)
})

test('getTools returns 5 tools', () => {
  return db.getTools(testDb)
    .then(tools => {
      expect(tools.length).toBe(5)
    })
})

test('getCategories returns 4 tools', () => {
  return db.getCategories(testDb)
    .then(categories => {
      expect(categories.length).toBe(4)
    })
})