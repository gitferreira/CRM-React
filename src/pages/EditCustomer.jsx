import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CustomerForm from "../components/CustomerForm";

const EditCustomer = () => {
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
      setTimeout(() => {
        setLoading(!loading);
      }, 1000);
    };
    obtainClientAPI();
  }, []);
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900 ">Edit Customer</h1>
      <p className="mt-3 ">
        Fill out the following fields to edit an existing customer
      </p>
      {customer?.name ? <CustomerForm customer={customer} loading={loading} /> : "Customer ID is not valid."}
    </>
  );
};

export default EditCustomer;
