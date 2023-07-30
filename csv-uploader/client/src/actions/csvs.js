import * as api from '../api';
import { FETCH_ALL, CREATE, DELETE } from '../constants/actionTypes';

export const getCsvs = () => async (dispatch) => {
    try {

        const { data } = await api.fetchCsvs();

        dispatch({type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const createCsv = (csv) => async (dispatch) => {
    try {

        const { data } = await api.createCsv(csv);

        dispatch({type: CREATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deleteCsv = (id) => async (dispatch) => {
    try{
        await api.deleteCsv(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.error(error);
    }
}