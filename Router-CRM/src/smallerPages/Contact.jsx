import React, { useEffect, useState } from 'react'
import { useLoaderData , Form, redirect} from 'react-router-dom'

const Contact = () => {
  const [up,setUp] = useState(0)
    const {data} = useLoaderData()

    useEffect(() => {
      setUp(data)
    },[data])

  return (
    <div>
      <img src={data.img} alt="" height={'200px'}/>
      <ul>
        <ol>{data.name}</ol>
        <ol>{data.age}</ol>
        <ol>{data.job}</ol>
        <ol>{data.email}</ol>
      </ul>
      <Form action='edit'>
        <button type='submit'>Edit</button>
      </Form>
      <Form action='destroy' method='post'>
        <button type='submit'>Delete</button>
      </Form>
    </div>
  )
}

export const loader = async ({params}) => {
    try{
    const block = await fetch(`http://localhost:3000/user/${params.contactId}`)
    const data = await block.json()
    return { data }
    }catch(error){
        console.log(error);
    }
    
}


export default Contact
