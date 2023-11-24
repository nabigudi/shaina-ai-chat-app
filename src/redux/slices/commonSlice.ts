import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface CommonState {
  showSidebar: boolean;
  currentUser: string;
}

// Define the initial state using that type
const initialState: CommonState = {
  showSidebar: true,
  currentUser: ""
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    updateCurrentUser: (state, action: PayloadAction<string>) => {
      state.currentUser = action.payload;
    }, 
    updateShowSidebar: (state) => {
      state.showSidebar = !state.showSidebar;
    }
  },
  extraReducers: (builder) => {
  }
});


export const { updateCurrentUser, updateShowSidebar } = commonSlice.actions;

export default commonSlice.reducer;
