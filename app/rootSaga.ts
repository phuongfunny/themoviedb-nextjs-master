import { all } from "@redux-saga/core/effects";
import movies from "../store/movies/movieSaga";
import people from "../store/people/peopleSaga";

export default function* rootSaga(){
  yield all([...movies, ...people]);
}