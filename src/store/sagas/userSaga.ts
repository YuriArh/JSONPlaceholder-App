import { takeEvery, put, call, StrictEffect, delay } from "redux-saga/effects";
import { actionIds, getUser } from "../../types/actionTypes";
import jsonApi from "../../api/jsonApi";
import { AxiosResponse } from "axios";

// watchers

export function* getUserWatcher(): Generator<StrictEffect> {
  yield takeEvery(actionIds.GET_USER, getUserWorker);
}

// workers

function* getUserWorker(action: getUser) {
  try {
    yield put({ type: "USER_PENDING" });

    yield delay(500);

    const response: AxiosResponse = yield call(
      jsonApi.get,
      action.payload.params
    );

    switch (response.status) {
      case 200:
        yield put({ type: "GOT_USER", payload: response.data });
    }
  } catch (err: any) {
    yield put({ type: "USER_ERROR", payload: err.message });
  }
}
