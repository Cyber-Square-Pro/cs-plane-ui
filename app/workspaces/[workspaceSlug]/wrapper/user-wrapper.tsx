import { Spinner } from "@/components/spinner";
import { useMobxStore } from "@/store/store.provider";
import React, { FC } from "react";
import useSWR from "swr";

/*
  Author: Mohammed Rifad on June 1st, 2024.
  Purpose: Fetches current user and workspace details. 
*/

export interface Props {
  children: React.ReactNode;
}

export const UserWrapper: FC<Props> = (props) => {
  const { children } = props;
  const {
    user: { fetchCurrentUser },
    workspace: { fetchWorkspaces },
  } = useMobxStore();

  const {isLoading: currenUserLoading} = useSWR(
    "CURRENT_USER_DETAILS",
    () => fetchCurrentUser(),
    {
      shouldRetryOnError: false,
    }
  );

  const { isLoading: workspacesLoading } = useSWR(
    `USER_WORKSPACES_LIST`,
    () => fetchWorkspaces(),
    {
      shouldRetryOnError: false,
    }
  );


  if (currenUserLoading ||  workspacesLoading) {
    return (
      <div className="h-screen grid place-items-center p-4 bg-custom-background-100">
        <div className="flex flex-col items-center gap-3 text-center">
          <Spinner size={"large"} />
        </div>
      </div>
    );
  }
  return <>{children}</>;
};
