import axios from "axios";

const BASE_URL = "https://api-hagens2.herokuapp.com/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjQ2MmNhZTlmNDc2YjIxOWM3Y2IwOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2Nzc5NzE2MCwiZXhwIjoxNjY4MDU2MzYwfQ.b4PvZQdojq5NGV4x4Xd8iwOZ2jsFNLrfmymhK4Wrd0g"
export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token:`Bearer ${TOKEN}`}
})