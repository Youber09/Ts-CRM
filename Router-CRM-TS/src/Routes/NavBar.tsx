import {  NavLink ,Form,   useFetcher} from "react-router-dom";
import { chunk } from "../data/interfaces";

const NavBar = ({data,q}: chunk) => {
  
  
  
  
  return (
    <nav className="bg-white p-[15px] rounded-l-lg shadow-lg w-full relative left-[50%] translate-x-[-50%]">
      <ul className="flex flex-col justify-between items-center">
        <div className="flex" role="search">
        <Form method="get">
          <input className=" border-[2px] border-black border-solid p-[3px] rounded-md mb-2" type="text" name="q" defaultValue={q}/>
        </Form>
          <Form method="post" className="flex justify-end">
          <button type="submit" className="text-white bg-cyan-400 p-1 rounded-md mb-2">
            +Create
          </button>
        </Form>
        </div>
        
        
        {data?.map(dat => {


          return <><NavLink className=' w-full  relative mb-2 bg-gray-100 rounded-lg group hover:bg-cyan-300 transition-all duration-300 ease-in-out' key={dat.id} to={`/contacts/${dat.id}`}>
              {dat.img ?
                  <img className="w-[80px] h-[80px] rounded-full relative top-[60%] right-[-10%] mt-3" src={dat.img} alt="" /> 
                  : 
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80px" // Set width same as image width
                    height="80px" // Set height same as image height
                    className="w-[80px] h-[80px] rounded-full relative top-[60%] right-[-10%] mt-3 bg-white"
                    fill="#DDD"
                    viewBox="0 0 340 340" // Ensure the viewBox matches the original SVG dimensions
                  >
                    <path d="M169 .5a169 169 0 102 0zm0 86a76 76 0 11-2 0zM57 287q27-35 67-35h92q40 0 67 35a164 164 0 01-226 0"></path>
                  </svg>
                }
              
              <p className="absolute left-[50%] top-[25%] inline-block group-hover:text-white font-bold">{dat.name || "No Name"} {dat.favorite ? "⭐" : ""}</p><br />
              <p className="absolute left-[50%] top-[45%] inline-block text-gray-500 font-normal opacity-85">{dat.name && '@' + dat.name}</p>
            </NavLink></>
        })}
      </ul>
    </nav>
  )
}

export default NavBar
