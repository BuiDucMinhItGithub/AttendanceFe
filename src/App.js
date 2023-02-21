import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import RoomList from './components/room/roomList';
import Attendance from './components/attendance/attendance';
import Nopage from './components/home/Nopage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeacherDetail from './components/teacher/teacherDetail';

function App() {
  return (
    <>
    <Header/>
     <BrowserRouter> 
      <Routes>
          <Route path="/">
            <Route index element={<RoomList />} />
            <Route path="/teacherDetail" element={<TeacherDetail />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App;
