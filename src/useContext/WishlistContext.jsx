import React, { createContext } from 'react'
import useLocal from '../hook/useLocal';
export const WishlistContext = createContext();

function WishlistProvider({ children }) {
    const [wishlist, setWishlist] = useLocal("wishlist",[])

    function addWishlist(item) {
        // const index = wishlist.findIndex((x) => x._id === item._id);
        const index = wishlist.findIndex((x)=>x._id ===item._id)
        console.log(index)
        console.log(item._id)
        console.log(index);
        if (index === -1) {
            setWishlist([...wishlist, item])

        } else {
            remoweWishlist(item)
        }
    }
    function remoweWishlist(item) {
        setWishlist( wishlist.filter((x) => x._id !== item._id))

    }

function toggleItemWish(item) {
    const index = wishlist.findIndex((x)=>x._id ===item._id)
if (index===-1) {
    setWishlist([...wishlist,item])
}
else setWishlist( wishlist.filter((x) => x._id !== item._id))
}

    return (
        <WishlistContext.Provider value={{wishlist,addWishlist,remoweWishlist}}>
            {children}
        </WishlistContext.Provider>
    )
}

export default WishlistProvider;

// -----------------------import React, { createContext, useState } from 'react'
