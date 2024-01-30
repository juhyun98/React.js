import './App.css';

// 컴포넌트 불러오기
// 사용한 이름의 첫글자는 반드시 대문자로 작성!
import Menubox from './Components/Menubox';
import BaseCard from './Components/BaseCard';

/* 
   1.컴포넌트(Component)
    - 화면을 보여주는 최소 단위
    - 반복되는 UI코드를 하나로 묶어서 관리
    - 사용방법 -> <컴포넌트 이름/>
    ex) Menubox.js -> <Menubox/> (대문자로 작성)
    * 컴포넌트 내부 틀 만들 때 사용하는 명령어 : rafce

    --> 컴포넌트 사용 시 데이터가 동일하게 사용되는 문제
    --> 해결책 : props활용

  2.프로퍼티(props)
   - 부모컴포넌트에서 자식컴포넌트로 데이터르 전달하는 방식
   ex) 메뉴이름과 가격을 전달할 때
       <Menubox/> --> <Menubox menuNm="아메리카노" price="3500"/>
*/


function App() {

  let menu_style = {
    border : "2px solid black",
    margin : "10px"
  }

  return (
    <div>
      {/* <Menubox menuNm="아메리카노" price="3500"/>
      <Menubox menuNm="아메리카노" price="4000"/> */}
      {/* 카페라떼 / 3700 */}
      {/* <Menubox menuNm="카페라떼" price="3700"/> */}
      {/* 바닐라라떼 / 4000 */}
      {/* <Menubox menuNm="바닐라라떼" price="4000"/> */}
      
      {/* <div style={menu_style}>
        <h3>아메리카노</h3>
        <p>3500원</p>
      </div>
      <div style={menu_style}>
        <h3>아메리카노</h3>
        <p>3500원</p>
      </div>
      <div style={menu_style}>
        <h3>카페라떼</h3>
        <p>3500원</p>
      </div>
      <div style={menu_style}>
        <h3>바닐라라떼</h3>
        <p>4000원</p>
      </div> */}

      <BaseCard teamNm="KIA" player="강병우"/>
      <BaseCard teamNm="SSG" player="김광현"/>
      <BaseCard teamNm="두산" player="김동주"/>
      <BaseCard teamNm="한화" player="문동주"/>


    </div>
  );
}

export default App;
