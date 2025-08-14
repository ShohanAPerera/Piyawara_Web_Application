import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const MainLayout = () => {
    return (
        <div className='px-8 md:px-8 lg:px-16 xl:px-32 2xl:px-32'>
            <Navbar />
            <Outlet />
        </div>

    );
};

export default MainLayout