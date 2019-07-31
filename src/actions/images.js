import * as request from 'superagent'

export const IMAGES_FETCHED = 'IMAGES_FETCHED'

const imagesFetched = images => ({
  type: IMAGES_FETCHED,
  images
})

export const loadImages = () => (dispatch) => {
  request(`https://aws.random.cat/meow?ref=public-apis`)
    .then(response => {
      console.log(response)
      dispatch(imagesFetched(response.body.file))
    })
    .catch(console.error)
}