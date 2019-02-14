import {
    sendGetRequest,
    sendPostRequest,
    sendPutRequest,
    sendDeleteRequest } from './common-service'

import {
    SERVER_URL,
    APP_NAME,
    PAGE_PERSON_LIST_URL } from '../../constants'


export function getPersons() {
    const url = SERVER_URL + APP_NAME + PAGE_PERSON_LIST_URL;
    return sendGetRequest(url);
}

export function addPerson(person) {
    const url = SERVER_URL + APP_NAME + PAGE_PERSON_LIST_URL;
    return sendPostRequest(url, person);
}

export function updatePerson(person) {
    const url = SERVER_URL + APP_NAME + PAGE_PERSON_LIST_URL;
    return sendPutRequest(url, person);
}

export function deletePerson(id) {
    const url = SERVER_URL + APP_NAME + PAGE_PERSON_LIST_URL + "/" + id;
    return sendDeleteRequest(url);
}