import './App.css';
import {  Route, Routes } from 'react-router-dom';
import LoginUser from './Components/LoginUser/LoginUser';
import Room from './Components/Rooms/Room';
import ChatRoom from './Components/Rooms/ChatRoom/ChatRoom';
import CreateUser from './Components/CreateUser/CreateUser';
import { useState } from 'react';



function App() {
const  [user, setUser] = useState();
  const getUser=(user)=>{
    setUser(user);
  }

  return (
    <Routes>
      <Route path='/' element={<LoginUser/>}/>
      <Route path='/signup' element={<CreateUser/>}/>
      <Route path='/rooms' element={<Room getUser={getUser} />}/>
      <Route path='/rooms/:id' element={<ChatRoom user={user} />}/>
    </Routes>
  );
}

export default App;
