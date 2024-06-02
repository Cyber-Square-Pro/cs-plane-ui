import { IWorkspace } from "@/types/workspace";
import { IUserStore, UserStore } from "./user.store";
import { IWorkspaceStore, WorkspaceStore } from "./workspace.store";
import { CommandPaletteStore, ICommandPaletteStore } from "./command-palette.store";
import { IProjectStore, ProjectStore } from "./project.store";

export class RootStore {

    user: IUserStore;
    workspace:IWorkspaceStore;
    commandPalette:ICommandPaletteStore
    project: IProjectStore

    constructor(){
        this.user = new UserStore(this);
        this.workspace = new WorkspaceStore(this);
        this.commandPalette = new CommandPaletteStore(this);
        this.project = new ProjectStore(this);
    }

}