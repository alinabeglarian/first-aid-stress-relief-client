export const WRITING_FETCHED = 'WRITING_FETCHED'

export const writingFetched = writing => ({
  type: WRITING_FETCHED,
  writing
})

export const CLEAR_WRITING = 'CLEAR_WRITING'

export const clearWriting = () => ({
  type: CLEAR_WRITING,
  payload: []
})