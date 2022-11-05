import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjQ2MmNhZTlmNDc2YjIxOWM3Y2IwOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NzYwMzAzMywiZXhwIjoxNjY3ODYyMjMzfQ.-vrNYMemoeZEEVSf0dRQfus1o-sKGUoZnxrIUvade6I"
export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token:`Bearer ${TOKEN}`}
})