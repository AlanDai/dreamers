import * as SearchApiUtils from '../util/search_api_util';

export const SEARCH = 'SEARCH';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';
export const RECEIVE_SEARCH_ERRORS = 'RECEIVE_SEARCH_ERRORS';

export const receiveSearchResults = (payload) => ({
  type: SEARCH,
  tags: payload[0],
  users: payload[1],
  dreams: payload[2],
})

export const clearSearch = () => ({
  type: CLEAR_SEARCH,
})

export const receiveErrors = errors => ({
  type: RECEIVE_SEARCH_ERRORS,
  errors
})

export const fetchSearchResults = searchParams => dispatch => (
  SearchApiUtils.search(searchParams)
  .then(payload => dispatch(receiveSearchResults(payload.data))) 
  .catch(err => receiveErrors(err))
)