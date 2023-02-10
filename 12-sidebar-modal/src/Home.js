import { FaBars } from "react-icons/fa";
import { useAppContext } from "./context";

const Home = () => {
  const {openSidebar, openModal} = useAppContext();

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        show modal
      </button>
    </main>
  );
};

export default Home;
