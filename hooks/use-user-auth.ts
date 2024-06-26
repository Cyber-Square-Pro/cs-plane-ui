import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import { UserService } from "@/services/user.service";
import { useMobxStore } from "@/store/store.provider";
import { IUser, IUserSettings } from "@/types/user";


const userService = new UserService();

export const useUserAuth = (routeAuth: "sign-in" | "onboarding" | "admin" | null = "admin") => {


  const router = useRouter();
  const {
    data: user,
    isLoading,
    error,
    mutate,
  } = useSWR<IUser>('CURRENT_USER', () => userService.currentUser(), {
    refreshInterval: 0,
    shouldRetryOnError: false,
  });

  const {
    user: { fetchCurrentUserSettings },

  } = useMobxStore();



  useEffect(() => {

    const handleWorkSpaceRedirection = async () => {
      fetchCurrentUserSettings()
        .then((userSettings: IUserSettings) => {
          const workspaceSlug =
            userSettings?.workspace?.last_workspace_slug || userSettings?.workspace?.fallback_workspace_slug;
          if (workspaceSlug) router.push(`/workspaces/${workspaceSlug}`);
        }
        )

    }


    const handleUserRouteAuthentication = async () => {
       
      if (user && user.is_active) {

        if (routeAuth === "sign-in") {
          if (user.is_onboarded) {
            alert('user is onbarded')
            handleWorkSpaceRedirection();
          }

          else {
            alert('user is not onboarded')
            router.push("/onboarding");
            return;
          }
        } 
        
        else if (routeAuth === "onboarding") {
          
          if (user.is_onboarded) handleWorkSpaceRedirection();
          else router.push("/onboarding");
          
        } 
        
        // else {
        //   if (!user.is_onboarded) {
        //     router.push("/onboarding");
        //     return;
        //   } else {
        //     // setIsRouteAccess(() => false);
        //     return;
        //   }
        // }
      } else {
        return;
      }
    };

    if (user && !isLoading) {
      handleUserRouteAuthentication();
    }

  }, [user])

  return {

    user: error ? undefined : user,
    mutateUser: mutate,
  };
}