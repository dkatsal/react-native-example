export interface UserProfile {
  user_id: number;
  date_of_admission: any | null;
  planned_discharge_date: any | null;
  discharge_date: any | null;
  first_name: string;
  last_name: string;
  dob: any | null;
  gender: any | null;
  record_number: any | null;
  ss_number: any | null;
  member_id: any | null;
  pin: any | null;
  comments: any | null;
  deleted_at: any | null;
  photos: IPhoto[];
}

export interface UserContact {
  phone: string;
  mobile: string;
}

export interface User {
  id: number;
  created_at: string;
  email: string;
  name: string;
}

export interface Option {
  created_at?: string;
  deleted_at?: any;
  id?: number;
  permissions: {
    create_edit_manage_user: number | boolean;
    create_edit_patient: number | boolean;
    create_edit_questionnaire: number | boolean;
    fill_questionnaire: number | boolean;
    sign_in: number | boolean;
    view_manage_user_list: number | boolean;
    view_patient_list: number | boolean;
    view_questionnaire_list: number | boolean;
    view_reports: number | boolean;
  };
  user_id?: number;
  is_policy_accepted: number;
}

export interface UserData {
  user: User;
  profile: UserProfile;
  option: Option;
  role: {
    id: number;
    name: string;
    description: string;
  };
  contact: UserContact;
}

export interface UpdateUserProfile {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  mobile: string;
  comments: string;
  photos: number[];
}
export interface UpdateUserPassword {
  password: string;
}

export interface TokenData {
  token_type: string;
  expires_in: number;
  access_token: string;
  refresh_token: string;
}

export interface IPhoto {
  details: {
    ext: string;
    name: string;
    original_name: string;
    size: number;
    storagepath: string;
  };
  file: string;
  id: number;
  owner_id: number;
  type: string;
  user_id: number;
}
