import { createSlice } from '@reduxjs/toolkit'

// create login slice 
export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        currEmail: '',
        currUsername: '',
    },
    reducers: {
        setCurrEmail: (state,action) => {
            state.currEmail = action.payload;
        },
        setCurrUsername: (state,action) => {
            state.currUsername = action.payload;
        }
    }
})

// export slice 
export const { setLogin, setCurrEmail, setCurrUsername } = loginSlice.actions

// export reducer
export default loginSlice.reducer;