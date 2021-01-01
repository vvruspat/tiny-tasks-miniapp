import { Dispatch } from 'react';
import { getProjectList } from '../api';
import { EVENTS } from '../constants/events';

// TODO: Fix any
export const getProjects = () => async (dispatch: Dispatch<{type: EVENTS, payload?: any}>) => {
    dispatch({
        type: EVENTS.GET_PROJECTS_FETCH,
        payload: {},
    });

    getProjectList().then(result =>
    {
        console.log('res', result);
        dispatch({
            type: EVENTS.GET_PROJECTS_SUCCESS,
            payload: result,
        });
    }).catch((error) => {
        dispatch({
            type: EVENTS.GET_PROJECTS_FAILED,
            payload: error,
        });
    });
}