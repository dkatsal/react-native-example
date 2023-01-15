import {KeyValueModel} from '../key-value.model';
import {ISelectOptions} from '../global';

export interface UserFormModel {
  user: {
    id?: number | string;
    email: string;
    password?: string;
  };
  user_profile: {
    first_name: string;
    last_name: string;
  };
  contact: {
    phone: string;
    mobile: string;
  };
  role: {
    role: ISelectOptions | null | any;
  };
  option?: {
    permissions: {
      sign_in: boolean;
      view_patient_list: boolean;
      create_edit_patient: boolean;
      view_questionnaire_list: boolean;
      create_edit_questionnaire: boolean;
      fill_questionnaire: boolean;
      view_reports: boolean;
      view_manage_user_list: boolean;
      create_edit_manage_user: boolean;
    };
  };
}

export interface Link {
  url: string | null;
  label: string;
  active: boolean;
}

export interface UserAddUpdatePayload {
  data: UserFormModel;
  callback?: () => void;
}

export interface ContactModel {
  id: number;
  owner_id: number;
  owner_type: string;
  state_id: number;
  state_code: any;
  country_id: number;
  address: string;
  address2: string;
  building: string;
  apartment: string;
  phone: string;
  mobile: string;
  city: string;
  zip: string;
  latitude: any;
  longitude: any;
  text: string;
  emergency_contact_name: string;
  telephone_number: string;
  cell_phone_number: string;
  email: string;
  deleted_at: string;
  state_title: string;
}

export interface RoleModel {
  id: number;
  name: string;
  description: string;
}

export interface UserByIdPayload {
  id: number;
  callback: (response: any) => void;
}

export interface DeletePayload {
  ids: number[];
  callback: () => void;
}

export interface UserById {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  contact: ContactModel[];
  role: RoleModel[];
  permissions:
    | {
        sign_in: boolean;
        view_patient_list: boolean;
        create_edit_patient: boolean;
        view_questionnaire_list: boolean;
        create_edit_questionnaire: boolean;
        fill_questionnaire: boolean;
        view_reports: boolean;
        view_manage_user_list: boolean;
        create_edit_manage_user: boolean;
      }
    | {}
    | null;
  photos: [];
}

export interface ManageUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
}

export interface UsersList {
  data: ManageUser[];
  current_page: number;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
  links: Link[];
}

export interface OrderingUsersModel {
  users?: {
    id?: string;
    email?: string;
    created_at?: string;
  };
  user_profiles?: {
    first_name?: string;
    last_name?: string;
  };
  roles?: {
    name: string;
  };
}

export interface FilterUsers {
  ordering?: OrderingUsersModel;
  searching: string;
  page?: number;
  ipp?: number;
}

export interface ManageUsersPayload {
  data: FilterUsers;
  page: number;
  callback?: (error: KeyValueModel<string>) => void;
}
