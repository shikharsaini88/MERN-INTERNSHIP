 export function Contactus(){
  return(<>
  <section id="contact" className="bg-black text-amber-100">
  <h1 className="text-4xl text-center font-bold bg-gradient-to-r from-blue-200 to-black bg-clip-text text-transparent mb-2 my-10">Contact Us</h1>
 <div className="flex justify-center items-center">
    
    <div className=" h-96 w-95 shadow-xl shadow-gray-700 rounded-2xl  p-15 bg-none text-white hover:shadow-blue-400 " >
        <h1 className="text-2xl font-semibold text-center mb-2 text-violet-400">Get in touch</h1>
        <input type="text" placeholder="Enter your Name" className="flex font-bold bg-white text-black mb-1 mt-2 rounded-2xl hover:bg-amber-50"/>
        <input type="email" placeholder="Enter your email" className="flex font-bold bg-white text-black rounded-2xl hover:bg-amber-50"/>
        <textarea className="h-40 w-50 font-semibold mt-3 shadow-2xl rounded-2xl bg-white flex" name="" id=""></textarea>
        <button className="bg-black text-white rounded-2xl font-semibold mt-1 border-2 hover:bg-red-500 p-2">Submit</button>
    </div>
</div>

  </section>
  
  
  </>)
} 