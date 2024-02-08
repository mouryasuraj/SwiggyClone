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


    return (
        <div className="cuisines-container">
            <div className="cuisines-header">
                <h1>Suraj, {(header?.title).toLowerCase()}</h1>
                <div>
                    <div className="left-arrow" onClick={handleLeftArrow} >
                        <i data-testid='leftArrow' className="fa-solid fa-arrow-left"></i>
                    </div>
                    <div className="right-arrow" onClick={handleRightArrow}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
            </div>
            <div data-testid='cuisineBody' className="cuisines-body">
                {
                    imageGridCards?.info.map((img) => {
                        return (
                            <Link
                                to={`category/${isNaN(Number(img?.entityId)) ? img?.entityId.slice(36, 41) : img?.entityId}/${img?.action?.text.replace(/\s/g, '')}`}
                                key={img?.id} ><img data-testid='cuisines' src={cuisinesImg + img?.imageId} alt={`${img?.action?.text} Cuisine Image`} />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cuisines;
