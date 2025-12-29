import { Outlet } from "react-router"
import Footer from "~/Components/footer";


import Header from "~/Components/header";
import Nav from "~/Components/nav";


export default function MainLayout() {

    return (

        <>



            <Header />
            <Nav/>

            
            
            <Outlet />

            <Footer/>














        </>










    );


}