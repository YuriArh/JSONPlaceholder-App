import { takeEvery, put, call, StrictEffect, delay } from "redux-saga/effects";
import { actionIds } from "../../types/actionTypes";
import jsonApi from "../../api/jsonApi";
import { AxiosResponse } from "axios";
import { getPosts } from "../../types/actionTypes";

// watchers

export function* getPostsWatcher(): Generator<StrictEffect> {
  yield takeEvery(actionIds.GET_POSTS, getPostsWorker);
}

// workers

function* getPostsWorker(action: getPosts) {
  try {
    yield put({ type: "POSTS_PENDING" });

    yield delay(500);

    const response: AxiosResponse = yield call(
      jsonApi.get,
      action.payload.params
    );

    switch (response.status) {
      case 200:
        yield put({ type: "GOT_POSTS", payload: response.data });
    }
  } catch (err: any) {
    yield put({ type: "POSTS_ERROR", payload: err.message });
  }
}
