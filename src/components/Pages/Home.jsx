import Navbar from '../Common/Navbar';
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <main id="home">
        <img src="../../spellbee.svg" />
      </main>
    </>
  )
}

export default Home;