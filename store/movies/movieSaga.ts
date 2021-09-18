import { PayloadAction } from "@reduxjs/toolkit";
import movieAPI from "../../service/movieAPI";
import { call, put, takeLatest } from "redux-saga/effects";
import { getDetailMovieFail, getDetailMovieRequest, getDetailMovieSuccess, getListMoviesFail, getListMoviesRequest, getListMoviesSuccess } from "./movieSlice";

export function* getLissMovies(action: PayloadAction<any>) {
  try {
    const {results} = yield call(movieAPI.getAllMovies,action.payload);
    yield put(getListMoviesSuccess(results));
  } catch (error) {
    yield put(getListMoviesFail(error));
  }
}
function* getDetailMovie(action: PayloadAction<any>) {
  try {
    if (action.payload.id){
      const data: object = yield call(movieAPI.getDetailMovie, action.payload.id);
      yield put(getDetailMovieSuccess(data));
    }
  } catch (error) {
    yield put(getDetailMovieFail(error));
  }
}
function* watchGetList(){
  yield takeLatest(getListMoviesRequest.type, getLissMovies);
}
function* watchGetDetail() {
  yield takeLatest(getDetailMovieRequest.type, getDetailMovie);
}
const saga= [watchGetList(),watchGetDetail()];

export default saga;