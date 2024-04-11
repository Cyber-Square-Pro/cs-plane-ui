import { API_BASE_URL } from "@/config/server.api.config";
import { APIService } from "./api.service";
import { IWorkspace } from "@/types/workspace";
import { action, observable, runInAction, makeObservable, computed } from "mobx";


export class WorkspaceService extends APIService {
    constructor() {
      super(API_BASE_URL);
    }


    async createWorkspace(data: Partial<IWorkspace>): Promise<any> {
        return this.post("/api/user/me/workspaces/", data)
          .then((response) => {
            return response?.data;
          })
          .catch((error) => {
            throw error?.response?.data;
          });
      }
      async userWorkspaces(): Promise<IWorkspace[]> {
        return this.get("/api/user/me/workspaces/")
          .then((response) => response?.data)
          .catch((error) => {
            throw error?.response?.data;
          });
      }

      async workspaceSlugCheck(slug: string): Promise<any> {
        return this.get(`/api/workspace-slug-check/?slug=${slug}`)
          .then((response) => response?.data)
          .catch((error) => {
            throw error?.response?.data;
          });
      }
 
    //   fetchCurrentUserSettings = async () => {
    //     try {
    //       const response = await this.userService.currentUserSettings();
    //       if (response) {
    //         runInAction(() => {
    //           this.currentUserSettings = response;
    //         });
    //       }
    //       return response;
    //     } catch (error) {
    //       throw error;
    //     }
    //   };
   

     
}