import CreateNote from "./components/CreateNote"
import Search from "./components/NavSearch";
import { Route, Routes } from "react-router-dom"
import Note from "./components/Note"
import NotesList from "./components/Notelist"
import {RecoilRoot} from 'recoil';

function App1() {


  return (
    <>
   
    <div className={`flex flex-col min-h-screen `}>
        
    <RecoilRoot>
        <Routes>
          <Route path="/" element={<div> <Search/> <CreateNote/> <NotesList/></div>}/>
          <Route path="/Note" element={<Note/>}/>
          
        </Routes>
        </RecoilRoot>
    </div>
    </>
  );
}


function App() {
  
  return (
    
 
      
      <App1 />
    
     
 
  );
}

export default App;