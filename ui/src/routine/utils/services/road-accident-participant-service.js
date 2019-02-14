import {
    sendGetRequest,
    sendPostRequest,
    sendPutRequest,
    sendDeleteRequest } from './common-service'

import {
    SERVER_URL,
    APP_NAME,
    PAGE_CAR_LIST_URL } from '../../constants'

export function getRoadAccidentParticipants() {
    const url = SERVER_URL + APP_NAME + PAGE_CAR_LIST_URL;
    return sendGetRequest(url);
}

export function addRoadAccidentParticipant(car) {
    const url = SERVER_URL + APP_NAME + PAGE_CAR_LIST_URL;
    return sendPostRequest(url, car);
}

export function updateRoadAccidentParticipant(car) {
    const url = SERVER_URL + APP_NAME + PAGE_CAR_LIST_URL;
    return sendPutRequest(url, car);
}

export function deleteRoadAccidentParticipant(code_road_accident_participant) {
    const url = SERVER_URL + APP_NAME + PAGE_CAR_LIST_URL + "/" + code_road_accident_participant;
    return sendDeleteRequest(url);
}