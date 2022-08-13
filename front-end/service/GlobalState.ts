import { configureStore } from '@reduxjs/toolkit';

export const dispatch_SELECTED_CONTRIBUTOR = 0;
export const dispatch_SELECTED_COLLECTIONNAME = 1;
export const dispatch_LOGIN_OK = 3;

const initialState = {
    contributorSelect : {},    
    collectionName : {},
    isLogged : false
}

const globalReducer = (state = initialState, action) => {
    //console.log('chegou dispatch')
    
    switch (action.type){
        case dispatch_SELECTED_CONTRIBUTOR: 
            return {
                ...state,
                contributorSelect : action.contributorSelect
            }
        case dispatch_SELECTED_COLLECTIONNAME:
            return {
                ...state,
                collectionName : action.collectionName
            }           
        case dispatch_LOGIN_OK:
            return {
                ...state,
                isLogged : true
            }                       
        default : 
            return state;
    }
}

export const store = configureStore({ reducer : globalReducer });