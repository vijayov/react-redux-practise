import jsonPlaceholder from  '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get('/posts');
        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        }) ;
    }
}

export const fetchUser = (id) => {
    return  (dispatch) => {
      _fetchUser(id,dispatch);
    }
}

const _fetchUser = _.memoize(async (id , dispatch) => {
        const user = await jsonPlaceholder.get(`/users/${id}`);
        dispatch({
            type: 'FETCH_USER',
            payload: user.data
        })
});
