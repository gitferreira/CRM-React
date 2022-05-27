import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup'

const CustomerForm = () => {


  const newCustomerSchema = Yup.object().shape({
    
  })

  const handleSubmit = () => {

  }

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
        Add Customer
      </h1>
      <Formik
        initialValues={{
          name: "",
          organization: "",
          email: "",
          phone: "",
          notes: "",
        }}

        onSubmit={(values)=> (
          handleSubmit(values)
        )}
      >
        {() => (
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
              value="Add Customer"
              className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CustomerForm;
