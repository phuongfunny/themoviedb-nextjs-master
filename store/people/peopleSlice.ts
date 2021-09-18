import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { defaultState, DEFAULT_STATE } from "../../constant/store";

//create reducer
interface People {
  id:number
  cast: Array<string>,
  crew: Array<string>,
}
export const initPeople: People = {
  id: 0,
  cast: [],
  crew: [],
}
interface State extends defaultState {
  list: People,
}
//setup default state in constant
const initialState: State = {
  ...DEFAULT_STATE,
  list: initPeople,
};
const peopleMovieSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    getPeopleMovieRequest: (state: State, action: PayloadAction<any> ) => {
      state.loading = !state.loading;
    },
    getPeopleMovieSuccess: (state: State, action: PayloadAction<any>) => {
      state.list = action.payload;
      state.status = true;
      state.loading = false;
    },
    getPeopleMovieFail: (state: State, action: PayloadAction<any>) => {
      state.status = false;
      state.loading = false;
      state.error = action.payload;
    },
  },
});

//actions
export const {
  getPeopleMovieRequest,
  getPeopleMovieSuccess,
  getPeopleMovieFail,
} = peopleMovieSlice.actions;

export default peopleMovieSlice.reducer;
