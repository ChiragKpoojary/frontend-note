import { Button } from "@material-tailwind/react"
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


function CreateNote() {
  const navigate = useNavigate();
 

  return (
    <div className={`flex justify-center items-center mt-12 md:mt-16 space-x-5 m-5 sm:space-x-10 `}>
      <Button
        ripple={true}
        variant="gradient"
        className={`flex gap-2 w-36 h-24 sm:w-56 sm:h-32 `}
        onClick={() => {
          console.log("Button clicked");
          navigate('/Note');
        }}
      >
        <MdOutlineCreateNewFolder className="mt-0.5" size={100}/>
        Create Note
      </Button>
    </div>
  )
}

export default CreateNote;
