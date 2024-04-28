import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import { useMobxStore } from "@/store/store.provider";
import { IUser, IUserSettings } from "@/types/user";
import { parseCookies } from "nookies";
import { access } from "fs";



export const useUserAuth = (routeAuth: "sign-in" | "onboarding" | "admin" | null = "admin") => {


  const router = useRouter();
  const {
    data: user,
    isLoading,
    error,
    mutate,
  } = useSWR<any>('CURRENT_USER', () => fetchUser(), {
    refreshInterval: 0,
    shouldRetryOnError: false,
  });

  const {
    user: { fetchCurrentUserSettings },

  } = useMobxStore();


  const fetchUser = async (): Promise<IUser | null> => {
    const response = await fetch("api/users/me")
     
    return response.json();
  }
  // async fetchUser():Promise<IUser>  {
  //   const cookies = parseCookies();  
  //   const accessToken = cookies.accessToken; 
  //   console.log(accessToken, 'token is')
  //   const response = await fetch("api/user/me", {
  //     method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`, // Include access token in headers
  //       },
  //       credentials: "include", 

  //   })

  //   console.log('user data', response)
  //   return response
  // }


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