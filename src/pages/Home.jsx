import { useEffect, useState } from "react";
import Customer from "../components/Customer";

const Home = () => {

 
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const getCustomersAPI = async () => {
      try {
        const url = import.meta.env.VITE_API_URL;
        const response = await fetch(url);
        const result = await response.json();
        setCustomers(result);
      } catch (error) {
        console.log(error);
      }
    };
    getCustomersAPI();
  }, []);


  const handleDelete = async (id) =>  {
    const confirmation = confirm('Do you really want to delete this customer?')
    if(confirmation) {
      try {
        const url = `${import.meta.env.VITE_API_URL}/${id}`
        const response = await fetch(url, {
          method: "DELETE",


        })

        await response.json()
        const customersArray = customers.filter( customer => customer.id !== id) 
        setCustomers(customersArray)
      } catch(error) {
        console.log(error)
      }
    }
  }

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900 ">Customers</h1>
      <p className="mt-3 ">Manage your customers</p>
      <table className="w-full mt-5 table-auto shadow bg-white">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Organization</th>
            <th className="p-2">Contact</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map( customer => (
            <Customer
            key = {customer.id}
            customer = {customer}
            handleDelete = {handleDelete}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
