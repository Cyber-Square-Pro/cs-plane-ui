import { IUserStore, UserStore } from "./user.store";

export class RootStore {

    user: IUserStore;
    
    constructor(){
        this.user = new UserStore(this)
    }

}