import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Info from "~/Components/info";
import Banner from "~/Components/banner";
import Header from "~/Components/header";
import Popularcategories from "~/Components/popularcategories";
import RecentProducts from "~/Components/recentproduct";
import Firefightingproduct from "~/Components/FireFightingproduct";
import Ventilationproduct from "~/Components/ventilationproduct";
import Firefightingsystem from "~/Components/firefightingsystem";
import FireExtinguisher from "~/Components/fireExtinguisher";
import Fireprotection from "~/Components/Fireprotection";
import Firedetection from "~/Components/firedetection";

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
      <Popularcategories/>
      <RecentProducts/>
      <Firefightingproduct/>
      <Ventilationproduct/>
      <Firefightingsystem/>
      <FireExtinguisher/>
      <Fireprotection/>
      <Firedetection/>

     <Info/>
    
    
     
     
     </>


  )
}
