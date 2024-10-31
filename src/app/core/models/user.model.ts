export interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: null;
  roleName: string;
}

export interface UserCreation {
  id: number;
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
  roleId?: number;
}
