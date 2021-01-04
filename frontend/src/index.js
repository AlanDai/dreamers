import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';

<<<<<<< HEAD
=======
import {
  createDream,
} from './actions/dream_actions'

import { 
  createLike, 
  fetchLike, 
  fetchLikesByDream, 
  fetchLikesByUser, 
  deleteLike
} from './actions/like_actions'
>>>>>>> f0a4c3602c3051bfad6f68bacb23796b14cb7ad7

import {
  createTag,
  deleteTag,
} from './actions/tag_actions'

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (localStorage.jwtToken) {

    setAuthToken(localStorage.jwtToken);

    const decodedUser = jwt_decode(localStorage.jwtToken);

    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    store = configureStore({});
  }

<<<<<<< HEAD
=======
  window.store = store
  window.createLike = createLike
  window.fetchLike = fetchLike
  window.fetchLikesByDream = fetchLikesByDream
  window.fetchLikesByUser = fetchLikesByUser
  window.deleteLike = deleteLike
  window.createTag = createTag
  window.deleteTag = deleteTag
  window.createDream = createDream
>>>>>>> f0a4c3602c3051bfad6f68bacb23796b14cb7ad7

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});