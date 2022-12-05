import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   isAuth: false
  };


  const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      login(state, action) {
       
        state.isAuth = true;
      }
    }
})

export const {
    login
  } = AuthSlice.actions;
  
  export default AuthSlice.reducer;