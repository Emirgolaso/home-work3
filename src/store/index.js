import { createStore } from 'redux';
import reducer from './redusers/Reduser';

const store = createStore(reducer);

export default store;
