import { IWorkspace } from "@/types/workspace";
import { IUserStore, UserStore } from "./user.store";
import { IWorkspaceStore, WorkspaceStore } from "./workspace.store";

export class RootStore {

    user: IUserStore;
    workspace:IWorkspaceStore;

    constructor(){
        this.user = new UserStore(this);
        this.workspace = new WorkspaceStore(this)
    }

}