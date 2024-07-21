import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { axiosInstance } from '../../config';
const initialState = {
  data: [],
  loading: false,
  error: null,

  logoutResponse: null,
};

export const login = createAsyncThunk(
  'auth/login',
  async (payload, {rejectWithValue}) => {
    const {email, password} = payload;
    try {
      const response = await axiosInstance.post('/auth/login', {
        email: email,
        password: password,
      });
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.access_token}`;
      return response.data;
    } catch (err) {
      const status = err.response?.status || err?.message;
      return rejectWithValue(status);
    }
  },
);

export const register = createAsyncThunk(
  'auth/register',
  async (payload, {rejectWithValue}) => {
    const {name, email, password} = payload;
    try {
      const response = await axiosInstance.post('/auth/register', {
        username: name,
        email: email,
        password: password,
      });
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.access_token}`;
      return response.data;
    } catch (err) {
      const status = err.response?.status || err?.message;
      return rejectWithValue(status);
    }
  },
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (payload, {rejectWithValue}) => {
    try {
      const response = await axiosInstance.post('/auth/logout');
      return response.data;
    } catch (err) {
      const status = err.response?.status || err?.message;
      return rejectWithValue(status);
    }
  },
);


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(register.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logout.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.logoutResponse = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

     ;
  },
});

export default authSlice.reducer;