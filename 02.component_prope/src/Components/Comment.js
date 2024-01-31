import React from 'react'

export const Comment = ({userId, content}) => {
    console.log("부모컴포넌트로부터 넘겨받은 값:", userId, content);

    let comment_style = {
        display : "flex",
        width : "800px",
        border : "1px solid silver",
        margin : "10px"
    }
    let img_style = {
      marginTop : "20px",
      marginRight : "20px",
      marginLeft : "10px",
      width : "50px",
      height : "50px",
      borderRadius : "30px"
    }
    let margin_style = {
        marginTop : "-10px"
    }

    const style = {
      container : {
          display : "flex",
          border : "1px solid gray",
          margin : "10px"
      },
      img : {
          width : 50,
          height : 50
      },
      content : {
          display : "flex",
          flexDirection : "column",
          justifyContent : "center",
          marginLeft : "10px"
      }
    }

  return (
    <div style={comment_style}>
        <img style={img_style} src='https://mblogthumb-phinf.pstatic.net/MjAyMDExMDFfMTgy/MDAxNjA0MjI4ODc1NDMw.Ex906Mv9nnPEZGCh4SREknadZvzMO8LyDzGOHMKPdwAg.ZAmE6pU5lhEdeOUsPdxg8-gOuZrq_ipJ5VhqaViubI4g.JPEG.gambasg/%EC%9C%A0%ED%8A%9C%EB%B8%8C_%EA%B8%B0%EB%B3%B8%ED%94%84%EB%A1%9C%ED%95%84_%ED%95%98%EB%8A%98%EC%83%89.jpg?type=w800'></img>
        <div>
          <h3>{userId}</h3>
          <p style={margin_style}>{content}</p>
        </div>
    </div>
  )
}
export default Comment