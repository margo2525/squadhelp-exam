import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as restController from '../../api/rest/restController';
const EVENTS_SLISE_NAME = 'events';

export const getEvents = createAsyncThunk(
  `${EVENTS_SLISE_NAME}/get`,
  async (payload, thunkAPI) => {
    try {
      const response = await restController.getEvents();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue({ message: e.message });
    }
  }
);

export const deleteEvent = createAsyncThunk(
  `${EVENTS_SLISE_NAME}/delete`,
  async (payload, thunkAPI) => {
    try {
      await restController.deleteEvent(payload);
      return payload;
    } catch (e) {
      return thunkAPI.rejectWithValue({ message: e.message });
    }
  }
);

export const updateEvent = createAsyncThunk(
  `${EVENTS_SLISE_NAME}/update`,
  async ({ id, values }, thunkAPI) => {
    try {
      const response = await restController.updateEvent(id, values);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue({ message: e.message });
    }
  }
);

const eventsSlice = createSlice({
  name: EVENTS_SLISE_NAME,
  initialState: {
    events: [],
    isFetching: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    // GET
    builder.addCase(getEvents.pending, (state, action) => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(getEvents.fulfilled, (state, action) => {
      state.events.push(...action.payload);
      state.isFetching = false;
    });
    builder.addCase(getEvents.rejected, (state, action) => {
      state.error = action.payload;
      state.isFetching = false;
    });
    // DELETE
    builder.addCase(deleteEvent.pending, state => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(deleteEvent.fulfilled, (state, action) => {
      state.Events = state.Events.filter(p => p.id !== action.payload);
      state.isFetching = false;
    });
    builder.addCase(deleteEvent.rejected, (state, action) => {
      state.error = action.payload;
      state.isFetching = false;
    });
    // UPDATE
    builder.addCase(updateEvent.pending, state => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(updateEvent.fulfilled, (state, action) => {
      const foundIndex = state.Events.findIndex(
        p => p.id === action.payload.id
      );
      state.Events[foundIndex] = action.payload;
      state.isFetching = false;
    });
    builder.addCase(updateEvent.rejected, (state, action) => {
      state.error = action.payload;
      state.isFetching = false;
    });
  },
});

const { reducer, actions } = eventsSlice;

export const { clearEventsStore, clearEventsError } = actions;

export default reducer;
