import { Link, Route, Router, useInRouterContext } from "react-router";
 

   export function Sidebar(){
    return(<>
    <section id="Project" className="bg-gray-700 border-t-5 border-amber-100 h-150 ">
    <h1 className="text-4xl text-center font-bold  pt-2 bg-gradient-to-r from-blue-400 to bg-pink-500  bg-clip-text text-transparent my-10">Project</h1>
    <div className="flex border-t-2 border-amber-100 ">
        <div className="w-full m-4 shadow-amber-100 rounded-2xl p-12 hover:bg-red-300 bg-blue-300 underline"> <Link to="contect" className="font-semibold"> contact webpage project</Link></div>
        <div className="w-full m-4 shadow-2xl shadow-gray-700 rounded-2xl p-12 bg-violet-50 hover:bg-pink-400 underline"><Link to="Dashboard" className="font-semibold">Dashboard project </Link></div>
        <div className="w-full m-4 shadow-2xl shadow-gray-700 rounded-2xl p-12 bg-red-500 hover:bg-violet-400 underline"><Link to="Loginuser" className="font-semibold">Login with JsonData</Link></div>
    </div>
    <h1 className="  border-t-2 border-amber-100 text-3xl text-center font-semibold  pt-2 bg-gradient-to-r from-blue-400 to bg-pink-500  bg-clip-text text-transparent my-5">React and Express and Mongodb Database</h1>
    <div class="flex">
        
        <div className="w-full m-4 shadow-2xl shadow-gray-700 rounded-2xl p-12 hover:bg-red-300 bg-blue-300 border-solid-3 "><a href="https://shikharsaini1212.netlify.app/" className="font-bold text-2xl">TO DO APP PROJECT</a><br/><p className="font-light underline">made with the help of react,express and mongodb Database</p></div>
        <div className="w-full m-4 shadow-2xl shadow-gray-700 rounded-2xl p-12  hover:bg-red-300 bg-blue-300"><a href="https://shikharsaini222.netlify.app/" className="font-bold text-2xl">Expense Tracker app</a><br/><p className="font-light underline">made with the help of react,express and mongodb database.</p></div>
        <div className="w-full m-4 shadow-2xl shadow-gray-700 rounded-2xl p-12  hover:bg-red-300 bg-blue-300 text-2xl"> Project 6</div>
    </div>

    </section> 
    
    </>)
}