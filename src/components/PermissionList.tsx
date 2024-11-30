import React from 'react';
import { Key, Check, X } from 'lucide-react';
import { mockPermissions } from '../data/mockData';

export default function PermissionList() {
  return (
    <div className="space-y-6">
      <div className="flex items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Permissions</h2>
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-4">
        {mockPermissions.map(permission => (
          <div key={permission.id} className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Key className="w-4 h-4 text-gray-400" />
              <span className="font-medium text-gray-900">{permission.name}</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Resource:</span>
                <span className="px-2 py-1 bg-gray-100 rounded-full text-sm">
                  {permission.resource}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Action:</span>
                <span className={`px-2 py-1 rounded-full text-sm ${
                  permission.action === 'read'
                    ? 'bg-green-100 text-green-800'
                    : permission.action === 'create'
                    ? 'bg-blue-100 text-blue-800'
                    : permission.action === 'update'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {permission.action}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-2">{permission.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden md:block bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Permission</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Resource</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Action</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockPermissions.map(permission => (
                <tr key={permission.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <Key className="w-4 h-4 text-gray-400" />
                      <span className="font-medium text-gray-900">{permission.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-gray-100 rounded-full text-sm">
                      {permission.resource}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      permission.action === 'read'
                        ? 'bg-green-100 text-green-800'
                        : permission.action === 'create'
                        ? 'bg-blue-100 text-blue-800'
                        : permission.action === 'update'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {permission.action}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{permission.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}