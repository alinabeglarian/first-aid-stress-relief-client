import * as request from 'superagent'

export const QUOTE_FETCHED = 'QUOTE_FETCHED'

const quoteFetched = quote => ({
  type: QUOTE_FETCHED,
  quote
})

export const loadQuote = () => (dispatch) => {
  request(`https://api.kanye.rest`)
    .then(response => {
      dispatch(quoteFetched(response.body.quote))
    })
    .catch(console.error)
}