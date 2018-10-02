export const SEARCH_TOOL = 'SEARCH_TOOL'
export const SEARCH_WORKSHOP = 'SEARCH_WORKSHOP'

export const searchTool = searchTool => ({
  type: SEARCH_TOOL,
  searchTool
})

export const searchWorkshop = searchWorkshop => ({
  type: SEARCH_WORKSHOP,
  searchWorkshop
})
