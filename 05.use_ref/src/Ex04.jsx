import React, { useRef } from 'react'

const Ex04 = () => {

    /* 
    (1) 사용자가 input 태그 안에 입력한 값을 가져오기
    (2) 그 값에 따라서 해당하는 경로로 이미지의 src 속성 변경하기
    */

    const textRef = useRef();
    const imgRef = useRef();

    const imgList = [
        {name : '고양이', src : 'https://product.cdn.cevaws.com/var/storage/images/_aliases/reference/media/feliway-2017/images/kor-kr/1_gnetb-7sfmbx49emluey4a/6341829-1-kor-KR/1_gNETb-7SfMBX49EMLUeY4A.jpg'},
        {name : '강아지', src : 'https://dimg.donga.com/wps/NEWS/IMAGE/2022/01/28/111500268.2.jpg'}
    ]
    const imgChange = () => {
        // console.log(textRef.current.value);
        // switch (textRef.current.value) {
        //     case imgList[0].name : imgRef.current.src = imgList[0].src; break;
        //     case imgList[1].name : imgRef.current.src = imgList[1].src; break;
        // }
        imgList.forEach(item => {
            textRef.current.value === item.name && (imgRef.current.src = item.src);
        })

        // input 입력값 비워주기
        textRef.current.value = '';

        // input 오토포커싱
        textRef.current.focus();
    }
  return (
    <div>
        <p>어떤 사진을 원하시나요?</p>
        <input type="text" ref={textRef}/>
        <button onClick={imgChange}>변경</button>
        <br />
        <br />
        <img src={imgList[0].src} width="250px" alt="" ref={imgRef}/>
    </div>
  )
}

export default Ex04