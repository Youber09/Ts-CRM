import React from 'react'
import { useLoaderData , Form, redirect} from 'react-router-dom'

const Contact = () => {
    const {data} = useLoaderData()

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

export const action = async ({params}) => {
  fetch(`http://localhost:3000/user/${params.contactId}`,{
    method:'DEL'
  })
  return redirect('/')
}

export default Contact
