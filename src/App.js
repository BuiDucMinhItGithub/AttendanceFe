import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Register from './components/register/register';
import Login from './components/login/login';
import RoomList from './components/room/roomList';
import RoomDetail from './components/room/roomDetail';

function App() {
  return (
    <>
      <Header />
      {/* <Login /> */}
      <RoomDetail />
      <Footer />
    </>
  )
}

export default App;
