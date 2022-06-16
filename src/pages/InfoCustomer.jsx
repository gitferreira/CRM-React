import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";

const InfoCustomer = () => {
  const [customer, setCustomer] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const obtainClientAPI = async () => {
      try {
        const url = `http://localhost:5000/customers/${id}`;
        const response = await fetch(url);
        const result = await response.json();
        setCustomer(result);
      } catch (error) {
        console.log(error);
      }
      setTimeout(()=>{
        setLoading(!loading);
      }, 1000)
      
    };
    obtainClientAPI();
  }, []);

  return loading ? (
  <Spinner />
  ) : Object.keys(customer).length === 0 ? (
    <p>No results</p>
  ) : (
    <div>
      <h1 className="text-4xl font-black text-blue-900">
        {" "}
        Customer: {customer.name}{" "}
      </h1>
      <p className=" mt-3 ">Customer Data</p>

      <p className="text-2xl text-gray-700 mt-4 ">
        <span className=" uppercase font-bold">Email: </span>
        {customer.email}
      </p>
      {customer.phone && (
        <p className="text-2xl text-gray-700 mt-4">
          <span className=" uppercase font-bold">Phone Number: </span>
          {customer.phone}
        </p>
      )}

      <p className="text-2xl text-gray-700 mt-4">
        <span className=" uppercase font-bold">Organization: </span>
        {customer.organization}
      </p>

      {customer.notes && (
        <p className="text-2xl text-gray-700 mt-4">
          <span className=" uppercase font-bold">Notes: </span>
          {customer.notes}
        </p>
      )}
    </div>
  );
};

export default InfoCustomer;
