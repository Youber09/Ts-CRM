import { UserData,chunk, parameter, smallerchunk } from "./interfaces"

export async function RootLoader({request}: any): Promise<chunk> {
    const url = new URL(request.url)
    const q = url.searchParams.get('q') as string
    //data
    const info = await fetch(`http://localhost:3000/user`)
    let data: UserData[] = await info.json() 
    
    if(q === "" || q === null){
        return {data,q}
    }
    //filtering
    data = data.filter((dat) => dat.name.includes(q))
    
    
    return  {data,q}
}

export async function ContactLoader({params}: parameter | any): Promise<smallerchunk> {
    const info = await fetch(`http://localhost:3000/user/${params.Id}`)
    const data: UserData = await info.json()

    return {data}
}

