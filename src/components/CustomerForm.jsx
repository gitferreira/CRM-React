import React from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Alert from "./Alert";
import Spinner from "./Spinner";

const CustomerForm = ({ customer, loading }) => {
  const navigate = useNavigate();

  const newCustomerSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name is too short")
      .max(40, "Name is too long")
      .required("Name is a required field"),
    organization: Yup.string().required("Name of the organization is required"),
    email: Yup.string().email().required("Email is required"),
    phone: Yup.number()
      .integer("Not a valid phone number")
      .positive("Not a valid phone number")
      .typeError("Not a valid phone number"),
    notes: "",
  });

  const handleSubmit = async (values) => {
    try {
      let response;
      if (customer.id) {
        //Edit Customer
        const url = `${import.meta.env.VITE_API_URL}/${customer.id}`;
        response = await fetch(url, {
          method: "PUT",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        //New Customer
        const url = import.meta.env.VITE_API_URL;
        response = await fetch(url, {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
      const result = await response.json();
      navigate("/customers");

    } catch (error) {
      console.log(error);
    }
  };

  return loading ? (
    <Spinner />
  ) : (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
        {customer?.name ? "Edit Customer" : "Add Customer"}
      </h1>
      <Formik
        initialValues={{
          name: customer?.name ?? "",
          organization: customer?.organization ?? "",
          email: customer?.email ?? "",
          phone: customer?.phone ?? "",
          notes: customer?.notes ?? "",
        }}
        enableReinitialize={true}
        onSubmit={async (values, { resetForm }) => {
          await handleSubmit(values);
          resetForm();
        }}
        validationSchema={newCustomerSchema}
      >
        {({ errors, touched }) => {
          return (
            <Form className="mt-10">
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="name">
                  Name
                </label>
                <Field
                  id="name"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Customer Name"
                  name="name"
                />
                {errors.name && touched.name ? (
                  <Alert>{errors.name}</Alert>
                ) : null}
              </div>

              <div className="mb-4">
                <label className="text-gray-800" htmlFor="Organization">
                  Organization
                </label>
                <Field
                  id="organization"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Customer Organization"
                  name="organization"
                />
                {errors.organization && touched.organization ? (
                  <Alert>{errors.organization}</Alert>
                ) : null}
              </div>

              <div className="mb-4">
                <label className="text-gray-800" htmlFor="email">
                  Email
                </label>
                <Field
                  id="email"
                  type="email"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Customer Email"
                  name="email"
                />
                {errors.email && touched.email ? (
                  <Alert>{errors.email}</Alert>
                ) : null}
              </div>

              <div className="mb-4">
                <label className="text-gray-800" htmlFor="phone">
                  Phone
                </label>
                <Field
                  id="phone"
                  type="tel"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Customer Phone"
                  name="phone"
                />
                {errors.phone && touched.phone ? (
                  <Alert>{errors.phone}</Alert>
                ) : null}
              </div>

              <div className="mb-4">
                <label className="text-gray-800" htmlFor="notes">
                  Notes
                </label>
                <Field
                  as="textarea"
                  id="notes"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50 h-40"
                  placeholder="Add notes"
                  name="notes"
                />
              </div>
              <input
                type="submit"
                value={customer?.name ? "Edit Customer" : "Add Customer"}
                className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

CustomerForm.defaultProps = {
  customer: {},
  loading: false,
};

export default CustomerForm;
