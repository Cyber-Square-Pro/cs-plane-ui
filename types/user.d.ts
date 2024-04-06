export interface IUser {
    id: string;
    avatar: string;
    cover_image: string | null;
    date_joined: string;
    display_name: string;
    email: string;
    first_name: string;
    last_name: string;
    is_active: boolean;
    is_bot: boolean;
    is_email_verified: boolean;
    is_managed: boolean;
    is_onboarded: boolean;
    is_tour_completed: boolean;
    mobile_number: string | null;
    role: string | null;
    onboarding_step: {
      email_verified?: boolean;
      workspace_join?: boolean;
      profile_complete?: boolean;
      workspace_create?: boolean;
      workspace_invite?: boolean;
    };
    last_workspace_id: string;
    user_timezone: string;
    username: string;
    theme: IUserTheme;
  }

  
export interface IEmailPasswordFormValues {
    email: string;
    password: string;
  };