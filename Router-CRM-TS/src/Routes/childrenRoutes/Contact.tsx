import { useLoaderData , Link,Form, useFetcher} from "react-router-dom"
import { smallerchunk } from "../../data/interfaces"

const Contact = () => {
    const {data} = useLoaderData() as smallerchunk
    const Fetcher = useFetcher()

    

    let favorite = data.favorite;
    if (Fetcher.formData) {
      if(data.favorite === false){
        favorite = true
      }
      if(data.favorite === true){
        favorite = false
      }
    }

    console.log(favorite, data.favorite);
    
    

  return (
    <div className="h-full ">
        <Link className=" w-[80px] inline-block h-[80px] relative left-[50%] top-[10%] translate-x-[-50%] group hover:bg-black-100" to={`/contacts/${data.id}/edit`}>
          {data?.img ?
            <img className=" rounded-full w-[80px] h-[80px]  border-solid border-[5px] border-black group-hover:opacity-50 transition-all duration-300" src={data.img} alt="tchitchubukai" /> : 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80px" // Set width same as image width
              height="80px" // Set height same as image height
              className="rounded-full border-solid border-[5px] border-black group-hover:opacity-50 transition-all duration-300"
              fill="#DDD"
              viewBox="0 0 340 340" // Ensure the viewBox matches the original SVG dimensions
            >
              <path d="M169 .5a169 169 0 102 0zm0 86a76 76 0 11-2 0zM57 287q27-35 67-35h92q40 0 67 35a164 164 0 01-226 0"></path>
            </svg>

           }
          
        <svg
            className="absolute w-[50px] h-[50px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-all duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="800"
            height="800"
            fill="#000"
            version="1.1"
            viewBox="0 0 528.899 528.899"
            xmlSpace="preserve"
            >
            <path d="M328.883 89.125l107.59 107.589-272.34 272.34L56.604 361.465l272.279-272.34zm189.23-25.948l-47.981-47.981c-18.543-18.543-48.653-18.543-67.259 0l-45.961 45.961 107.59 107.59 53.611-53.611c14.382-14.383 14.382-37.577 0-51.959zM.3 512.69c-1.958 8.812 5.998 16.708 14.811 14.565l119.891-29.069L27.473 390.597.3 512.69z"></path>
        </svg>
        </Link>
        <span className="relative top-[13%]">
            <p className="font-bold text-center">{data.name || "No Name"}</p>
            <p className="text-gray-500 font-normal opacity-85 text-center">{data.name && '@' + data.name}</p>
        </span>
        <ul className="flex relative top-[15%] justify-evenly">
          <Form action="destroy" method="post" onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }} className=""
          >
            <button type="submit" className=" font-bold text-black border-solid border-black border-[2px] w-[5rem] h-[2.5rem] group hover:text-white hover:bg-black"> 
              <svg
                className="inline translate-y-[-17%] rounded-none group-hover:bg-white "
                xmlns="http://www.w3.org/2000/svg"
                width="15px"
                height="15px"
                fill="#000"
                version="1.1"
                viewBox="0 0 408.483 408.483"
                xmlSpace="preserve"
              >
                <path d="M87.748 388.784c.461 11.01 9.521 19.699 20.539 19.699h191.911c11.018 0 20.078-8.689 20.539-19.699l13.705-289.316H74.043l13.705 289.316zm159.907-217.455a8.35 8.35 0 018.35-8.349h13.355a8.351 8.351 0 018.35 8.349v165.293a8.35 8.35 0 01-8.35 8.349h-13.355a8.35 8.35 0 01-8.35-8.349V171.329zm-58.439 0a8.35 8.35 0 018.349-8.349h13.355a8.35 8.35 0 018.349 8.349v165.293a8.348 8.348 0 01-8.349 8.349h-13.355a8.348 8.348 0 01-8.349-8.349V171.329zm-58.441 0a8.35 8.35 0 018.349-8.349h13.356a8.35 8.35 0 018.349 8.349v165.293a8.349 8.349 0 01-8.349 8.349h-13.356a8.348 8.348 0 01-8.349-8.349V171.329zM343.567 21.043h-88.535V4.305A4.305 4.305 0 00250.727 0h-92.971a4.305 4.305 0 00-4.304 4.305v16.737H64.916c-7.125 0-12.9 5.776-12.9 12.901V74.47h304.451V33.944c0-7.125-5.775-12.901-12.9-12.901z"></path>
              </svg>Delete
            </button>
          </Form>
          <Fetcher.Form method="post" name="favorite" className="translate-y-[-12%] ">
            <button type="submit" className=" text-black border-solid border-black border-[2px] w-[3rem] h-[3rem] group hover:text-white hover:bg-black rounded-full"><span className="font-bold text-2xl translate-y-[-5%] inline-block ">{favorite ? "⭐" : "☆"}</span>{Fetcher.formData ? "Be patient" : ""}</button>
          </Fetcher.Form>
          <button className="font-bold text-black border-solid border-black border-[2px] w-[5rem] h-[2.5rem] group hover:text-white hover:bg-black">More <span className="font-extrabold">⋮</span></button>
        </ul>
        <h2 className="font-bold relative top-[20%] left-[5%] ">Information</h2>
        <ul className=" relative top-[30%] w-5/6 left-[50%] translate-x-[-50%] font-bold scale-[1.15]">
          <ol className="flex justify-between">
            <p className="inline-block">Email</p>
            <p className="inline-block">{data.email}</p>
            
          </ol>
          <hr className="h-[2px] bg-black rounded-2xl " />
          <ol className="flex justify-between">
            <p className="inline-block">Age</p>
            <p className="inline-block">{data.age}</p>
            
          </ol>
          <hr className="h-[2px] bg-black rounded-2xl " />
          <ol className="flex justify-between">
            <p className="inline-block">Job</p>
            <p className="inline-block">{data.job}</p>
          </ol>
        </ul>
      
      
    </div>
  )
}

export default Contact
