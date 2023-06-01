import { all } from "redux-saga/effects";

import { getPostsWatcher } from "./postsSaga";
import { getCommentsWatcher } from "./commentsSaga";
import { getUserWatcher } from "./userSaga";

export default function* rootSaga() {
  yield all([getPostsWatcher(), getCommentsWatcher(), getUserWatcher()]);
}
