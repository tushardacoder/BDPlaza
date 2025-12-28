import { Outlet } from "react-router"


import Header from "~/Components/header";
import Nav from "~/Components/nav";


export default function MainLayout() {

    return (

        <>



            <Header />
            <Nav/>
            
            
            <Outlet />














        </>










    );


}