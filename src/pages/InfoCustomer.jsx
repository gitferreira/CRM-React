import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const InfoCustomer = () => {

    const {id} = useParams()

    useEffect(()=> {
        const obtainClientAPI = async () => {
            try {
                const url = `http://localhost:3000/customers/${id}`
                const response = await fetch(url)
                const result = await response.json()
                console.log(result)
            } catch (error) {
                console.log(error)
            }
        }
        obtainClientAPI()
    }, [])

  return (
    <div>InfoCustomer</div>
  )
}

export default InfoCustomer