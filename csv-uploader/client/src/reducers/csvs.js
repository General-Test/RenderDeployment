import { FETCH_ALL, CREATE, DELETE } from '../constants/actionTypes';
export default (csvs = [], action) => {
    switch(action.type){
        case FETCH_ALL :
            return action.payload;
        case CREATE :
            return [...csvs, action.payload];
        case  DELETE:
            return csvs.filter((csv) => csv._id !== action.payload);
        default :
            return csvs;
    }
}