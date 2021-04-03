import axios from 'axios'


const REQUEST_USER_DATA = 'REQUEST_USER_DATA'

const initialState = {
    email: null,
    firstName: null,
    lastName: null 
}

function reducer (state = initialState, action){
    return state
}
export default reducer