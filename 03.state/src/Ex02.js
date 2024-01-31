import React from 'react'
import Randnum from './components/Randnum';

/* 
    실습 2) 랜덤 숫자 맞추는 페이지 구현
    1. 사용자가 1~3 사이의 버튼을 클릭한다.
    2. 랜덤숫자를 생성한다. (1~3)
    3. 사용자가 누른 숫자의 값과 랜덤숫자를 비교한다.
     - 두 수자가 일치하면 "정답입니다~!" 출력
     - 두 숫자가 다르다면 "오답입니다.." 출력
*/

const Ex02 = () => {

    const randomNum = Math.floor(Math.random() * 3 + 1);
    console.log(randomNum);

    const handleNum = (event) => {
        // innerText : HTML 요소의 내용을 문자열로 가져오는 속성
        console.log(event.target.innerText);
    }

  return (
    <div>
        <button onClick={handleNum}>1</button>
        <button onClick={handleNum}>2</button>
        <button onClick={handleNum}>3</button>
        <div>
            <p>내가 입력한 숫자 : {}</p>
            <p>랜덤한 숫자 : {randomNum}</p>
            <Randnum/>
        </div>
    </div>
  )
}

export default Ex02