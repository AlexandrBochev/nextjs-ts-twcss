import { PhotoType, getData } from "@/models/models"

describe("getData", () => {
  it('shuld be defind', () => {
    expect(getData).toBeDefined()
  })

  it('shuld be function', () => {
    expect(typeof getData).toBe('function')
  })
})