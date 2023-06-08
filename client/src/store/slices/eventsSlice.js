import { createSlice } from '@reduxjs/toolkit';
import { compareAsc } from 'date-fns';
import { createAsyncThunk } from '@reduxjs/toolkit';
const EVENT_SLICE_NAME = 'event';

const initialState = {
  events: [
    {
      eventName: 'moms day',
      eventDate:
        'Thu May 25 2023 03:30:00 GMT+0300 (Eastern European Summer Time)',
      notificationDate:
        'Thu May 25 2023 03:00:00 GMT+0300 (Eastern European Summer Time)',
      id: '3ab28ea8-392d-4301-843c-9b8d1dfbdf76',
      startDate:
        'Thu May 25 2023 02:45:16 GMT+0300 (Eastern European Summer Time)',
      isSeeNotification: false,
    },
    {
      eventName: 'moms day1',
      eventDate:
        'Thu May 25 2023 03:00:00 GMT+0300 (Eastern European Summer Time)',
      notificationDate:
        'Thu May 25 2023 02:45:00 GMT+0300 (Eastern European Summer Time)',
      id: '3ab28ea8-392d-4301-843c-9b8d1dfbdf78',
      startDate:
        'Thu May 25 2023 02:45:16 GMT+0300 (Eastern European Summer Time)',
      isSeeNotification: false,
    },
  ],
};
const displayRedBadge = createAsyncThunk(
  'badge/displayRedBadge',
  async (time, thunkAPI) => {
    // Wait for the specified time
    await new Promise(resolve => setTimeout(resolve, time));

    // Get the number of events from somewhere
    const events = await getNumberOfEvents();

    // Return the number of events
    return events;
  }
);

// Later, you can dispatch this action and handle it in your reducer
//dispatch(displayRedBadge(5000)).then(action => {
//  if (action.type.endsWith('/fulfilled')) {
//    // Display the red badge with the number of events
//    displayBadge('red', action.payload);
//  }
//});
const reducers = {
  addEvent: (state, { payload }) => {
    state.events = [...state.events, payload].sort((a, b) =>
      compareAsc(a.eventDate, b.eventDate)
    );
  },
  removeEvent: (state, { payload }) => {
    state.events = state.events.filter(event => event.id !== payload);
  },
  updateEvent: (state, { payload }) => {
    state.events = state.events
      .map(event => (event.id === payload.id ? payload : event))
      .sort((a, b) => compareAsc(a.eventDate, b.eventDate));
  },
  seeNotification: (state, { payload }) => {
    state.events = state.events.map(event => {
      if (event.id === payload) {
        event.isSeeNotification = true;
      }
      return event;
    });
  },
  clearEvents: state => {
    state.events = [];
  },
};

const eventSlice = createSlice({
  name: `${EVENT_SLICE_NAME}`,
  initialState,
  reducers,
});

const { actions, reducer } = eventSlice;

export const {
  addEvent,
  removeEvent,
  updateEvent,
  clearEvents,
  seeNotification,
  getNumberOfEvents,
  dispatch,
  displayBadge,
} = actions;

export default reducer;
