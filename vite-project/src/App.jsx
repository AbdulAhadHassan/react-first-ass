import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Img from './comp/ImgCom'
import Gallery from './gallery'

function App() {
  


  return (
  
    <div>
      <h1 className="text-center py-5">
                Gallary
      </h1>
      <Gallery/> 

       {/* <div  class="flex flex-col flex-wrap gap-3 w-60" >
        <div onClick={()=>getImg(url.imgscr)}>
          <Img url={"https://i.pinimg.com/564x/be/f0/cf/bef0cfe3fd41018f40b01b37d7aa146d.jpg"} /> 
        </div>
        <div>
        <Img url={"https://i.pinimg.com/564x/03/2e/4f/032e4f929e89b0482cd8be1b7d469e26.jpg"} /> 
        </div>
        <div>
        <Img url={"https://i.pinimg.com/564x/ac/b1/0e/acb10e9810a1bc86be4553f2ca25eab5.jpg"} /> 
        </div>
      </div>
      <div>
        <Img url={"https://i.pinimg.com/236x/52/82/8c/52828cf7eff6f054bfef804abcfe2ac4.jpg"} />
      </div>   */}
    </div>
  )
}

export default App
