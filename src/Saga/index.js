import {takeEvery, put, delay,takeLatest ,call, all, fork} from 'redux-saga/effects';
import { CommonTypes } from '../Store/Common/Actions';
import { networkSaga, offlineActionTypes } from 'react-native-offline';
import {
  getJackpotData
} from './CommonSaga';
export default function* root() {
  yield all([
    takeLatest(CommonTypes.GET_JACKPOT_DATA,getJackpotData),
  ])
}
