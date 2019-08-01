import * as request from 'superagent'

const baseUrl = "http://localhost:4000"

export const IMAGES_FETCHED = 'IMAGES_FETCHED'

const imagesFetched = images => ({
  type: IMAGES_FETCHED,
  images
})

export const loadImages = () => (dispatch) => {
  request(`${baseUrl}/images`)
    .then(response => {
      console.log(response)
      dispatch(imagesFetched(response.body.url))
    })
    .catch(console.error)
}