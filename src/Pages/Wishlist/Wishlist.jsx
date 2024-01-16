import React, { useContext, useState } from 'react'
import "./wishlist.scss"
import { WishlistContext } from '../../useContext/WishlistContext'


function Wishlist() {
 const {wishlist,addWishlist,remoweWishlist}=useContext(WishlistContext);

  return (
    <div >
        { wishlist.length ? (
            <div className="wishlist_cards">
                {
                wishlist.map((x)=>(
                    <ul className='wishlist_card' key={x._id}>
                    <li className={`${x.image} image`} ></li>
                    <li className='name'><span>{x.name}</span>  </li>
                    <li>{x.description}</li>
                    <li className='icons'>
                        <i className="fa-regular fa-eye"></i>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span className='heart'> <i className="fa-regular fa-heart" onClick={()=>remoweWishlist(x)}></i></span>
                    </li>
                </ul>
                ))}
            </div>
        ):(
            <h1>Wishlist is not defined</h1>
        )
                } 
     
    </div>
  )
}

export default Wishlist









// 
//   return (
//     <div>
//       {wishlist.length ? (
//         <div className="wishlistPage">
//           { 
//             wishlist.map((x) => (
//               <ul key={x._id} className="page">
//                 <img src={x.image} />
//                 <li className="name">{x.name}</li>
//                 <li className="author">{x.author}</li>
//                 <li onClick={() => addWishlist(x)} className="wishlist">
//                   <i className="fa-regular fa-heart"></i>
//                 </li>
//               </ul>
//             ))}
//         </div>
//       ) : (
//         <h1>Wishlistde mehsul yoxdur </h1>
//       )}
//     </div>
//   );
// }

// export default Wishlist;