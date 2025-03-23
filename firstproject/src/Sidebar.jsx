import { Link, Route, Router, useInRouterContext } from "react-router";
 

   export function Sidebar(){
    return(<>
    <section id="Project" className="bg-gray-700 border-t-5 border-amber-100  ">
    <h1 className="text-4xl text-center font-bold  pt-2 bg-gradient-to-r from-blue-400 to bg-pink-500  bg-clip-text text-transparent my-10">Project</h1>
    <div className="flex ">
        <div className="w-full m-4 shadow-amber-100 rounded-2xl p-12 hover:bg-red-300 bg-blue-300"> <Link to="contect" className="font-semibold"> contact webpage project</Link></div>
        <div className="w-full m-4 shadow-2xl shadow-gray-700 rounded-2xl p-12 bg-violet-50 hover:bg-pink-400"><Link to="Dashboard" className="font-semibold">Dashboard project </Link></div>
        <div className="w-full m-4 shadow-2xl shadow-gray-700 rounded-2xl p-12 bg-red-500 hover:bg-violet-400"><Link to="Loginuser" className="font-semibold">Login with JsonData</Link></div>
    </div>
    <div class="flex">
        <div className="w-full m-4 shadow-2xl shadow-gray-700 rounded-2xl p-12 hover:bg-red-300 bg-blue-300 border-solid-3 "><a href="https://shikharsaini1212.netlify.app/" className="font-semibold">TO DO APP PROJECT</a></div>
        <div className="w-full m-4 shadow-2xl shadow-gray-700 rounded-2xl p-12  hover:bg-red-300 bg-blue-300">Project 5</div>
        <div className="w-full m-4 shadow-2xl shadow-gray-700 rounded-2xl p-12  hover:bg-red-300 bg-blue-300"> Project 6</div>
    </div>

    </section> 
    
    </>)
}