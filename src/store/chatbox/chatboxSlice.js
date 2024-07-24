import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  visible: false,
};



const chatboxSlice = createSlice({
  name: 'chatbox',
  initialState,
  reducers: {
    setChatBoxVisible: (state, action) => {
      state.visible = action.payload;
    },
  },
  extraReducers: builder => {},
});

export const {setChatBoxVisible} = chatboxSlice.actions;
export default chatboxSlice.reducer;