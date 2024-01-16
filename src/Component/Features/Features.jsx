import React, { useContext, useEffect, useState } from 'react'
import "./features.scss"
import { SearchContext } from '../../useContext/SearchContext'
import { WishlistContext } from '../../useContext/WishlistContext'

function Features() {
    const [fetchData, setfetchData] = useState([])
    const [sortedProperty, setSortedProperty] = useState(null)
    const {search,handleSearch}=useContext(SearchContext)
    const {addWishlist}= useContext(WishlistContext)
    useEffect(() => {
        fetch("http://localhost:7000")
            .then((res) => res.json())
            .then((data) => setfetchData(data))
    }, [])

    return (
        <div>
            <div className="features">
                <div className="features_content">
                    <h1>Features That Make Us Hero</h1>
                    <p>If you are looking at blank cassettes on the web, you may be very confused at
                        the difference in price. You may see some for as low as $.17 each.</p>
                </div>
                <div className="search_by_name">
                    <input type="text" name="" placeholder='search by name' onChange={(e)=>handleSearch(e)} />
                    <div className="buttons">
                        <button onClick={()=>setSortedProperty({property:"name", asc:true})}>a-z</button>
                        <button onClick={()=>setSortedProperty({property:"name", asc:false})}>Z-a</button>
                        <button onClick={()=>setSortedProperty(null)}>default</button>
                    </div>
                </div>
                <div className="features_cards">
                    {fetchData
                    .filter((x)=>x.name.toLowerCase().includes(search.toLowerCase()))
                    .sort((a,b)=> {
                        if (sortedProperty && sortedProperty.asc) {
                        return  ((a[sortedProperty.property] > b[sortedProperty.property]) ? 1 : ((b[sortedProperty.property] > a[sortedProperty.property]) ? -1 : 0))
                            
                        } else if(sortedProperty && sortedProperty.asc===false){
                        return  ((a[sortedProperty.property] < b[sortedProperty.property]) ? 1 : ((b[sortedProperty.property] < a[sortedProperty.property]) ? -1 : 0))
                        } else{
                            return 0
                        }
                    }
                    )
                    .map((x) => (
                        <ul className='features_card' key={x._id}>
                            <li className={`${x.image} image`} ></li>
                            <li className='name'><span>{x.name}</span>  </li>
                            <li>{x.description}</li>
                            <li className='icons'>
                                <i className="fa-regular fa-eye"></i>
                                <i className="fa-solid fa-cart-shopping"></i>
                                <i className="fa-regular fa-heart" onClick={()=>addWishlist(x)}></i>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features