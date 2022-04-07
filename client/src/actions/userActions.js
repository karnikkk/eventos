import axios from 'axios'
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_RESET,
    UPDATE_PROFILE_FAIL,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL, 
    NEW_PASSWORD_REQUEST,
    NEW_PASSWORD_SUCCESS,
    NEW_PASSWORD_FAIL, 
    LOGOUT_SUCCESS,
    LOGOUT_FAIL, 
    CLEAR_ERRORS,
} from '../constants/userConstants'

//login
export const login = (email,password) => async (dispatch) => {
    try{

        dispatch({type: LOGIN_REQUEST})

        const config={
            headers: {
                "Content-type": "application/json"
              },
        }

        const data  = await axios.post('/api/auth/login', { email , password} , config)
        //console.log(data)

        dispatch({
            type:LOGIN_SUCCESS,
            payload:data.user,
            
        })



    }
    catch(error){
        dispatch({
            type:LOGIN_FAIL,
            payload:error.respond.data.message
        })
    }
}

//Load user
export const loadUser = () => async (dispatch) => {
    try{

        dispatch({type: LOAD_USER_REQUEST})

        const { data } = await axios.get('api/auth/me')

        
        dispatch({
            type:LOAD_USER_SUCCESS,
            payload:data.user
        })



    }
    catch(error){
        dispatch({
            type:LOAD_USER_FAIL,
            payload:error.respond.data.message
        })
    }
}

//update profile

export const updateProfile = (userData) => async (dispatch) =>{
    try{
        dispatch ({type:UPDATE_PROFILE_REQUEST})
        const config = {
            headers:{
                'content-type': 'multipart/form-data'
            }
        }

        const {data} = await axios.put('/api/auth/me/update',userData,config)

        dispatch({
            type:UPDATE_PROFILE_SUCCESS,
            payload:data.success
        })
    } catch(error){
        dispatch({
            type:UPDATE_PROFILE_FAIL,
            payload:error.respond.data.message
        })
    }
}


//forgot password
export const forgotPassword = (email) => async (dispatch) =>{
    try{
        dispatch ({type:FORGOT_PASSWORD_REQUEST})
        const config = {
            headers:{
                'content-type': 'application/json'
            }
        }

        const {data} = await axios.post('/api/auth/password/forgot',email,config)

        dispatch({
            type:FORGOT_PASSWORD_SUCCESS,
            payload:data.message
        })
    } catch(error){
        dispatch({
            type:FORGOT_PASSWORD_FAIL,
            payload:error.respond.data.message
        })
    }
}


//RESET password
export const resetPassword= (token,password) => async (dispatch) =>{
    try{
        dispatch ({type:NEW_PASSWORD_SUCCESS})
        const config = {
            headers:{
                'content-type': 'application/json'
            }
        }

        const {data} = await axios.put(`/api/auth/password/reset/${token}`,password,config)

        dispatch({
            type:NEW_PASSWORD_SUCCESS,
            payload:data.message
        })
    } catch(error){
        dispatch({
            type:NEW_PASSWORD_FAIL,
            payload:error.respond.data.message
        })
    }
}

//Log out user
export const logout = () => async (dispatch) => {
    try{

        dispatch({type: LOAD_USER_REQUEST})

        const { data } = await axios.get('api/auth/logout')

        
        dispatch({
            type:LOGOUT_SUCCESS,
           
        })



    }
    catch(error){
        dispatch({
            type:LOGOUT_FAIL,
            payload:error.respond.data.message
        })
    }
}



//clear Error
export const clearErrors = () => async (disptach) => {
    disptach({
        type:CLEAR_ERRORS
    })
}