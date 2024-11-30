# RBAC Admin Dashboard

A modern Role-Based Access Control (RBAC) admin dashboard built with React, TypeScript, and Tailwind CSS.

## Features

- 📊 Interactive Dashboard
  - Overview of system statistics
  - User activity monitoring
  - Role distribution visualization
- 👥 User Management
  - Create, edit, and delete users
  - Assign roles to users
  - Toggle user active status
- 🛡️ Role Management
  - Define and modify roles
  - Assign permissions to roles
  - Role-based access control
- 🔑 Permission Control
  - Granular permission management
  - Resource-based permissions
  - Action-based access control
- 📱 Responsive Design
  - Mobile-first approach
  - Adaptive layouts
  - Touch-friendly interfaces
- 🎨 Modern UI/UX
  - Clean and intuitive interface
  - Real-time updates
  - Smooth transitions

## Project Structure

```
src/
├── components/        # React components
│   ├── modals/       # Modal components
│   └── ...          
├── data/             # Mock data and constants
├── types/            # TypeScript type definitions
├── utils/            # Utility functions
└── App.tsx           # Main application component
```

## Component Overview

### User Management
- `UserList.tsx`: Displays and manages user data
- `UserModal.tsx`: Form for creating/editing users
- Features:
  - Add new users
  - Edit existing users
  - Delete users
  - Assign roles
  - Toggle active status

### Role Management
- `RoleList.tsx`: Displays and manages roles
- `RoleModal.tsx`: Form for creating/editing roles
- Features:
  - Create new roles
  - Edit role permissions
  - Delete roles
  - Assign permissions

### Dashboard
- `Dashboard.tsx`: Main dashboard view
- Features:
  - System statistics
  - User activity
  - Role distribution
  - Quick actions
