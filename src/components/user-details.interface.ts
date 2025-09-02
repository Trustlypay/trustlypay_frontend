import type { RolePermissionsEnum } from "./sidebar/role-permissions.enum";

export interface IUserDetails {
  pk_dashboard_user_id: number;
  username: string;
  email: string;
  created_at: Date;
  role: string;
  role_permission: RolePermissionsEnum[];
}
