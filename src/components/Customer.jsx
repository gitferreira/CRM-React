import {useNavigate} from 'react-router-dom'

const Customer = ({ customer }) => {
  const { name, organization, email, notes, id, phone } = customer;
  const navigate = useNavigate()
  return (
    <tr className="border-b hover:bg-gray-100">
      <td className="p-3">{name}</td>
      <td className="p-3">
        <p>
          <span className="text-gray-800 uppercase font-bold">Email: </span>
          {email}
        </p>
        <p>
          <span className="text-gray-800 uppercase font-bold">Tel: </span>
          {phone}
        </p>
      </td>
      <td className="p-3">{organization}</td>
      <td className="p-3">
        <button type="button" className="bg-yellow-600 hover:bg-yellow-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3" onClick={() => navigate(`/customers/${id}`)}>Info</button>
        <button type="button" className="bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3">Edit</button>
        <button type="button" className="bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3">Delete</button>
      </td>
    </tr>
  );
};

export default Customer;
