import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSidebar = () => {
        console.log('Sidebar Open');
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        console.log('Sidebar Close');
        setIsSidebarOpen(false);
    }
    const openModal = () => {
        console.log('Modal Open');
        setIsModalOpen(true);
    }

    const closeModal = () => {
        console.log('Modal Close');
        setIsModalOpen(false);
    }


    return (
        <GlobalContext.Provider value={{isSidebarOpen, isModalOpen, openSidebar, closeSidebar, openModal, closeModal}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default AppContext;