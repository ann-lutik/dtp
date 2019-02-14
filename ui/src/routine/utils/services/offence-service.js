import {
    sendGetRequest,
    sendPostRequest,
    sendPutRequest,
    sendDeleteRequest } from './common-service'

import {
    SERVER_URL,
    APP_NAME,
    PAGE_OFFENCE_LIST_URL } from '../../constants'


export function getOffences() {
    const url = SERVER_URL + APP_NAME + PAGE_OFFENCE_LIST_URL;
    return sendGetRequest(url);
}

export function addOffence(offence) {
    const url = SERVER_URL + APP_NAME + PAGE_OFFENCE_LIST_URL;
    return sendPostRequest(url, offence);
}

export function updateOffence(offence) {
    const url = SERVER_URL + APP_NAME + PAGE_OFFENCE_LIST_URL;
    return sendPutRequest(url, offence);
}

export function deleteOffence(codeOffence) {
    const url = SERVER_URL + APP_NAME + PAGE_OFFENCE_LIST_URL + "/" + codeOffence;
    return sendDeleteRequest(url);
}