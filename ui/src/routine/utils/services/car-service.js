import {
    sendGetRequest,
    sendPostRequest,
    sendPutRequest,
    sendDeleteRequest } from './common-service'

import {
    SERVER_URL,
    APP_NAME,
    PAGE_CAR_LIST_URL } from '../../constants'

export function getCars() {
    const url = SERVER_URL + APP_NAME + PAGE_CAR_LIST_URL;
    return sendGetRequest(url);
}

export function addCar(car) {
    const url = SERVER_URL + APP_NAME + PAGE_CAR_LIST_URL;
    return sendPostRequest(url, car);
}

export function updateCar(car) {
    const url = SERVER_URL + APP_NAME + PAGE_CAR_LIST_URL;
    return sendPutRequest(url, car);
}

export function deleteCar(codeCar) {
    const url = SERVER_URL + APP_NAME + PAGE_CAR_LIST_URL + "/" + codeCar;
    return sendDeleteRequest(url);
}