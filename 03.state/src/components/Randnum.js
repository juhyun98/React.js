import React from 'react'
import {useState} from 'react'

export const Randnum = () => {

    const randomNum = Math.floor(Math.random() * 3 + 1);

    const [mynum, setMynum] = useState(0);
    const [result, setResult] = useState("");

    const handleLike = () => {

        if (randomNum === mynum) {
            setResult('정답입니다!')
        }else {
            setResult('오답입니다..')
        }
    }
  return (
    <div>
        {result}
    </div>
  )
}

export default Randnum