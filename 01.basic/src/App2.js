function App2() {
    let user = prompt("이름을 말해주세요.");
    let result = "";
    let date = new Date();
    let year = date.getFullYear();
    let season = date.getMonth() + 1;
    let day = date.getDate();
    console.log(season);
    console.log(date);

    let style = {
        fontWeight : "bold"
    }

    if (season === 1 || season === 2 || season === 12) {
        console.log("지금은 겨울입니다. 좋은 하루 보내세요!");
        result = "지금은 겨울입니다. 좋은 하루 보내세요!"
    }else if(season >= 3 && season <= 5) {
        console.log("지금은 봄입니다. 좋은 하루 보내세요!");
        result = "지금은 봄입니다. 좋은 하루 보내세요!"
    }else if(season >= 6 && season <= 8) {
        console.log("지금은 여름입니다. 좋은 하루 보내세요!");
        result = "지금은 여름입니다. 좋은 하루 보내세요!"
    }else if(season >= 9 && season <= 11) {
        console.log("지금은 가을입니다. 좋은 하루 보내세요!");
        result = "지금은 가을입니다. 좋은 하루 보내세요!"
    }else {
        result = "없는 계절입니다."
    }

    return(
        <div style={style}>
            <h1>
                {year}.{season}.{day}
            </h1>
            <hr></hr>
            <div>
                {user}님 {result}
            </div>
        </div>
    )

}

export default App2;