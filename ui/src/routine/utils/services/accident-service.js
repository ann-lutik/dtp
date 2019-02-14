import {
    sendGetRequest,
    sendPostRequest,
    sendPutRequest,
    sendDeleteRequest } from './common-service'

import {
    SERVER_URL,
    APP_NAME,
    PAGE_ACCIDENT_LIST_URL } from '../../constants'


export function getAccidents() {
    const url = SERVER_URL + APP_NAME + PAGE_ACCIDENT_LIST_URL;
    return sendGetRequest(url);
}

export function addAccident(accident) {
    const url = SERVER_URL + APP_NAME + PAGE_ACCIDENT_LIST_URL;
    return sendPostRequest(url, accident);
}

export function updateAccident(accident) {
    const url = SERVER_URL + APP_NAME + PAGE_ACCIDENT_LIST_URL;
    return sendPutRequest(url, accident);
}

export function deleteAccident(codeAccident) {
    const url = SERVER_URL + APP_NAME + PAGE_ACCIDENT_LIST_URL + "/" + codeAccident;
    return sendDeleteRequest(url);
}