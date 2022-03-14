import React from 'react'

const Stars = ({rating,handleRating}) => {
    function starRating (x) {
        let tab =[] ;
        for (let i=1 ;i <=5 ;i++){
            if (i<=x) {
                tab.push(
                    <span onClick={()=> handleRating(i)}> ⭐ </span>
                )
            }
            else {
                tab.push(<span onClick={()=> handleRating(i)}> ☆ </span>)
            }
        }
        return tab
    }
  return (
    <div>
        {starRating(rating)}
      
    </div>
  )
}

export default Stars

