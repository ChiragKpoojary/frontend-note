import { useRecoilState } from 'recoil';
import { noteState } from './Notelist';
import Fuse from 'fuse.js';
import { ChangeEvent, useState, useEffect } from 'react';
import axios from "Axios"

export interface Noteinter {
    _id: string;
    title: string;
    tags: string[];
    description: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

const NavSearch = () => {
    const [searchlist, setsearchlist] = useRecoilState<Noteinter[]>(noteState);
    const [searchQuery, setSearchQuery] = useState('');
    const [data,setdata]=useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/showdata").then(
   (res)=>{
     console.log("result is useeffect i search",res.data);
   
    setdata(res.data);
    
   
   }
   
   ).catch((e)=>{
   console.log("error while fetching",e);
   })
   }, [searchQuery])
  

  const fuse = new Fuse(searchlist, {
    keys: ['title'],
    threshold: 0.3, 
    distance: 100,
    minMatchCharLength: 1,
    includeScore: true,
  });

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
if(value.trim()===""){
    setsearchlist(data);
}else{
    const results = fuse.search(value);
    const filteredData = results.map(result => result.item);
    setsearchlist(filteredData);
}
  }
    return (
        <div className="flex justify-center items-center mt-5">
            <div className="sm:w-full max-w-md w-[75%]">
                <input
                    type="search"
                    className="px-4 py-2 border rounded-lg shadow-md focus:outline-none focus:ring focus:ring-gray-400 w-full bg-gray-300 placeholder-gray-700"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>
            {/* { searchResults.map((note, index) => (
               
                  
            //    <div key={index} className="flex justify-center items-center">
            //       <NoteCard note={note} />
            //    </div>
        

        ))} */}
           
        </div>
    );
};

export default NavSearch;

