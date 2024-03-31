import { useRouteError } from "react-router-dom"
import { ErrorData } from "../data/interfaces";

const ErrorPage = () => {
    const Error = useRouteError() as ErrorData

    console.log(Error);
    

  return (
    <div className="h-lvh w-full bg-white ">
        <h1 className="text-center text-5xl text-gray-400 relative top-[35%] ">Oopss ! an Error occured</h1>
        <p className="text-center text-1xl relative top-[40%] ">{Error?.statusText}</p>
    </div>
  )
}

export default ErrorPage
