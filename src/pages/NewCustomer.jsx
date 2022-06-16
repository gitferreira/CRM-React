
import CustomerForm from '../components/CustomerForm';


const NewCustomer = () => {
  return (
  <>
  <h1 className='font-black text-4xl text-blue-900 '>New Customer</h1>
  <p className='mt-3 '>Fill out the following fields to register a new customer</p>
  <CustomerForm />
  </>
  )
}

export default NewCustomer