   export var Company="Homepage"
  export function Maincontent(){

    return(<>
 
  <section id="cover-title" className="  h-130 bg-[url(creative.jpg)] bg-no-repeat bg-cover">
           <h2 className=" text-black justify-center items-center text-2xl font-mono pt-22 pl-3 animate-pulse">My journey into tech has been<br/> a blend of creativity,<br/> problem-solving,<br/> and community building.<br/> I`ve always been fascinated<br/> by how technology<br/> can transform ideas into <br/>tangible, user-friendly<br/> experiences.</h2>
        </section>
     
        <section id="Home" className="h-140 bg-[url(tree.jpg)] bg-no-repeat bg-cover border-t-4">
        <h1 className="text-4xl font-bold animate-pulse text-white">{Company}</h1> 
    <div className=" h-full flex justify-center items-center" id="homing">
       
        <h1 id="neon-text" className=" text-6xl text-center  bg-gradient-to-r from-white to-red-700 bg-clip-text text-transparent font-serif"> Hello,I am Shikhar Saini<br/> Frontend Developer<br/> <a href="mailto:shikharsaini539@gmail.com" className="text-4xl "><button className="rounded-3xl bg-black text-white  hover:bg-blue-400 ">Hire me</button></a></h1>
      
    </div> 
    </section>
 </>   )
    }
