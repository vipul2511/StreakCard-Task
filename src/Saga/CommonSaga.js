import {Alert} from 'react-native'
import _ from 'lodash';
import { call, put, select, take } from 'redux-saga/effects';
import { CommonService } from '../Services/Api/Common';
import CommonActions from '../Store/Common/Actions';

export function* getJackpotData( payload ) {
	yield put(CommonActions.getJackpotDataLoading());
	
	try {
       
		let data = yield call(CommonService.getJackpotData, payload);
		if (data) {
			yield put(CommonActions.getJackpotDataSuccess(data));
		} else {
			yield put(CommonActions.getJackpotDataFailure());
		}
	} catch (error) {
        console.log('saga error',error);
		yield put(CommonActions.getJackpotDataFailure());
	}
}

