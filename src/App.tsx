import  { useState, useEffect } from 'react';
import CreateNote from "./components/CreateNote";
import Search from "./components/NavSearch";
import { Route, Routes } from "react-router-dom";
import Note from "./components/Note";
import NotesList from "./components/Notelist";
import { RecoilRoot } from 'recoil';
import ReactLoading from 'react-loading';


function App1() {
  const [isServerReady, setIsServerReady] = useState(false);

  function checkServerStatus() {
    fetch('http://localhost:8000/health')
      .then(response => response.json())
      .then(data => {
        if (data.status === 'ok') {
          setIsServerReady(true);
        }
      })
      .catch(error => {
        console.error('Error checking server status:', error);
      });
  }

  useEffect(() => {
    // Poll every 5 seconds
    const intervalId = setInterval(checkServerStatus, 5000);
    
    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  if (!isServerReady) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <ReactLoading type={'spin'} color={'#000000'} height={100} width={100} />
      </div>
    );
  }

  return (
    <div className={`flex flex-col min-h-screen`}>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<div><Search /> <CreateNote /> <NotesList /></div>} />
          <Route path="/Note" element={<Note />} />
        </Routes>
      </RecoilRoot>
    </div>
  );
}

function App() {
  return <App1 />;
}

export default App;
