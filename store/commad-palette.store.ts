import { RootStore } from "./root.store";
import {
  action,
  observable,
  makeObservable,
  runInAction
} from "mobx";



export interface ICommandPaletteStore {

    isCommandPaletteOpen: boolean;
    isCreateProjectModalOpen: boolean
   isSearchModalOpen: boolean


    // action
    toggleCreateProjectModal: (value?: boolean) => void;
    toggleSearchModal: (value?: boolean) => void;

}

export class CommandPaletteStore implements ICommandPaletteStore{

    isCommandPaletteOpen: boolean = false;
    isCreateProjectModalOpen: boolean = false;
    isSearchModalOpen: boolean = false;
    

    constructor(_rootStore: RootStore) {
        makeObservable(this, {
            isCommandPaletteOpen: observable.ref,
            isCreateProjectModalOpen: observable.ref,
            isSearchModalOpen: observable.ref,

            toggleCreateProjectModal: action,
            toggleSearchModal:action,
        })
      }

      // Created by Mohammed Rifad on May 25th, 2024 
      // function to toggle project creation modal
      
      toggleCreateProjectModal = (value?: boolean) => {
     
        if (value) {
          this.isCreateProjectModalOpen = value;
        } else {
          this.isCreateProjectModalOpen = !this.isCreateProjectModalOpen;
        }
                console.log('value',   this.isCreateProjectModalOpen )
      };
     



toggleSearchModal = (value?: boolean) => {
     
  // Created by Ramshija.kk on June 2nd, 2024 
      // function to toggle Search Button modal
  if (value) {
    this.isSearchModalOpen = value;
  } else {
    this.isSearchModalOpen = !this.isSearchModalOpen;
  }
          console.log('value',   this.isSearchModalOpen )
      };
}
     

                                                                                                                                                                                                                                      