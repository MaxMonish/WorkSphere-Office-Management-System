import React, {useState} from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function MainLayout({children}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return(
        <div className = "layout">

            <Sidebar sidebarOpen = {sidebarOpen} closeSidebar = {closeSidebar}/>

            {sidebarOpen && (
                <div className = "sidebar-overlay" onClick = {closeSidebar} aria-hidden = "true"/>
            )}

            <div className = "main">

                <Navbar toggleSidebar = {toggleSidebar}/>
                
                <div className = "content">
                    {children}
                </div>

            </div>

        </div>
    );
}

export default MainLayout;