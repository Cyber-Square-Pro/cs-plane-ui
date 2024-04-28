import { IUser, IUserSettings } from "@/types/user";
import { RootStore } from "./root.store";
import {
  action,
  observable,
  makeObservable,
  runInAction
} from "mobx";



export interface IUserStore {
  currentUser: IUser | null;
  currentUserEmail: string | null;
  currentUserSettings: IUserSettings | null;

  // updateUserOnBoard: () => Promise<void>;
  setCurrentUserEmail: (email: string) => void;
  fetchCurrentUserSettings: () => Promise<IUserSettings>;
  updateCurrentUser: (data: Partial<IUser>) => Promise<IUser>;
  fetchCurrentUser: () => Promise<any>;
}

export class UserStore implements IUserStore {

  currentUser: IUser | null = null;
  currentUserEmail: string | null = null;

  currentUserSettings: IUserSettings | null = null;


  constructor(_rootStore: RootStore) {
    makeObservable(this, {
      currentUser: observable.ref,
      // updateUserOnBoard: action,
      currentUserEmail: observable,
      currentUserSettings: observable.ref,

    })

  }

  setCurrentUserEmail = (email: string) => {
    localStorage.setItem('currentUserEmail', email);
  }




  fetchCurrentUser = async () => {
    try {
      console.log('in store')

      const response = await fetch("api/users/me")


      if (response.ok) {
        const userData = await response.json();
        return userData;
        // For example, update state or trigger actions
      }

      // console.log(response.json(),'66666')

    } catch (error) {
      runInAction(() => {

      });
      throw error;
    }
  };




  updateCurrentUser = async (data: Partial<IUser>) => {
    try {
      // runInAction(() => {
      //   this.currentUser = {
      //     ...this.currentUser,
      //     ...data,
      //   } as IUser;
      // });

      const response = await fetch("api/users/me", {
        method: "PATCH",
        body: JSON.stringify(data)
      })

      if (response.ok) {
        const userData = await response.json();
        return userData;
        // For example, update state or trigger actions
      }
      // runInAction(() => {
      //   this.currentUser = response;
      // });

    } catch (error) {


      throw error;
    }
  };


  // updateUserOnBoard = async () => {
  //   console.log('updatimg user onboard')
  //   try {
  //     runInAction(() => {
  //       this.currentUser = {
  //         ...this.currentUser,
  //         is_onboarded: true,
  //       } as IUser;
  //     });

  //     const user = this.currentUser ?? undefined;

  //     if (!user) return;

  //     await this.userService.updateUserOnBoard({ userRole: user.role }, user);
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  fetchCurrentUserSettings = async () => {
    try {
      // const response = await this.userService.currentUserSettings();
      const response = await fetch("api/users/me/settings/")

      // if (response) {
      //   runInAction(() => {
      //     // this.currentUserSettings = response;
      //   });
      // }

      if (response.ok) {
        const userSettings = await response.json();
        console.log('user settings', userSettings)
        return userSettings;

      }

      return response;
    } catch (error) {
      throw error;
    }
  };

}