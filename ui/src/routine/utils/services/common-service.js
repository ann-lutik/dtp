import axios from 'axios'

const catchError = (error) => {
    if (error.response && error.response.status === 401) {
        window.location.href = "/auth.jsp";
    }
};

export function sendGetRequest(url, parameters) {
    const request =
        axios.get(url, Object.assign({}, {parameters})).then((response) => response.data);

    request.catch(catchError);
    return request;
}

export function sendPostRequest(url, data) {
    const request = axios.post(url, data).then((response) => response.data);
    request.catch(catchError);
    return request;
}

export function sendPutRequest(url, data) {
    const request = axios.put(url, data).then((response) => response.data);
    request.catch(catchError);
    return request;
}

export function sendDeleteRequest(url) {
    const request = axios.delete(url);
    request.catch(catchError);
    return request;
}