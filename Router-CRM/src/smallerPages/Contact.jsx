import React, { useEffect, useState } from 'react'
import { useLoaderData , Form, redirect, useNavigate} from 'react-router-dom'

const Contact = () => {
  const Nav = useNavigate()
  const [up,setUp] = useState(0)
    const {data,q} = useLoaderData()

    useEffect(() => {
      setUp(data)
    },[data])

  return (
    <div>
      <img src={data.img} alt="" height={'200px'}/>
      <ul>
        <ol>name : {data.name ? data.name : 'no name'}</ol>
        <ol>age : {data.age ? data.age : 'not defined'}</ol>
        <ol>job : {data.job ? data.job : 'not defined'}</ol>
        <ol>email : {data.email ? data.email : 'not defined'}</ol>
      </ul>
      <Form action='edit' onSubmit={e => {
        e.preventDefault()
        Nav(`/contacts/${data.id}/edit${q ? `?q=${q}` : ''}`)
      }}>
        <button type='submit'>Edit</button>
      </Form>
      <Form action='destroy' method='post'>
        <button type='submit'>Delete</button>
      </Form>
    </div>
  )
}

export const loader = async ({params, request}) => {
  const req = new URL(request.url)
    const q = req.searchParams.get('q')

    try{
    const block = await fetch(`http://localhost:3000/user/${params.contactId}`)
    const data = await block.json()
    return { data , q}
    }catch(error){
        console.log(error);
    }
    
}


export default Contact
