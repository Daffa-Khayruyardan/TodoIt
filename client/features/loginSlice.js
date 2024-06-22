import { createSlice } from '@reduxjs/toolkit'

// create login slice 
export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        value: false 
    },
    reducers: {
        login: (state) => {
            state.value = true 
        }
    }
})

// export slice 
export const { login } = loginSlice.actions

// export reducer
export default loginSlice.reducer;