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

export const action = async ({ request, params }) => {
    const data = Object.fromEntries(await request.formData());
    try {
        const response = await fetch(`http://localhost:3000/user/${params.contactId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        if (response.ok) {
            // Data updated successfully, redirect to the contact page
            return redirect(`/contacts/${params.contactId}`);
        } else {
            // Handle error if PUT request failed
            throw new Error('Failed to update data');
        }
    } catch (error) {
        console.error('Error updating data:', error);
        // You can throw an error to display an error page or handle it differently
        throw error;
    }
};


export default EditPage;
