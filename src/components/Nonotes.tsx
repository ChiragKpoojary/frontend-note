import { Typography } from "@material-tailwind/react";
import { FaRegLightbulb } from "react-icons/fa6";

function Nonotes() {
  return (
    <div className="flex flex-col justify-center items-center">
    <div  className="mt-12 gap-4">
        <FaRegLightbulb size={300} className="text-gray-300"/>
        <Typography variant="h2" className="text-gray-400 ml-4" >Notes you add appear here </Typography>
        </div>
        </div>
  )
}

export default Nonotes