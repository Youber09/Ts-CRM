import { redirect } from "react-router-dom"

export const action = async ({params}) => {
    try{
     fetch(`http://localhost:3000/user/${params.contactId}`,{
      method:'DELETE'
    })   
    }catch(err){
        throw new Error(err)
    }
    
    return redirect('/')
  }