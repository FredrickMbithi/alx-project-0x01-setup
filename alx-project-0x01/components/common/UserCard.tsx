import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, username, email, address, phone, website, company }) => {
  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-500">@{username}</p>
      </div>
      <div className="space-y-2 text-gray-600">
        <p><span className="font-semibold">Email:</span> {email}</p>
        <p><span className="font-semibold">Phone:</span> {phone}</p>
        <p><span className="font-semibold">Website:</span> {website}</p>
        <div className="mt-4">
          <p className="font-semibold text-gray-700">Address:</p>
          <p className="text-sm">{address.street}, {address.suite}</p>
          <p className="text-sm">{address.city}, {address.zipcode}</p>
        </div>
        <div className="mt-4">
          <p className="font-semibold text-gray-700">Company:</p>
          <p className="text-sm">{company.name}</p>
          <p className="text-xs italic text-gray-500">{company.catchPhrase}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;