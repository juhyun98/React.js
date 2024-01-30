import './App.css';

// JSX문법
// 1.반드시 한의 요소만 return할 수 있다.
function App() {

  let msg = "React 첫 수업!"
  let num = 11;

  if (num === 10) {
    console.log("num은 10이다.");
  }

  return (
    <div>
      <div>
          Hello React!!!! {"React 첫 수업!"}
          {/* 삼항연산자 이용 */}
          {num === 10 ? "num은 " + num + "이다." : <h1 className='txt'>num은 10이 아니다.</h1>}
      </div>
      <div>
          Heloo React!!!! {msg}
      </div>
    </div>
  );
}

export default App;
