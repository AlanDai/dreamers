import * as SearchApiUtils from '../utils/search_api_util';

export const SEARCH = 'SEARCH';

export const receiveSearchResults = (payload) => ({
  type: SEARCH,
  tags: payload[0],
  users: payload[1],
  dreams: payload[2] 
})

export const fetchSearchResults = searchParams => dispatch => (
  SearchApiUtils.search(searchParams)
  .then(payload => dispatch(receiveSearchResults(payload.data))) 
  .catch(err => console.log(err))
)