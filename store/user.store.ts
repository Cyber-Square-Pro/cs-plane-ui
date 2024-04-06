import { IUser } from "@/types/user";
import { RootStore } from "./root.store";
import {
    action,
    observable,
    makeObservable,
    runInAction
} from "mobx";
import { UserService } from "@/services/user.service";


export interface IUserStore {
    currentUser: IUser | null;
    updateUserOnBoard: () => Promise<void>;
    updateCurrentUser: (data: Partial<IUser>) => Promise<IUser>;
    fetchCurrentUser: () => Promise<IUser>;
}

export class UserStore implements IUserStore {

    currentUser: IUser | null = null;
    userService;

    constructor(_rootStore: RootStore) {
        makeObservable(this, {
            currentUser: observable.ref,
            updateUserOnBoard: action,

        })
        this.userService = new UserService()
    }

    fetchCurrentUser = async () => {
        try {
          const response = await this.userService.currentUser();
          if (response) {
            runInAction(() => {
              this.currentUser = response;
    
            });
          }
          return response;
        } catch (error) {
          runInAction(() => {
    
          });
          throw error;
        }
      };

    updateCurrentUser = async (data: Partial<IUser>) => {
        try {
          runInAction(() => {
            this.currentUser = {
              ...this.currentUser,
              ...data,
            } as IUser;
          });
    
          const response = await this.userService.updateUser(data);
    
          runInAction(() => {
            this.currentUser = response;
          });
          return response;
        } catch (error) {
    
    
          throw error;
        }
      };


      updateUserOnBoard = async () => {
        console.log('updatimg user onboard')
        try {
          runInAction(() => {
            this.currentUser = {
              ...this.currentUser,
              is_onboarded: true,
            } as IUser;
          });
    
          const user = this.currentUser ?? undefined;
    
          if (!user) return;
    
          await this.userService.updateUserOnBoard({ userRole: user.role }, user);
        } catch (error) {
          throw error;
        }
      };
    
}