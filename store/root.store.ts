import { IWorkspace } from "@/types/workspace";
import { IUserStore, UserStore } from "./user.store";
import { IWorkspaceStore, WorkspaceStore } from "./workspace.store";
import { CommandPaletteStore, ICommandPaletteStore } from "./commad-palette.store";
import { IProjectStore, ProjectStore } from "./project.store";

export class RootStore {
    commandPalette:ICommandPaletteStore;
    project: IProjectStore;
    user: IUserStore;
    workspace:IWorkspaceStore;

    constructor(){
        this.user = new UserStore(this);
        this.workspace = new WorkspaceStore(this)
        this.commandPalette = new CommandPaletteStore(this);
        this.project = new ProjectStore(this);
    }

}