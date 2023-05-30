import { takeEvery, put, call, StrictEffect } from "redux-saga/effects";
import { actionIds, getComments } from "../../types/actionTypes";
import jsonApi from "../../api/jsonApi";
import { AxiosResponse } from "axios";

// watchers

export function* getCommentsWatcher(): Generator<StrictEffect> {
  yield takeEvery(actionIds.GET_COMMENTS, getCommentsWorker);
}

// workers

function* getCommentsWorker(action: getComments) {
  try {
    yield put({ type: "COMMENTS_PENDING" });
    const response: AxiosResponse = yield call(
      jsonApi.get,
      `/posts/${action.payload.id}/comments`
    );

    switch (response.status) {
      case 200:
        yield put({ type: "GOT_COMMENTS", payload: response.data });
    }
  } catch (err: any) {
    yield put({ type: "COMMENTS_ERROR", payload: err.message });
  }
}
