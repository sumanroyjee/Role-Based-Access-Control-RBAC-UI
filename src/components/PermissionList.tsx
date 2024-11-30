import React from 'react';
import { Key, Check, X } from 'lucide-react';
import { mockPermissions } from '../data/mockData';

export default function PermissionList() {
  return (
    <div>
      <div className="flex items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Permissions</h2>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Permission</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Resource</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Action</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Description</th>
            </tr>
          </thead>
          <tbody>
            {mockPermissions.map(permission => (
              <tr key={permission.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 flex items-center space-x-2">
                  <Key className="w-4 h-4 text-gray-400" />
                  <span>{permission.name}</span>
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
                <td className="px-6 py-4 text-gray-600">{permission.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}