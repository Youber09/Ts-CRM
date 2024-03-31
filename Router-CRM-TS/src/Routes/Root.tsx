import { Outlet, useLoaderData, useNavigation } from "react-router-dom"
import NavBar from "./NavBar"
import { UserData } from "../data/interfaces"


const Root = () => {
  
  const navigation = useNavigation()
  const {data,q}  = useLoaderData() as {data: UserData[],q:string}

  

  return (
    <>
        <section className="w-2/5 overflow-scroll overflow-x-hidden m-4 rounded-l-lg">
            <NavBar data={data} q={q} />
        </section>
        <section  className={
          navigation.state === 'loading' ? "w-full bg-white m-4 rounded-lg ml-0 opacity-65" : "w-full bg-white m-4 rounded-lg ml-0"
        } >
          <Outlet />
        </section>
    </>
  )
}

export default Root
