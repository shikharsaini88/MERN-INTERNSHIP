 import img from '../assets/images/me.jpg'
 
 export function Aboutme(){
return(<>


<section id="About" className=" flex h-150 bg-[url(dark.jpg)] bg-no-repeat bg-cover border-t-4">
    <div className=" flex justify-center items-center ml-50 ">
 <div className="shadow-2xl shadow-gray-600  justify-center ">

  <img className="w-50 h-80 shadow-2xl hover:w-fit-transition-all duration-400" src={img} alt="person"/>  
 </div>
 <div className="   justify-center  w-190 h-80  shadow-2xl transition-all shadow-black p-4  hover:bg-black text-white">
 <h2 className=" font-bold text-3xl mt-6 underline mb-5 "><i>About</i></h2>
 <p><i className="font-bold  items-center ">Hii My name is Shikhar saini,<br/> Currently i am pursueing my Bachelor degree from shri Dadaji institue of Tehnolnogy<br/> And Science khandwa and right now i am in my 3rd year. My Short term Goal is to get place in a company and then try to achieve a higher position for long term goal.</i></p>
 
 </div>
</div>
 </section>



</>)
}