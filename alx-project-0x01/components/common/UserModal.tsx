import { UserData, UserModalProps, Address, Company } from '@/interfaces';
import React, { useState } from 'react';

const emptyAddress: Address = {
  street: '',
  suite: '',
  city: '',
  zipcode: '',
  geo: { lat: '', lng: '' }
};

const emptyCompany: Company = {
  name: '',
  catchPhrase: '',
  bs: ''
};

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: '',
    username: '',
    email: '',
    address: emptyAddress,
    phone: '',
    website: '',
    company: emptyCompany
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name.startsWith('address.')) {
      const key = name.replace('address.', '') as keyof Address;
      setUser(prev => ({
        ...prev,
        address: { ...prev.address, [key]: value }
      }));
    } else if (name.startsWith('company.')) {
      const key = name.replace('company.', '') as keyof Company;
      setUser(prev => ({
        ...prev,
        company: { ...prev.company, [key]: value }
      }));
    } else {
      setUser(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center overflow-y-auto">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input name="name" value={user.name} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Username</label>
            <input name="username" value={user.username} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input type="email" name="email" value={user.email} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Phone</label>
            <input name="phone" value={user.phone} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Website</label>
            <input name="website" value={user.website} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="col-span-2 mt-2">
            <h3 className="font-semibold text-gray-700 mb-2">Address</h3>
            <div className="grid grid-cols-2 gap-2">
              <input placeholder="Street" name="address.street" value={user.address.street} onChange={handleChange} className="px-2 py-2 border rounded" />
              <input placeholder="Suite" name="address.suite" value={user.address.suite} onChange={handleChange} className="px-2 py-2 border rounded" />
              <input placeholder="City" name="address.city" value={user.address.city} onChange={handleChange} className="px-2 py-2 border rounded" />
              <input placeholder="Zipcode" name="address.zipcode" value={user.address.zipcode} onChange={handleChange} className="px-2 py-2 border rounded" />
            </div>
          </div>
          <div className="col-span-2 mt-2">
            <h3 className="font-semibold text-gray-700 mb-2">Company</h3>
            <div className="grid grid-cols-3 gap-2">
              <input placeholder="Name" name="company.name" value={user.company.name} onChange={handleChange} className="px-2 py-2 border rounded col-span-1" />
              <input placeholder="Catch Phrase" name="company.catchPhrase" value={user.company.catchPhrase} onChange={handleChange} className="px-2 py-2 border rounded col-span-2" />
              <input placeholder="BS" name="company.bs" value={user.company.bs} onChange={handleChange} className="px-2 py-2 border rounded col-span-3" />
            </div>
          </div>
          <div className="col-span-2 flex justify-between items-center mt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 text-gray-600 hover:text-gray-800">Cancel</button>
            <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;