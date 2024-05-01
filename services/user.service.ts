import { API_BASE_URL } from "@/config/server.api.config";
import { APIService } from "./api.service";
import { IUser, IUserSettings } from "@/types/user";

export class UserService extends APIService {
    constructor() {
      console.log('next url', API_BASE_URL
      );
      
      super(API_BASE_URL);
    }

    async updateUser(data: Partial<IUser>): Promise<any> {
      console.log('in store22222', data)
        return this.patch("/api/users/me/", data)
          .then((response) => response?.data)
          .catch((error) => {
            throw error?.response?.data;
          });
      }

      async currentUser(): Promise<IUser> {
        return this.get("/api/users/me/")
          .then((response) => response?.data)
          .catch((error) => {
            throw error?.response;
          });
      }

      async updateUserOnBoard({ userRole }: any, user: IUser | undefined): Promise<any> {
        return this.patch("/api/users/me/onboard/", {
          is_onboarded: true,
        })
          .then((response) => {
             console.log('onboardrd')
            return response?.data;
          })
          .catch((error) => {
            throw error?.response?.data;
          });
      }

      async currentUserSettings(): Promise<IUserSettings> {
        return this.get("/api/users/me/settings/")
          .then((response) => response?.data)
          .catch((error) => {
            throw error?.response;
          });
      }
}