import { redirect } from "react-router-dom";
import { UserData, parameter } from "./interfaces";

export async function EditAction({params,request}: parameter | any ): Promise<Response> {
    const form = await request.formData()
    const data = await Object.fromEntries(form)
    await fetch(`http://localhost:3000/user/${params.Id}`,{
        method:'PUT',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    
    return redirect(`/contacts/${params.Id}`) 
}

export async function DestroyAction({params}: parameter | any): Promise<Response>{
    await fetch(`http://localhost:3000/user/${params.Id}`,{
        method: 'DELETE'
    })
    return redirect('/')
}

export async function NavAction(): Promise<Response>{
    const ID = Date.now()
    await fetch(`http://localhost:3000/user`,{
        method:"POST",
        headers:{
            "Content-Type":"Application/json"
        },
        body: JSON.stringify({
            age: "",
            email: "",
            id: ID + "",
            img: "",
            job: "",
            name: "" ,
        })
    })
    return redirect(`/contacts/${ID}/edit`)
}

export async function ContactAction({params,request}: parameter | any): Promise<Response>{
    const RawData = await fetch(`http://localhost:3000/user/${params.Id}`)
    const data: UserData = await RawData.json()
    const newData = {...data ,favorite:!data.favorite}

    
    
    
    return await fetch(`http://localhost:3000/user/${params?.Id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"Application/json"
        },
        body: JSON.stringify(newData)
    })
}

