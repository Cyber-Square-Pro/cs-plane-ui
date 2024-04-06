import axios from "axios";

export abstract class APIService {

    protected baseURL: string;
    protected headers: any = {};
    constructor(baseURL: string) {
        this.baseURL = baseURL;
    }

    setRefreshToken(token: string) {
        localStorage.setItem('refreshToken', token)
    }
    setAccessToken(token: string) {
        localStorage.setItem('accessToken', token)
    }

    purgeRefreshToken() {
        // todo
    }

    getAccessToken() {
        console.log('sending access token')
        return localStorage.getItem('accessToken')
    }

    getRefreshToken() {
        return localStorage.getItem('refreshToken')
    }


    getHeaders() {
        return {
            Authorization: `Bearer ${this.getAccessToken()}`,
        };
    }

    get(url: string, config = {}): Promise<any> {
        console.log(this.getAccessToken() ? this.getHeaders() : {}, )
        return axios({
          method: "get",
          url: this.baseURL + url,
          headers: this.getAccessToken() ? this.getHeaders() : {},
          ...config,
        }) 
      }
    

    post(url: string, data = {}, config = {}): Promise<any> {
        return axios({
            method: "post",
            url: this.baseURL + url,
            data,
            headers: this.getAccessToken() ? this.getHeaders() : {},
            ...config,
        })

    }
    put(url: string, data = {}, config = {}): Promise<any> {
        return axios({
          method: "put",
          url: this.baseURL + url,
          data,
          headers: this.getAccessToken() ? this.getHeaders() : {},
          ...config,
        });
      }
    
      patch(url: string, data = {}, config = {}): Promise<any> {
        return axios({
          method: "patch",
          url: this.baseURL + url,
          data,
          headers: this.getAccessToken() ? this.getHeaders() : {},
          ...config,
        });
      }
    
      delete(url: string, data?: any, config = {}): Promise<any> {
        return axios({
          method: "delete",
          url: this.baseURL + url,
          data: data,
          //   headers: this.getAccessToken() ? this.getHeaders() : {},
          ...config,
        });
      }

}