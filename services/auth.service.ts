import { API_BASE_URL } from "@/config/server.api.config";
import { APIService } from "./api.service";
import { IEmailPasswordFormValues } from "@/types/user";

export class AuthService extends APIService {
    constructor() {
      console.log('next url', API_BASE_URL
      );
      
      super(API_BASE_URL);
    }


    async userSignUp(data:IEmailPasswordFormValues): Promise<any> {
        console.log(data)
          return this.post("/api/user/sign-up/", data, { headers: {} })
            .then((response) => {
              this.setAccessToken(response?.data?.access_token);
              this.setRefreshToken(response?.data?.refresh_token);
              return response?.data;
            })
            .catch((error) => {
              throw error?.response?.data;
            });
        }

    async userSignIn(data:IEmailPasswordFormValues): Promise<any> {
        
         return this.post("/api/user/sign-in/", data, { headers: {} })
              .then((response) => {
                console.log('response is ', response?.data.status_code)
                this.setAccessToken(response?.data?.access_token);
                this.setRefreshToken(response?.data?.refresh_token);
                return response?.data;
              })
              .catch((error) => {
                throw error?.response?.data;
              });
          }
}