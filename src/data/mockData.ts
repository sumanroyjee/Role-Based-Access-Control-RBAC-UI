import { User, Role, Permission } from '../types/rbac';

export const mockPermissions: Permission[] = [
  { id: '1', name: 'Read Users', description: 'View user list', resource: 'users', action: 'read' },
  { id: '2', name: 'Create Users', description: 'Create new users', resource: 'users', action: 'create' },
  { id: '3', name: 'Update Users', description: 'Modify user details', resource: 'users', action: 'update' },
  { id: '4', name: 'Delete Users', description: 'Remove users', resource: 'users', action: 'delete' },
  { id: '5', name: 'Read Roles', description: 'View role list', resource: 'roles', action: 'read' },
  { id: '6', name: 'Manage Roles', description: 'Create/Edit roles', resource: 'roles', action: 'create' },
];

export const mockRoles: Role[] = [
  {
    id: '1',
    name: 'Admin',
    description: 'Full system access',
    permissions: mockPermissions,
  },
  {
    id: '2',
    name: 'User Manager',
    description: 'Manage users only',
    permissions: mockPermissions.slice(0, 4),
  },
  {
    id: '3',
    name: 'Viewer',
    description: 'Read-only access',
    permissions: mockPermissions.filter(p => p.action === 'read'),
  },
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    roleId: '1',
    isActive: true,
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    roleId: '2',
    isActive: true,
  },
  {
    id: '3',
    name: 'Bob Wilson',
    email: 'bob@example.com',
    roleId: '3',
    isActive: false,
  },
];