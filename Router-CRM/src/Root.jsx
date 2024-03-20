import React, { useEffect, useState } from 'react'
import { Outlet, Link, useNavigation, NavLink, useLoaderData } from 'react-router-dom'

const Root = () => {
    const [up,setUp] = useState(null)
    const data = useLoaderData()
    const navigation = useNavigation()

    useEffect(() => {
        
        setUp(data)
    }, [data])

  return (
    <>
    <section style={{height:'100vh',borderRight:'1px solid black',width:'200px', backgroundColor:'#dee4fc'}}>
        <nav style={{textAlign:'center'}}>
            <ul>
                {data && data.map(profile => {
                    return <><ol key={profile.id} style={{ width:"50px"}}>
                        <NavLink to={`/contacts/${profile.id}`} style={{color:'black',textDecoration:'none',borderRadius:'5px',padding:'3px',}}>
                            {profile.name}
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

export const loader = async () => {
    const block = await fetch('http://localhost:3000/user/')
    const json = await block.json()
    return json
}

export default Root
