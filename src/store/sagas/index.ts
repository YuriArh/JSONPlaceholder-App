import { getPosts } from "./../../types/actionTypes";
import { takeEvery, put, call, StrictEffect } from "redux-saga/effects";
import { actionIds } from "../../types/actionTypes";
import jsonApi from "../../api/jsonApi";
import { AxiosResponse } from "axios";
import { gotPosts } from "../../types/actionTypes";

// watchers

function* getPostsWatcher(): Generator<StrictEffect> {
  yield takeEvery(actionIds.GET_POSTS, getPostsWorker);
}

// workers

function* getPostsWorker() {
  try {
    const response: AxiosResponse = yield call(jsonApi.get, "/posts/");

    switch (response.status) {
      case 200:
        const data: gotPosts = {
          type: "GOT_POSTS",
          posts: response.data,
        };
        yield put(data);
    }
  } catch (err) {}
}

export default function* rootSaga() {
  yield getPostsWatcher();
}
