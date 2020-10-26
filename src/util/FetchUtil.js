const HOST_URL = 'http://localhost:8080';
const BASE_API_PATH = '/mercury/api';

const BASE_API_URL = `${HOST_URL}${BASE_API_PATH}`;

const DEVELOPER_MODE = true;

const HTTP_METHODS = {
    DELETE: 'DELETE',
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT'
};

const MIME_TYPES = {
    JSON: 'application/json',
    PLAIN_TEXT: 'text/plain'
};

const createURLForQueryParameters = (url, queryParameters) => {
    if (queryParameters && Object.keys(queryParameters).length > 0) {
        const urlParams = new URLSearchParams();

        for (let key in queryParameters) {
            if (Object.prototype.hasOwnProperty.call(queryParameters, key)) {
                let param = queryParameters[key];

                if (Array.isArray(param)) {
                    for (let i = 0; i < param.length; i++) {
                        const innerParam = typeof  param[i] === 'object'
                            ? JSON.stringify(param[i])
                            : param[i];
                        urlParams.append(key, innerParam);
                    }
                } else {
                    if (typeof param === 'object') {
                        param = JSON.stringify(param);
                    }
                    urlParams.append(key, param);
                }
            }
        }

        url = url + '?' + urlParams.toString();
    }

    return url;
};

const doFetchCall = (url, content = {}, method, fetchOptions = {}) => {
    const {
        contentType = MIME_TYPES.JSON,
        ...options
    } = fetchOptions;

    options.method = method;
    options.credentials = 'same-origin';

    // Clean the content to remove undefined values
    if (content && typeof content === 'object' && content.constructor === Object) {
        content = { ...content }

        for (let key in content) {
            if (Object.prototype.hasOwnProperty.call(content, key) && content[key] == null) {
                delete content[key];
            }
        }
    }

    if (method === HTTP_METHODS.GET) {
        // If it's a GET we need to create a URL containing the query params
        url = createURLForQueryParameters(url, content);
    } else if (method !== HTTP_METHODS.DELETE) {
        options.headers = new Headers({
            'Content-type': contentType
        });

        options.body = (contentType !== MIME_TYPES.PLAIN_TEXT)
            ? JSON.stringify(content)
            : content;
    }

    // Add the base API URL
    url = `${BASE_API_URL}${url}`;

    return fetch(url, options)
        .then((response) => response.json())
        .catch((error) => {
            if (DEVELOPER_MODE) {
                console.error(error);
            }
            return Promise.reject(error);
        });
};

const fetchDELETE = (url, fetchOptions) => {
    return doFetchCall(url, null, HTTP_METHODS.DELETE, fetchOptions);
};

const fetchGET = (url, queryParameters, fetchOptions) => {
    return doFetchCall(url, queryParameters, HTTP_METHODS.GET, fetchOptions);
};

const fetchPOST = (url, data, fetchOptions) => {
    return doFetchCall(url, data, HTTP_METHODS.POST, fetchOptions);
};

const fetchPUT = (url, data, fetchOptions) => {
    return doFetchCall(url, data, HTTP_METHODS.PUT, fetchOptions);
};

export {
    fetchDELETE,
    fetchGET,
    fetchPOST,
    fetchPUT,

    MIME_TYPES
};