import { all } from "redux-saga/effects";

import { getPostsWatcher } from "./postsSaga";
import { getCommentsWatcher } from "./commentsSaga";

export default function* rootSaga() {
  yield all([getPostsWatcher(), getCommentsWatcher()]);
}
