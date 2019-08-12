import * as request from 'superagent'

const baseUrl = "https://first-aid-stress-relief-db.herokuapp.com"

export const QUOTE_FETCHED = 'QUOTE_FETCHED'

const quoteFetched = quote => ({
  type: QUOTE_FETCHED,
  quote
})

export const loadQuote = () => (dispatch) => {
  request(`${baseUrl}/quotes`)
    .then(response => {
      dispatch(quoteFetched(response.body))
    })
    .catch(console.error)
}