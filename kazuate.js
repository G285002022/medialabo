// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
for(let a=1;a<4;a=a+1){
  let b = document.querySelector('#print');
  b.addEventListener('click', hantei);
}

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let i = document.querySelector('input[name="seisu"]');
	let seisu = i.value;
  let yoso=Number(seisu);
  let span1=document.querySelector('span#kaisu');
  kaisu=kaisu+1;
  span1.textContent=kaisu +'回目の予想:';
  let span2=document.querySelector('span#answer');
  span2.textContent=yoso;
  if(kaisu===3){
    let p1=document.querySelector('p#result');
    if(kotae===yoso){
      p1.textContent='正解です。おめでとう！';
    }else{
      p1.textContent='残念！正解は'+ kotae +'でした。';
    }
  }else if(3<kaisu){
    let p2=document.querySelector('p#result');
    p2.textContent='正解は'+ kotae +'です。すでにゲームは終わっています。';
  }else if(kotae===yoso){
    let p3=document.querySelector('p#result');
    p3.textContent='正解です。おめでとう！';
  }else if(kotae<yoso){
    let p4=document.querySelector('p#result');
    p4.textContent='まちがい。答えはもっと小さいですよ。';
  }else if(kotae>yoso){
    let p5=document.querySelector('p#result');
    p5.textContent='まちがい。答えはもっと大きいですよ。';
  }
    // kotae と yoso が一致するかどうか調べて結果を出力
    // 課題3-1における出力先はコンソール
}