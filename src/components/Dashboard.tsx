import React from 'react';
import { Users, Shield, Key, Activity } from 'lucide-react';
import { mockUsers, mockRoles, mockPermissions } from '../data/mockData';

export default function Dashboard() {
  const stats = [
    {
      title: 'Total Users',
      value: mockUsers.length,
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      title: 'Active Roles',
      value: mockRoles.length,
      icon: Shield,
      color: 'bg-green-500',
    },
    {
      title: 'Permissions',
      value: mockPermissions.length,
      icon: Key,
      color: 'bg-purple-500',
    },
    {
      title: 'Active Users',
      value: mockUsers.filter(user => user.isActive).length,
      icon: Activity,
      color: 'bg-yellow-500',
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-3xl font-bold text-gray-800">{stat.value}</span>
              </div>
              <h3 className="text-gray-600 font-medium">{stat.title}</h3>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Users</h3>
          <div className="space-y-4">
            {mockUsers.slice(0, 3).map(user => (
              <div key={user.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-600 font-medium">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{user.name}</p>
                    <p className="text-sm text-gray-600">{user.email}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  user.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {user.isActive ? 'Active' : 'Inactive'}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Role Distribution</h3>
          <div className="space-y-4">
            {mockRoles.map(role => {
              const userCount = mockUsers.filter(user => user.roleId === role.id).length;
              const percentage = (userCount / mockUsers.length) * 100;
              
              return (
                <div key={role.id}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-600">{role.name}</span>
                    <span className="text-sm text-gray-600">{userCount} users</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}