// import packages
import { configureStore } from '@reduxjs/toolkit'

// import reducer
import loginSlice from '../features/loginSlice'

export default configureStore({
  reducer: {
    login: loginSlice,
  },
})