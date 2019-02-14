import axios from 'axios'
import {
    APP_NAME,
    LOCAL_STORAGE_ACCESS_TOKEN_PROPERTY,
    LOCAL_STORAGE_USERNAME_PROPERTY, PAGE_ACCIDENT_LIST_URL,
    PAGE_LOGIN_URL,
    SERVER_URL
} from '../../constants'
import {sendGetRequest} from "./common-service";

export function tryLogin(login, password, callback) {
    const url = SERVER_URL + APP_NAME + PAGE_LOGIN_URL;
    const request = axios.post(url, {
        login: login,
        pass: password
    }).then(response => {
        if (response.status === 200) {
            const accessToken = response.data;
            localStorage.setItem(LOCAL_STORAGE_USERNAME_PROPERTY, login);
            localStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN_PROPERTY, accessToken);
            return callback(accessToken);
        }
    });
    request.catch((error) => {
        callback(undefined);
    });
}

export function logout() {
    localStorage.removeItem(LOCAL_STORAGE_ACCESS_TOKEN_PROPERTY);
    localStorage.removeItem(LOCAL_STORAGE_USERNAME_PROPERTY);
    const url = SERVER_URL + APP_NAME + PAGE_ACCIDENT_LIST_URL;
    sendGetRequest(url)
}

export function getAccessToken() {
    return localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN_PROPERTY);
}

export function getCurrentUsername() {
    return localStorage.getItem(LOCAL_STORAGE_USERNAME_PROPERTY);
}