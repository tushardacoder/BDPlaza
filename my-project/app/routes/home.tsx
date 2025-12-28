import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Info from "~/Components/info";
import Banner from "~/Components/banner";
import Header from "~/Components/header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
     <>
     <br />
      
      <br />
      <Banner/>
     <Info/>
    
    
     
     
     </>


  )
}
