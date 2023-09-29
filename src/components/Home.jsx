import { useGlobalContext } from "../utils/context";
import { FaBars } from '../../node_modules/react-icons/fa';


const Home = () => {
    const { openSidebar, openModal } = useGlobalContext();

    return (
        <main>
            <button type="button" onClick={openSidebar} className="sidebar-toggle"><FaBars /></button>
            <button type="button" onClick={openModal} className="btn">Show Modal</button>
        </main>
    )
}

export default Home