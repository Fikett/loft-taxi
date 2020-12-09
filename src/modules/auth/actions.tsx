import { IfetchAuthFailurePayload, IFetchAuthRequestPayload, IfetchAuthSuccessPayload, ILoginData } from '@modules-auth';
import { createAction } from 'redux-actions';

export const fetchAuthRequest = createAction<IFetchAuthRequestPayload>('fetchAuthRequest');
export const fetchAuthSuccess = createAction<IfetchAuthSuccessPayload>('fetchAuthSuccess');
export const fetchAuthFailure = createAction<IfetchAuthFailurePayload>('fetchAuthFailure');

export const setLoginData = createAction<ILoginData>('setLoginData');