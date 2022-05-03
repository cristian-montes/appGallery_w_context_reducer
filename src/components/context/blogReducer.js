import React from "react";

function blogReducer(state, action){
    switch(action.type) {
        case 'SET_POST':
            return {
                ...state,
                blogPost:action.payload
        };
        case 'SENDING_REQUEST':
            return{
                ...state,
                loading: true
            };
        case 'REQUEST_FINISHED':
            return{
                ...state,
                loading: false
            }

        default:
            console.log('bad request')

    }
}