import { Form, useLoaderData, useNavigate } from "react-router-dom"
import {  smallerchunk } from "../../data/interfaces"

const EditPage = () => {
  
  const {data} = useLoaderData() as smallerchunk
  const navigate = useNavigate()

  

  return (
    <div>
      <Form method="post" className="flex flex-col justify-evenly h-80 relative top-20 w-2/3 items-center left-[50%] translate-x-[-50%] scale-150">
        <input placeholder="name" type="text" name="name" className=" border-[2px] border-black border-solid shadow-lg rounded-sm p-1 " defaultValue={data.name}/>
        <input placeholder="age" type="number" name="age" className=" border-[2px] border-black border-solid shadow-lg rounded-sm p-1 " defaultValue={data.age}/>
        <input placeholder="email" type="email" name="email" className=" border-[2px] border-black border-solid shadow-lg rounded-sm p-1 " defaultValue={data.email}/>
        <input placeholder="job" type="text" name="job" className=" border-[2px] border-black border-solid shadow-lg rounded-sm p-1 " defaultValue={data.job}/>
        <input placeholder="image" type="text" name="img" className=" border-[2px] border-black border-solid shadow-lg rounded-sm p-1 " defaultValue={data.img}/>
        <div className="flex justify-between w-[20%]">
          <button type="submit" className="p-1 rounded-md border-b-cyan-300 border-[2px] border-solid text-neutral-800 hover:bg-neutral-800  hover:text-white">Save</button>
          <button type="button" className="p-1 rounded-md border-b-cyan-300 border-[2px] border-solid text-neutral-800 hover:bg-neutral-800  hover:text-white" onClick={() => {
            navigate(`/contacts/${data.id}`)
          }}>Cancel</button>
        </div>
        
      </Form>
    </div>
  )
}

export default EditPage
