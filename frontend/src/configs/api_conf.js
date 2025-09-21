import axios from "axios"

export const API_URI = "http://localhost:8081/document-gen"
export const axiosConf = axios.create({
    baseURL: API_URI,
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'txnRefId': generateRef()
    }
});

function generateRef() {
    let min = 10000000;
    let max = 99999999;
    let date = new Date();
    let dateStr = date.getFullYear().toString().slice(-2) +
        String(date.getMonth() + 1).padStart(2, '0') +
        String(date.getDate()).padStart(2, '0') +
        String(date.getHours()).padStart(2, '0') +
        String(date.getMinutes()).padStart(2, '0') +
        String(date.getSeconds()).padStart(2, '0');
    let randomNum = Math.floor(Math.random() * (max - min) + min);
    return dateStr + randomNum.toString();
}

export function getMyIp() {
    let ipdata = fetch(`https://api.ipify.org?format=json`)
        .then(res => res).catch(err => { console.log(err) }).finally(() => { console.log("IP API call finished"); });
    console.log(ipdata);
}