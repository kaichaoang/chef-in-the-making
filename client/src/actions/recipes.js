import * as api from '../api';

//Action Creators with redux thunk
export const getRecipes = () => async (dispatch) => {
    try {
        const { data } = await api.fetchRecipes();
        dispatch({ type: 'FETCH_ALL', payload: data });
        
    } catch (e) {
        console.log(e.message + 'dog');
    }
}

