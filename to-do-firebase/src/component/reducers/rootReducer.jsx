import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {getFirebase , ReactReduxFirebaseProvider} from 'react-redux-firebase'
import firebase from "../config/FirebaseConfig";
import {createFirestoreInstance} from 'redux-firestore'
import {firebaseReducer} from'react-redux-firebase'
import {firestoreReducer} from'redux-firestore'
import taskReducer from "./taskReducer";


const rootReducer = combineReducers({
    firebase : firebaseReducer,
    firestore : firestoreReducer,
    task :taskReducer,
});
export default rootReducer;
// const reducer = combineReducers({

//     task :taskReducer,
// })

// const composeEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = createStore(
//     reducer,
//     composeEnhance(applyMiddleware(thunk.withExtraArgument({getFirebase})))
// )

// export const rrfprops = {
//     firebase , 
//     config : {} , 
//     dispatch : store.dispatch,
//     createFirestoreInstance 
// }

// export default store