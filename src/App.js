import './App.css';
import { useContext } from 'react';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Header from './components/header/header';
import Footer from './components/footer/footer';
import RoomList from './components/room/roomList';
import RoomDetail from './components/room/roomDetail';
import Attendance from './components/attendance/attendance';
import Login from './components/login/login';
import Nopage from './components/home/Nopage';
import TeacherDetail from './components/teacher/teacherDetail';
import { AuthContext } from './context/AuthContext';

function App() {
  const authContext = useContext(AuthContext);
  return (
    <>
    <AuthContext.Provider value={authContext}>
      <Header/>
      <BrowserRouter> 
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/teacherDetail" element={<TeacherDetail />} />
            <Route path="/room" element={<RoomList />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/roomDetail" element={<RoomDetail />} />
            <Route path="*" element={<Nopage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </AuthContext.Provider>
    </>
  )
}

export default App;
