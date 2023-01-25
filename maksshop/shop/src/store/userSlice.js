import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user: null,
    auth: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signIn: (state, user) =>{
            state.auth = true;
            state.user = user;
        },
        signOut: (state) =>{
            state.auth = false;
            state.user = null;
        }
    },
})
export const {signIn, signOut} = userSlice.actions;
export const userSelect = (state) => state.user.user;
export const authSelect = (state) => state.user.auth;
export default userSlice.reducer