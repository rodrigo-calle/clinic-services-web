import { LoginType } from "../types/types";

const URL_BASE = 'https://biolab-api.fly.dev';
const login = (data: LoginType) => {
    const payload = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    return fetch(`${URL_BASE}/login-clients`, payload)
}

const client = {
    login
}

export default client;
