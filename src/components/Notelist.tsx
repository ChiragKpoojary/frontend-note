
import { Typography, Card, Chip,Button } from "@material-tailwind/react";
import { FaRegLightbulb } from "react-icons/fa6";
import {  useState,useEffect} from 'react';
import {  atom, useRecoilState } from 'recoil';
import {Noteinter} from './NavSearch'; 
import axios from "axios";
import { AxiosResponse } from 'axios';

const noteState = atom<Noteinter[]>({
  key: 'noteState',
  default: [],
});
export const NoteCard =(({ note }: { note: any }) => {

  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 100;
  const truncateText = (text: string, length: number) => {
    if (text.length <= length) return text;
    return text.substr(0, length) + '...';
  };

  return (
    <Card 
      
      className={`shadow-2xl p-5 w-full max-w-sm overflow-hidden h-fit relative bg-gray-300 rounded-md  border-gray-200 m-5 `}
    >
      <div className='flex flex-col'>
        <Typography variant="h5" className="pb-3 font-bold break-all">{note.title}</Typography>
        <div className='flex flex-wrap mb-3'>
          {note.tags.map((tag: string, index: number) => (
            <Chip
              key={index}
              className="bg-gray-800 text-white text-xs mb-1 mr-1 break-all"
              value={tag}
            />
          ))}
        </div>
        <div className="overflow-x-auto">
          <Typography color="blue-gray" className="mb-2 break-all whitespace-pre-wrap">
            {isExpanded ? note.description : truncateText(note.description, maxLength)}
          </Typography>
        </div>
        {note.description.length > maxLength && (
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-500 hover:text-blue-700 text-sm mt-2 self-start"
            color="white"
          >
            {isExpanded ? 'Show Less' : 'Read More'}
          </Button>
        )}
      </div>
    </Card>
  );
});
function NotesList() {



  const [boxes, setBoxes] = useRecoilState(noteState);

  useEffect(() => {
     axios.get("https://backend-note-2px9.onrender.com/api/showdata").then(
(res:AxiosResponse)=>{
  console.log("result is useeffect",res.data);

 setBoxes(res.data);


}

).catch((e)=>{
console.log("error while fetching",e);
})
}, [])
 
 
console.log("data in boxes",boxes)



  return (
<div>
            {boxes.length === 0 ? (
              <div className="flex flex-col   !justify-center !items-center">
                <FaRegLightbulb size={300} className="text-gray-300 " />
                <Typography variant="h2" className="text-gray-400 mt-4">
                  Notes you add appear here
                </Typography>
              </div>
            ) : (
              <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16 '>
             { boxes.map((note, index) => (
               
                  
                   <div key={index} className="flex justify-center items-center">
                      <NoteCard note={note} />
                   </div>
            
    
            ))}
          </div>
            )
      
          }
           </div> 
  );
}
export default NotesList;
export {noteState};