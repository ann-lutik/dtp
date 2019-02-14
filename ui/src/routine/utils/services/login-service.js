import {LOCAL_STORAGE_ACCESS_TOKEN_PROPERTY, LOCAL_STORAGE_USERNAME_PROPERTY, PAGE_LOGIN_URL} from '../../constants'

import {sendGetRequest,} from './common-service'

export function logout() {
    sendGetRequest("/logout");
}