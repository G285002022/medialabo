let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
let A = document.querySelector('#print');
A.addEventListener('click', greeting);
function greeting() {
	let B = document.querySelector('input[name="timei"]');
	let timei = B.value;
  console.log(timei);

  let div = document.querySelector('div#result');
  let a= document.createElement('p'); 
  a.textContent='・都市名: 北京市';
  div.insertAdjacentElement('beforeend', a); 
  div = document.querySelector('div#result');
  let b = document.createElement('p'); 
  b.textContent='・緯度: 116.3972';
  div.insertAdjacentElement('beforeend', b); 
  div= document.querySelector('div#result');
  let c = document.createElement('p'); 
  c.textContent='・経度: 39.9075';
  div.insertAdjacentElement('beforeend', c); 
  div= document.querySelector('div#result');
  let d = document.createElement('p'); 
  d.textContent='・天気: 曇りがち';
  div.insertAdjacentElement('beforeend', d); 
  div= document.querySelector('div#result');
  let e = document.createElement('p'); 
  e.textContent='・最低気温: 9.94';
  div.insertAdjacentElement('beforeend', e); 
  div = document.querySelector('div#result');
  let f = document.createElement('p'); 
  f.textContent='・最高気温: 9.94';
  div.insertAdjacentElement('beforeend', f); 
  div = document.querySelector('div#result');
  let g = document.createElement('p'); 
  g.textContent='・湿度: 14';
  div.insertAdjacentElement('beforeend', g); 
  div = document.querySelector('div#result');
  let h = document.createElement('p'); 
  h.textContent='・風速: 2.65';
  div.insertAdjacentElement('beforeend', h); 
  div = document.querySelector('div#result');
  let i= document.createElement('p'); 
  i.textContent='・風向: 197';
  div.insertAdjacentElement('beforeend', i); 
}
