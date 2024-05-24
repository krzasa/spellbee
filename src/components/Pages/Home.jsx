import Navbar from '../Common/Navbar';
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <img src="../../spellbee.svg" />
        <div id="practice-container">
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default Home;