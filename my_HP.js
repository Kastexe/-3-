//さよならボタンの動作
$("#bye").on("click",function(){
    alert("このメッセージ消すとどっかに左遷するお☆");
    window.location.href = 'https://google.com'; // 通常の遷移
    //window.open('パス名', '_blank'); // 新しいタブを開き、ページを表示
});
//ひまボタンの動作
$("#hima").on("click",function(){
    //window.confirmでOK,キャンセルの2択にできる
        if (window.confirm("ひまやなぁ....せや!こことかどうや？(タブ開くで)")){
            alert("ほいほい☆")
            window.open("https://x.com","_blank")
        }else{
            alert("自分で探そか(((鬼畜")
            window.open("https://google.com","_blank")
        }
});
//神様参拝ボタン
$("#god").on("click",function(){
    alert("おっ(^ω^)いいことだ☆")
    if(window.confirm("今ひま？")){
        window.open("https://twitter.com/Yumely21","_blank")
    }else{
        window.open("https://x.com/yukkuri_light")
    }
});
//なにここボタン
$("#wh").on("click",function(){
    alert("しらねーよ")
    alert("なんもないただのHPだよ")
});