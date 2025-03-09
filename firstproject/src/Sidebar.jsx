import { Link, Route, Router, useInRouterContext } from "react-router";
 import Contactsearch from "./assets/Components/Contactsearch";

   export function Sidebar(){
    return(<>
    <section id="Project" className="bg-gray-700 border-t-5 border-amber-100  ">
    <h1 className="text-4xl text-center font-bold  pt-2 bg-gradient-to-r from-blue-400 to bg-pink-500  bg-clip-text text-transparent my-10">Project</h1>
    <div className="flex ">
        <div className="w-full m-4 shadow-amber-100 rounded-2xl p-12 hover:bg-red-300 bg-blue-300">  <a href="" className="text-black font-bold text-2xl" target="_parent"><Link to="/project1" target="_parent"> contact webpage project</Link></a></div>
        <div className="w-full m-4 shadow-2xl shadow-gray-700 rounded-2xl p-12 bg-violet-50 hover:bg-pink-400"><a href="" className=" text-2xl text-black font-bold" target="_parent"><Link to="/DashBoard" target="_top">Dashboard project </Link></a></div>
        <div className="w-full m-4 shadow-2xl shadow-gray-700 rounded-2xl p-12 bg-red-500 hover:bg-violet-400"><a href="" className="text-2xl text-red-300 font-black" target="_parent"><Link to="/Loginuser" target="_parent">Login with JsonData</Link></a></div>
    </div>
    <div class="flex">
        <div className="w-full m-4 shadow-2xl shadow-gray-700 rounded-2xl p-12 hover:bg-red-300 bg-blue-300 border-solid-3 "> Project 4</div>
        <div className="w-full m-4 shadow-2xl shadow-gray-700 rounded-2xl p-12  hover:bg-red-300 bg-blue-300">Project 5</div>
        <div className="w-full m-4 shadow-2xl shadow-gray-700 rounded-2xl p-12  hover:bg-red-300 bg-blue-300"> Project 6</div>
    </div>

    </section> 
    
    </>)
}