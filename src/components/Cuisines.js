import { useEffect } from "react";
import { cuisinesImg } from "../Utils/constant";
import { Link } from 'react-router-dom'

const Cuisines = ({ cuisines }) => {
    let cuisineBody
    useEffect(() => {
        cuisineBody = document.querySelector('.cuisines-body')
    })

    const handleLeftArrow = () => {
        if (cuisineBody) {
            cuisineBody.scrollBy(-900, 0)
        }
    }
    const handleRightArrow = () => {
        if (cuisineBody) {
            cuisineBody.scrollBy(900, 0)
        }
    }


    const { header, imageGridCards } = cuisines?.data?.cards[0]?.card?.card;
    const img = Number(imageGridCards.info[0].entityId);
    if (isNaN(img)) {
        console.log("Nan");
    } else {
        console.log("nont nana");
    }

    return (
        <div className="cuisines-container">
            <div className="cuisines-header">
                <h1>Suraj, {(header.title).toLowerCase()}</h1>
                <div>
                    <div className="left-arrow" onClick={handleLeftArrow} >
                        <i className="fa-solid fa-arrow-left"></i>
                    </div>
                    <div className="right-arrow" onClick={handleRightArrow}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
            </div>
            <div className="cuisines-body">
                {
                    imageGridCards.info.map((img) => {
                        return (
                            <Link to={`category/${isNaN(Number(img.entityId)) ? img.entityId.slice(36, 41) : Number(img.entityId)}/${img.action.text}`} key={img.id} ><img src={cuisinesImg + img.imageId} alt="" /></Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cuisines;

// https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png