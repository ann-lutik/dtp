import axios from 'axios'
import {
    SERVER_URL,
    APP_NAME,
    PAGE_LOGIN_URL,
    LOCAL_STORAGE_ACCESS_TOKEN_PROPERTY,
    LOCAL_STORAGE_USERNAME_PROPERTY } from '../../constants'

export function tryLogin(login, password, callback) {
    const url = SERVER_URL + APP_NAME + PAGE_LOGIN_URL;
    const request = axios.post(url, {
        name : login,
        password : password
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
    window.location.href = "/signin";
}

export function getAccessToken() {
    return localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN_PROPERTY);
}

export function getCurrentUsername() {
    return localStorage.getItem(LOCAL_STORAGE_USERNAME_PROPERTY);
}