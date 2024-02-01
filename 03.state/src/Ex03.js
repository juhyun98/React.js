import React from 'react'
import Board from './components/Board'

// 여러 이미지를 접근해야 할 경우 public폴더 내 img폴더 생성
// 경로는 '/img/파일명.확장자' 로 접근

/* 

  실습 3) 주사위 게임 페이지 구현
  1. 사용자가 "던지기" 버튼을 누른다.
  2. 주사위 눈이 랜덤으로 출력된다.
  3. 사용자와 컴퓨터의 주사위 눈을 비교한다.
   - 무승부 : alert("무승부!")
   - 사용자 또는 컴퓨터가 이긴 경우 : +1
  4. "초기화" 버튼을 누르면 모든 내용을 초기화한다.
   - 주사위 눈, 점수
  
  [만들어야 할 state]
   - 점수, 이미지경로, 주사위눈 => 사용자, 컴퓨터

  [만들어야 할 컴포넌트]
   - Board.js

*/

const ex03 = () => {

    let style = {
        container : {
          textAlign : "center",
        },
        btn_throw : {
          backgroundColor : "gray",
          border : "none",
          borderRadius : "3px",
          color : "white",
          width : "60px",
          height : "25px",
          marginRight : "5px"
        },
        btn_reset : {
          backgroundColor : "red",
          border : "none",
          borderRadius : "3px",
          color : "white",
          width : "60px",
          height : "25px",
          marginRight : "5px"
        }
    }
  return (
    <div style={style.container}>
        <h3>주사위 게임</h3>
        <Board/>
    </div>
  )
}

export default ex03