import React, { useState } from 'react';
import { X } from 'lucide-react';
import { User, Role } from '../../types/rbac';
import { mockRoles } from '../../data/mockData';

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (user: Omit<User, 'id'>) => void;
  user?: User;
}

export default function UserModal({ isOpen, onClose, onSave, user }: UserModalProps) {
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    roleId: user?.roleId || mockRoles[0].id,
    isActive: user?.isActive ?? true,
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 p-4 overflow-y-auto">
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-lg w-full max-w-md relative">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-semibold text-gray-800">
              {user ? 'Edit User' : 'Add New User'}
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
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                  placeholder="Enter full name"
                />
              </div>

              <div>
                <label 
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
                  placeholder="Enter email address"
                />
              </div>

              <div>
                <label 
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Role
                </label>
                <select
                  id="role"
                  value={formData.roleId}
                  onChange={(e) => setFormData({ ...formData, roleId: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base bg-white"
                >
                  {mockRoles.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isActive"
                  checked={formData.isActive}
                  onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label 
                  htmlFor="isActive" 
                  className="ml-2 block text-sm text-gray-700"
                >
                  Active User
                </label>
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
                {user ? 'Update' : 'Create'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}