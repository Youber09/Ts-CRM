import React from 'react'
import { Form, json, redirect, useLoaderData, useNavigate } from 'react-router-dom'

const EditPage = () => {
    const Nav = useNavigate()
    const {data} = useLoaderData()

  return (
    <Form method='post'>
        <input type="text" name='name' defaultValue={data.name} /><br /><input type="number" name='age' defaultValue={data.age} /><br /><input type="text" name='job' defaultValue={data.job} /><br /><input type="email" name='email' defaultValue={data.email}/><br /><input type="url" name='img' defaultValue={data.img} />
        <br /><button type='submit'>Save</button>
        <button type='button' onClick={() => Nav(-1)}>Cancel</button>
    </Form>
  )
}

export const action = async ({request,params}) => {
    const Data = await request.formData()
    const updated = Object.fromEntries(Data)
    try{fetch(`http://localhost:3000/user/${params.contactId}`,{
        method:"PUT",
        headers:{
            "Content-Type":"Application/Json"
        },
        body: JSON.stringify(updated)
    })}catch(err){
        throw new Error(err)
    }
    
    return redirect(`/contacts/${params.contactId}`)
}

export default EditPage;
