import React, { useEffect, useState } from 'react'
import { Outlet, Link, useNavigation, NavLink } from 'react-router-dom'

const Root = () => {
    const [data,setData] = useState()
    const navigation = useNavigation()

    useEffect(() => {
        async function fetching(){
            const block = await fetch('http://localhost:3000/user/')
            const json = await block.json()
            setData(json)
        }
        fetching()
    },[])

  return (
    <>
    <section style={{height:'100vh',borderRight:'1px solid black',width:'200px', backgroundColor:'#dee4fc'}}>
        <nav style={{textAlign:'center'}}>
            <ul>
                {data && data.map(profile => {
                    return <><ol key={profile.id} style={{ width:"50px"}}>
                        <NavLink to={`/contacts/${profile.id}`} style={{color:'white',textDecoration:'none',borderRadius:'5px',padding:'3px',}}>
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

export default Root
