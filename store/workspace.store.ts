import { IWorkspace } from "@/types/workspace";
import { action, observable, runInAction, makeObservable, computed } from "mobx";
import { RootStore } from "./root.store";


export interface IWorkspaceStore {

    workspaceSlug: string | null;
    workspaces: IWorkspace[] | undefined;
    setWorkspaceSlug: (workspaceSlug: string) => void;
    getWorkspaceBySlug: (workspaceSlug: string) => IWorkspace | null;
    // fetchWorkspaces: () => Promise<IWorkspace[]>;
    createWorkspace: (data: Partial<IWorkspace>) => Promise<IWorkspace>;
    

    // computed
    currentWorkspace: IWorkspace | null;
    


  
}   

export class WorkspaceStore implements IWorkspaceStore {

  workspaceSlug: string | null = null;
  workspaces: IWorkspace[] | undefined = [];

  // workspaceService;

  setWorkspaceSlug = (workspaceSlug: string) => (this.workspaceSlug = workspaceSlug);
  getWorkspaceBySlug = (workspaceSlug: string) => this.workspaces?.find((w) => w.slug == workspaceSlug) || null;
  rootStore
constructor(_rootStore: RootStore) {
    makeObservable(this, {

      // observables
      workspaceSlug: observable.ref,
      workspaces: observable.ref,

      // actions
      setWorkspaceSlug: action,
      getWorkspaceBySlug: action,
    //   fetchWorkspaces: action,

      // workspace write operations
    //   createWorkspace: action,
      

      // computed
      currentWorkspace: computed,
    })

    this.rootStore = _rootStore;
 
  }

  get currentWorkspace() {
    if (!this.workspaceSlug) return null;

    return this.workspaces?.find((workspace) => workspace.slug === this.workspaceSlug) || null;
  }



  


  // fetchWorkspaces = async () => {
  //   try {
      

  //     const workspaceResponse =null;

  //     runInAction(() => {
  //       // this.workspaces = workspaceResponse;
         
  //     });

  //     return workspaceResponse;
  //   } catch (error) {
  //     console.log("Failed to fetch user workspaces in workspace store", error);

  //     runInAction(() => {
         
  //       this.workspaces = [];
  //     });

  //     throw error;
  //   }
  // };


  createWorkspace = async (data: Partial<IWorkspace>) => {
     
    try {
      // runInAction(() => {
      //   this.loader = true;
      //   this.error = null;
      // });



      const user = this.rootStore.user.currentUser ?? undefined;

      // const response = await this.workspaceService.createWorkspace(data);
      const response = await fetch("api/users/me/workspaces", {
        method: "POST",
        body: JSON.stringify(data)
      })

      runInAction(() => {
        // this.loader = false;
        // this.error = null;
        // this.workspaces = [...(this.workspaces ?? []), response];
      });
      if (response.ok) {
        const userData = await response.json();
        console.log('userdata', userData);
        
        return userData;
        // For example, update state or trigger actions
      }

  
    } catch (error) {
      // runInAction(() => {
      //   this.loader = false;
      //   this.error = error;
      // });

      throw error;
    }
  };
}


