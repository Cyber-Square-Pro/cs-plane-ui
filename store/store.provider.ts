 
import { createContext, useContext } from "react";
import { RootStore } from "./root.store";

let rootStore: RootStore = new RootStore();
const MobxStoreContext = createContext<RootStore>(rootStore);

// hook
export const useMobxStore = () => {
    const context = useContext(MobxStoreContext);
    if (context === undefined) throw new Error("useMobxStore must be used within MobxStoreProvider");
    return context;
}