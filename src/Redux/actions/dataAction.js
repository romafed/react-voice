import {
    DELETE_DATA
} from '../type';

export const deleteDataAction = (id) => {
    return {
        type: DELETE_DATA,
        payload: id
    }
}