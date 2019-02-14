import axios from 'axios'

import {getAccessToken} from "./login-service";

function configureToken() {
    const accessToken = getAccessToken();
    return accessToken
        ? {
            headers: {'Authorization': "Bearer " + accessToken}
        }
        : { };
}

const catchError = (error) => {
    if (error.response && error.response.status === 401) {
        window.location.href = "/signin";
    }
};

export function sendGetRequest(url, parameters) {
    const request = typeof parameters === "undefined" ?
        axios.get(url, configureToken()).then((response) => response.data) :
        axios.get(url, Object.assign({}, {parameters}, configureToken())).then((response) => response.data);

    request.catch(catchError);
    return request;
}

export function sendPostRequest(url, data) {
    const request = axios.post(url, data, configureToken()).then((response) => response.data);
    request.catch(catchError);
    return request;
}

export function sendPutRequest(url, data) {
    const request = axios.put(url, data, configureToken()).then((response) => response.data);
    request.catch(catchError);
    return request;
}

export function sendDeleteRequest(url) {
    const request = axios.delete(url, configureToken());
    request.catch(catchError);
    return request;
}