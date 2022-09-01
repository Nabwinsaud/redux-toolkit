import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   userInformation: {
  name: "John",
  email: "john@123",
  // name: "",
  // email: "",
  // password: "john@123",
  //   },
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateUsers: (state, action) => {
      // state.name="Nabin" // change user name
      //   state.name = action.payload.name;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});

// export

export const { updateUsers } = userSlice.actions;

// export function

export default userSlice.reducer;
