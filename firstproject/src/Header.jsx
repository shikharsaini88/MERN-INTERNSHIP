 export  function Header(){
    // return(<>
    // <header className="flex justify-between border-b-3 p-3 font-bold bg-black"><h1 className="text-3xl text-red-400">Digital Computing</h1>
    // <ul className="text-2xl text-blue-400">Menu</ul>
   
    // </header>
        return(<>
        <header className="flex justify-between bg-orange-200 border-b-4">
        <h1 id="heading" className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-black to-pink-400"> Portfolio</h1>
        <ul className="flex text-black font-bold text-1.9xl " id="list">
            
            <li className="me-3"><a href="#Home" >Home</a></li>
            <li className="me-3"><a href="#About">About Us</a></li>
            <li className="me-3"><a href="#Task">Task</a></li>
            <li className="me-3"><a href="#Project">Project</a></li>
             <li className="me-3"><a href="#contact">Contact</a></li>
        </ul>
    </header>
        
        
        </>)
    
    
}