export interface User {
    id: string;
    name: string;
    email: string;
    roleId: string;
    isActive: boolean;
  }
  
  export interface Role {
    id: string;
    name: string;
    description: string;
    permissions: Permission[];
  }
  
  export interface Permission {
    id: string;
    name: string;
    description: string;
    resource: string;
    action: 'create' | 'read' | 'update' | 'delete';
  }