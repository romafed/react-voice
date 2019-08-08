import {
    DELETE_DATA
} from '../type';
import formatingTime from '../../utils/formatingTime';

const initialState = [
    { id: 3, questions: ['hello', 'greeting'], answers: ['greeting', 'hello human'] },
    { id: 1, questions: ['how are you'], answers: ['i am fine thank you'] },
    { id: 5, questions: ['time'], answers: [`it is ${formatingTime()}`] },
    { id: 6, questions: ['thank', 'thanks', 'thank you'], answers: ['You are welcome', 'No thanks you for creation of me - human'] }
]

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_DATA:
            return [...state.filter(line => line.id !== action.payload)];
        default:
            return state;
    }
}

export default dataReducer;