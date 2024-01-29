import { useEffect } from "react";
import { cuisinesImg } from "../Utils/constant";

const Cuisines = ({ cuisines, topRatedRes, under200 }) => {
    console.log(cuisines);
    let cuisineBody
    useEffect(()=>{
         cuisineBody = document.querySelector('.cuisines-body')
    })

    const handleLeftArrow = () => {
        if (cuisineBody) {
            cuisineBody.scrollBy(-900, 0)
            console.log("left arrow");
        }
    }
    const handleRightArrow = () => {
        if (cuisineBody) {
            cuisineBody.scrollBy(900, 0)
        }
        console.log("right arrow");
    }


    const { header, imageGridCards } = cuisines?.data?.cards[0]?.card?.card;
    console.log(imageGridCards);
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
                            <img key={img.id} src={cuisinesImg + img.imageId} alt="" />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cuisines;

// https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png