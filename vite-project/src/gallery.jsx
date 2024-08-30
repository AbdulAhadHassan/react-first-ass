import "./App.css"
import React,{useState} from "react"

// import CloseIcon from '@mui/icons-material/Close';
import img1 from "./pcis/img1.jpg"
import img2 from "./pcis/img2.jpg"
import img3 from "./pcis/img3.jpg"
import img4 from "./pcis/img4.jpg"
import img5 from "./pcis/img5.jpg"
import img6 from "./pcis/img6.jpg"
import img7 from "./pcis/img7.jpg"
import img8 from "./pcis/img8.jpg"
import img9 from "./pcis/img9.jpg"
import img10 from "./pcis/img10.jpg"
import img11 from "./pcis/img11.jpg"
import img12 from "./pcis/img12.jpg"
import img13 from "./pcis/img13.jpg"
let Gallary = ()=>{

    let data = [
        {id : 1,
         src : img1   
        },
        {id : 2,
         src : img2   
        },
        {id : 3,
         src : img3   
        },
        {id : 4,
         src : img4   
        },
        {id : 5,
         src : img5    
        },
        {id : 6,
         src : img6 
        },
        {id : 7,
         src : img7 
        },
        {id : 8,
         src : img8 
        },
        {id : 9,
         src : img9 
        },
        {id : 10,
         src : img10 
        },
        {id : 11,
         src : img11 
        },
        {id : 12,
         src : img12 
        },
        {id : 13,
         src : img13 
        },
    ]
const [model, setModel] = useState(false)
const [fulImg, setFulImg] = useState(' ')
const getPics = (src)=> {
    setFulImg(src)
    setModel(true)
}
console.log(setFulImg)


    return(
        <>
        <div>
            
            <div className={model? "model open" : "model"}>
                <img src={fulImg} alt="" />
                <i class="fa-solid fa-xmark p-4 "  onClick={()=>setModel(false)}></i>
                {/* <div>

                <img src={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F211652%2Fclose_icon&psig=AOvVaw1RMEZUkv5na1KIOVPBkLmx&ust=1725135120769000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIiZ3KTDnYgDFQAAAAAdAAAAABAE"} alt="" />
                </div> */}
            </div>
            <div className="gallery">
                {data.map((items,index)=>{{
                    return (
                        <div className="pics pb-4" key={index} onClick={()=>getPics(items.src)}>
                            <img width="100%" src={items.src} alt="" />
                        </div>

                    )
                }})}
            </div>
        </div>
        </>
    )
}


export default Gallary