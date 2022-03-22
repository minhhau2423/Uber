import {createStore} from "redux";
import reducer from "./reducers"

export default function configureStore(initialSate){
    return createStore(reducer, initialSate);
}