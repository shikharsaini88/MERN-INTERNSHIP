import { Footer } from "./Footer"
import { Header } from "./Header"
import { Maincontent } from "./Maincontent"
import { Sidebar } from "./Sidebar"


function App() {
  return( <>
    <Header/>
   
   <div className="flex justify-between"> <Sidebar/>
   <Maincontent/></div>
   <Footer/>
  </>
  )
  
  
}
export default App
