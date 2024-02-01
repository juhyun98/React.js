import React from 'react'
import {useState} from 'react'

const Board = () => {

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
        },
        dice_container : {
            display : "flex",
            justifyContent : "center"
        },
        my_dice : {
            marginRight : "50px"
        }
    }

    const [userNum, setUserNum] = useState(1);
    const [computerNum, setComputerNum] = useState(1);
    let [userScore, setUserScore] = useState(0);
    let [computerScore, setComputerScore] = useState(0);

    const rollDice = () => {

        const user = parseInt(Math.random() * 6) + 1;
        const computer = parseInt(Math.random() * 6) + 1;
        let userscore = userScore;
        let computerscore = computerScore;
        console.log('내 숫자 : ', user);
        console.log('컴퓨터 숫자 : ', computer);

        setUserNum(user);
        setComputerNum(computer);

        if (user > computer) {
            userscore += 1;
            setUserScore(userscore);
        }else if (computer > user) {
            computerscore += 1;
            setComputerScore(computerscore);
        }else {
            alert("비겼습니다!")
        }
    }

    const resetScore = () => {
        setUserNum(1)
        setComputerNum(1)
        setUserScore(0)
        setComputerScore(0)
    }

  return (
    <div>
        <button style={style.btn_throw} onClick={rollDice}>던지기!</button>
        <button style={style.btn_reset} onClick={resetScore}>초기화</button>

        <div style={style.dice_container}>
            <div style={style.my_dice}>
                <p>나</p>
                <img src={`/img/dice${userNum}.png`}alt='주사위를 굴려주세요'/>
                <p>현재 점수는?</p>
                <p>{userScore}</p>
            </div>
            <div>
                <p>컴퓨터</p>
                <img src={`/img/dice${computerNum}.png`}alt='주사위를 굴려주세요'/>
                <p>현재 점수는?</p>
                <p>{computerScore}</p>
            </div>
        </div>
    </div>
  )
}

export default Board