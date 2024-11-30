import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Role, Permission } from '../../types/rbac';
import { mockPermissions } from '../../data/mockData';

interface RoleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (role: Omit<Role, 'id'>) => void;
  role?: Role;
}

export default function RoleModal({ isOpen, onClose, onSave, role }: RoleModalProps) {
  const [formData, setFormData] = useState({
    name: role?.name || '',
    description: role?.description || '',
    permissions: role?.permissions.map(p => p.id) || [],
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedPermissions = mockPermissions.filter(p => 
      formData.permissions.includes(p.id)
    );
    onSave({
      name: formData.name,
      description: formData.description,
      permissions: selectedPermissions,
    });
    onClose();
  };

  const handlePermissionToggle = (permissionId: string) => {
    setFormData(prev => ({
      ...prev,
      permissions: prev.permissions.includes(permissionId)
        ? prev.permissions.filter(id => id !== permissionId)
        : [...prev.permissions, permissionId],
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 p-4 overflow-y-auto">
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-lg w-full max-w-md relative">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-semibold text-gray-800">
              {role ? 'Edit Role' : 'Add New Role'}
            </h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-4">
            <div className="space-y-4">
              <div>
                <label 
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Role Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                  placeholder="Enter role name"
                />
              </div>

              <div>
                <label 
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                  rows={3}
                  placeholder="Enter role description"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Permissions
                </label>
                <div className="border rounded-lg p-3 max-h-48 overflow-y-auto space-y-2">
                  {mockPermissions.map((permission) => (
                    <div key={permission.id} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`permission-${permission.id}`}
                        checked={formData.permissions.includes(permission.id)}
                        onChange={() => handlePermissionToggle(permission.id)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor={`permission-${permission.id}`}
                        className="ml-2 block text-sm text-gray-700"
                      >
                        {permission.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {role ? 'Update' : 'Create'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}