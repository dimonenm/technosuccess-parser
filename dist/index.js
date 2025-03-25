"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// Make a request for a user with a given ID
axios_1.default
    .get('https://technosuccess.ru/index.php?dispatch=products.search&q=Perfeo&search_performed=Y')
    .then(function (response) {
    // handle success
    // console.log('status: ', response.status)
    // console.log('statusText: ', response.statusText)
    // console.log('headers: ', response.headers)
    // console.log('config: ', response.config)
    console.log('request: ', response.request);
    // console.log('data: ', response.data)
    // interface AxiosResponse<T = any, D = any> {
    //   data: T
    //   status: number
    //   statusText: string
    //   headers: RawAxiosResponseHeaders | AxiosResponseHeaders
    //   config: InternalAxiosRequestConfig<D>
    //   request?: any
    // }
})
    .catch(function (error) {
    // handle error
    console.log(error);
})
    .finally(function () {
    // always executed
});
