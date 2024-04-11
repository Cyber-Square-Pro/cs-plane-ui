import React from "react";
import { WorkspaceForm } from "@/components/forms/account/workspace-form";
import { ToastContainer } from "react-toastify";
import { IWorkspace } from "@/types/workspace";
import { Toast } from "@/lib/toast/toast";
import { RESTRICTED_URLS } from "@/constants/workspace";
import { TOnboardingSteps } from "@/types/user";
import { WorkspaceService } from "@/services/workspace";
import { useMobxStore } from "@/store/store.provider";
import { FormHeading } from "@/components/form-elements/form-heading";

 
export const Workspace = () => {
  const toast = new Toast();
  
  const workspaceService = new WorkspaceService();
  const { workspace: workspaceStore } = useMobxStore();

  const handleCreateWorkspace = async (formData: Partial<IWorkspace>) => {
    console.log("workspace data", formData);
    console.log("ww", formData?.slug);
    if (RESTRICTED_URLS.includes(formData?.slug ?? "")) {
      toast.showToast("error", "Invalid Workspace name");
      return;
    } 
    await workspaceService
    .workspaceSlugCheck(formData?.slug ?? "")
    .then(async (response) => {
      console.log(response.status,'**')
      if (response.status === true) {
        await workspaceStore
          .createWorkspace(formData)
          .then( (response: any) => {
            
            toast.showToast("success", "Workspace Created");
           
          });
      } else {
        toast.showToast("error", "Workspace Exists");
      }
    });
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="max-w-xl px-4 w-full">
        <FormHeading headingText="What will your workspace be?" />
        <div>
          <WorkspaceForm onSubmit={handleCreateWorkspace} />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};


