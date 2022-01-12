/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { CommonTypes } from './Actions'
import _ from 'lodash';

export const getJackpotDataLoading = (state) => ({
  ...state,
  getJackpotDataLoading: true
});


export const getJackpotDataSuccess = ( state,{ payload }) => {
  return({
  ...state,
  getJackpotNumber: payload,
  getJackpotDataLoading: false
});
}

export const getJackpotDataFailure = (state, { payload }) => ({
  ...state,
  getJackpotDataLoading: false
});

export const changeProfileForm = (state, { payload }) => {
 let update_form =_.cloneDeep(state.profileForm)
 update_form[payload.edited_field] = payload.edited_value
  return {
      ...state,
      profileForm: {
          ...state.profileForm,
          ...update_form
      },
  }
};





export const reducer = createReducer(INITIAL_STATE, {


  [CommonTypes.GET_JACKPOT_DATA_LOADING]: getJackpotDataLoading,
  [CommonTypes.GET_JACKPOT_DATA_SUCCESS]: getJackpotDataSuccess,
  [CommonTypes.GET_JACKPOT_DATA_FAILURE]: getJackpotDataFailure,

  [CommonTypes.CHANGE_PROFILE_FORM]:changeProfileForm
});
