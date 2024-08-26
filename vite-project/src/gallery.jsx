import img1 from "./pcis/img1.jpg"
import img2 from "./pcis/img2.jpg"
import img3 from "./pcis/img3.jpg"
import img4 from "./pcis/img4.jpg"
import img5 from "./pcis/img5.jpg"
import img6 from "./pcis/img6.jpg"
import "./App.css"
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
    ]


    return(
        <>
        <div>
            <h1 className="text-center py-5">
                Gallary
            </h1>
            <div className="gallery">
                {data.map((items,index)=>{{
                    return (
                        <div className="pics pb-4">
                            <img  src={items.src} alt="" />
                        </div>

                    )
                }})}
            </div>
        </div>
        </>
    )
}


export default Gallary