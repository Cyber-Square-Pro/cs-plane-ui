// import { API_BASE_URL } from "@/config/server.api.config";
// import { APIService } from "./api.service";
// import { IEmailPasswordFormValues } from "@/types/user";
// import axios, { AxiosInstance } from "axios";

// export class AuthService extends APIService {

//   private axiosObj: AxiosInstance;

//     constructor() {
//       super(API_BASE_URL);
//       this.axiosObj = axios.create();
//     }


//     async userSignUp(data:IEmailPasswordFormValues): Promise<any> {
//         console.log(data)
//           return this.axiosObj.post(API_BASE_URL + "/api/user/sign-up/", data, { headers: {} })
//             .then((response) => {
//               this.setAccessToken(response?.data?.access_token);
//               this.setRefreshToken(response?.data?.refresh_token);
//               return response?.data;
//             })
//             .catch((error) => {
//               throw error?.response?.data;
//             });
//         }

//     async userSignIn(data:IEmailPasswordFormValues): Promise<any> {
        
//          return this.axiosObj.post(API_BASE_URL +"/api/user/sign-in/", data)
//               .then((response) => {
//                 console.log('response is ', response?.data.status_code)
//                 this.setAccessToken(response?.data?.access_token);
//                 this.setRefreshToken(response?.data?.refresh_token);
//                 return response?.data;
//               })
//               .catch((error) => {
//                 throw error?.response?.data;
//               });
//           }
// }