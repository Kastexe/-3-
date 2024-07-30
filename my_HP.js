//さよならボタンの動作
$("#bye").on("click",function(){
    alert("このメッセージ消すとどっかに左遷するお☆");
    window.location.href = 'https://google.com'; // 通常の遷移
    //window.open('パス名', '_blank'); // 新しいタブを開き、ページを表示
});
//ひまボタンの動作
$("#hima").on("click",function(){
    alert("ひまやなぁ....せや!こことかどうや？(タブ開くで)")
    window.open("https://x.com","_blank")
});
//神様参拝ボタン
$("#god").on("click",function(){
    alert("おっ(^ω^)いいことだ☆")
    window.open("https://twitter.com/Yumely21")
});
