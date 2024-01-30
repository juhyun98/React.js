// import React from 'react'

// const BaseCard = (props) => {

//     console.log("부모컴포넌트로부터 넘겨받은 값:", props.teamNm, props.player);

//     let box_style = {
//         width : "800px",
//         border : "1px solid gray",
//         margin : "10px",
//         textAlign : "center"
//     }
    
//   return (
//     <div style={box_style}>
//         <h3>{props.teamNm}</h3>
//         <p>{props.player}</p>
//     </div>
//   )
// }

// export default BaseCard

//////////////////////////////////////////

import React from 'react'

const BaseCard = ({teamNm, player}) => {

    console.log("부모컴포넌트로부터 넘겨받은 값:", teamNm, player);

    let box_style = {
        width : "800px",
        border : "1px solid silver",
        margin : "10px",
        textAlign : "center"
    }
    
  return (
    <div style={box_style}>
        <h3>{teamNm}</h3>
        <p>{player}</p>
    </div>
  )
}

export default BaseCard