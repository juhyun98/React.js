import React from 'react'
import Comment from './Comment';

export const CommentList = () => {

    let list_style = {
        border : "1px solid silver",
        margin : "10px",
    }

  return (
    <div style={list_style}>
        <h1>댓글 목록</h1>
        <Comment userId="행인1" content="React 두 번째 수업이네요~!"/>
        <Comment userId="행인2" content="인쌤TV 구독과 좋아요 꼭 눌러주세요~!"/>
        <Comment userId="행인3" content="Node.js 수업 너무 재밌어요!"/>
        <Comment userId="행인4" content="원호쌤 최고!"/>
    </div>
  )
}
export default CommentList