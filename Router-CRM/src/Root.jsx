import React, { useEffect, useState } from 'react'
import { Outlet, Link, useNavigation, NavLink, useLoaderData,Form, redirect, useSubmit } from 'react-router-dom'

const Root = () => {
    const sub = useSubmit()
    const [up,setUp] = useState(null)
    const {data,q} = useLoaderData()
    const navigation = useNavigation()

    useEffect(() => {
        
        setUp(data)
    }, [data])

  return (
    <>
    <section style={{height:'100vh',borderRight:'1px solid black',width:'200px', backgroundColor:'#dee4fc'}}>
        <nav style={{textAlign:'center'}}>
            <Form method='post'>
                <button>Add</button>
            </Form>
            <Form>
                <input name='q' placeholder='Search' defaultValue={q} onChange={e => sub(e.currentTarget.form)} />
            </Form>
            
            <ul>
                {data && data.map(profile => {
                    return <><ol key={profile.id} style={{ width:"50px"}}>
                        <NavLink to={`/contacts/${profile.id}${q ? `?q=${q}`: ""}`} style={{color:'black',textDecoration:'none',borderRadius:'5px',padding:'3px',}}>
                            {profile.name ? profile.name : 'no name'}
                        </NavLink>
                    </ol><br /></>
                })}
                
            </ul>
        </nav>
    </section>
    <section style={{height:'100vh',width:'80%'}} className={
        navigation.state === 'loading' ? 'loading' : ""
    }>
        <Outlet />
    </section>
    </>
  )
}

export const loader = async ({request}) => {
    const req = new URL(request.url)
    const q = req.searchParams.get('q')
    if (q) {

        const block = await fetch('http://localhost:3000/user/')
        const info = await block.json()
    
    const data = info.filter(fil =>fil.name.includes(q))



    return {data,q}
        
    }

    const block = await fetch('http://localhost:3000/user/')
        const data = await block.json()

        console.log(q);

        return {data, q}
}

export const action = async () => {
    const ID = Date.now()

    await fetch('http://localhost:3000/user',{
        method:'POST',
        headers:{
            'Content-Type':'Application/Json',
        },
        body: JSON.stringify({
            name: "",
      age: "",
      job: "",
      email: "",
      img: "",
      id: ID + ''
        })
    })
    return redirect(`/contacts/${ID}/edit`)
}

export default Root
