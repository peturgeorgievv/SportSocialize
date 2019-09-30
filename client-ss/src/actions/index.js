// import axios from 'axios';
import $http from '../api/users'
import { FETCH_USER } from './types';
import { FETCH_ALL_POSTS } from './types';

export const fetchUser = () => async dispatch => {
    const token = localStorage.getItem('currentUser');
    const res = await $http.get(`/api/me`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    console.log(res.data);
    dispatch({ type: FETCH_USER, payload: res.data });
};