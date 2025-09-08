import { useState } from "react"
import Mydata from "../data/Data"

export default function Gallery(props) {

    const [mydata, setmydata] = useState(Mydata)

    return (
        <div>
            <h5>my Gallery</h5>
            <div className="grid">
               
                {
                    mydata.map((val) => {
                        if (val.category.includes(props.pro)) {
                            return (
                                <div className="grid-sec">
                                    <img src={val.imgurl} />
                                    <h4>{val.heading}</h4>
                                </div>
                                
                            )
                        }
                    })
                }
            </div>


        </div>
    )
}