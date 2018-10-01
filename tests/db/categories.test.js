const db = require('../../server/db/categories')
const testEnv = require('../testEnvironment')

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => {
  testEnv.cleanup(testDb)
})


test('getCategories returns 4 categories', () => {
  return db.getCategories(testDb)
    .then(categories => {
      expect(categories.length).toBe(4)
    })
})
