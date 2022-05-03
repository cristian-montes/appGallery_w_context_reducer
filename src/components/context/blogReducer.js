import React from "react";

function blogReducer(state, action){
    switch(action.type) {
        case 'SET_POST':
            return {
                ...state,
                blogPosts:action.payload
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

export default blogReducer;