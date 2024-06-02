import { IProject } from "@/types/project";
import { RootStore } from "./root.store";
import {
  action,
  makeObservable,
  computed,
  runInAction,
  observable
} from "mobx";

export interface IProjectStore {

    projects: { [workspaceSlug: string]: IProject[] };

    //computed
    workspaceProjects: IProject[] | null;

    //actions
    createProject: (workspaceSlug: string, data: any) => Promise<any>;
}

export class ProjectStore implements IProjectStore {

    projects: { [workspaceSlug: string]: IProject[] } = {};
    // workspaceProjects: IProject[] | null = null;
    rootStore;

    constructor(_rootStore: RootStore) {
        makeObservable(this, {
            projects: observable.ref,

            //computed
            workspaceProjects: computed,
    
        })
        this.rootStore = _rootStore;
         
      }

      get workspaceProjects() {
        if (!this.rootStore.workspace.workspaceSlug) return null;
        const projects = this.projects[this.rootStore.workspace.workspaceSlug];
        if (!projects) return null;
        return projects;
      }




    
      createProject = async (workspaceSlug: string, data: any) => {
        
      }

      
}