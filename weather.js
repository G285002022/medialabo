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

let B = document.querySelector('#print');
B.addEventListener('click', sendRequest);
function sendRequest() {
  let s = document.querySelector('select#timei');
  let i = s.selectedIndex;
  let id;
  if(i===1){
    id=360630;
  }else if(i===2){
    id=524901;
  }else if(i===3){
    id=993800;
  }else if(i===4){
    id=1816670;
  }else if(i===5){
    id=1850147;
  }else if(i===6){
    id=1880252;
  }else if(i===7){
    id=2147714;
  }else if(i===8){
    id=2643743;
  }else if(i===9){
    id=2968815;
  }else if(i===10){
    id=3451189;
  }else if(i===11){
    id=5128581;
  }else if(i===12){
    id=5368361;
  }
  let url='https://www.nishita-lab.org/web-contents/jsons/openweather/'+ id +'.json';
  axios.get(url)
      .then(showResult)   
      .catch(showError)   
      .then(finish);      
}
let div = document.querySelector('div#result');
let a= document.createElement('p'); 
a.textContent='緯度: ';
div.insertAdjacentElement('beforeend', a); 
div = document.querySelector('div#result');
let b = document.createElement('p'); 
b.textContent='経度: ';
div.insertAdjacentElement('beforeend', b); 
div= document.querySelector('div#result');
let c = document.createElement('p'); 
c.textContent='天気: ';
div.insertAdjacentElement('beforeend', c); 
div= document.querySelector('div#result');
let d = document.createElement('p'); 
d.textContent='最低気温: ';
div.insertAdjacentElement('beforeend', d);
div= document.querySelector('div#result');
let e = document.createElement('p'); 
e.textContent='最高気温: ';
div.insertAdjacentElement('beforeend', e);
div = document.querySelector('div#result');
let f = document.createElement('p'); 
f.textContent='湿度: ';
div.insertAdjacentElement('beforeend', f); 
div = document.querySelector('div#result');
let g = document.createElement('p'); 
g.textContent='風速: ';
div.insertAdjacentElement('beforeend', g); 
div = document.querySelector('div#result');
let h = document.createElement('p'); 
h.textContent='風向: ';
div.insertAdjacentElement('beforeend', h); 
div = document.querySelector('div#result');
let i= document.createElement('p'); 
i.textContent='都市名: ';
div.insertAdjacentElement('beforeend', i); 
function showResult(resp) {
  let data = resp.data;
  if (typeof data === 'string') {
      data = JSON.parse(data);
  }
  a.textContent='緯度: '+data.coord.lon;
  b.textContent='経度: '+data.coord.lat;
  c.textContent='天気: '+data.weather[0].description;
  d.textContent='最低気温: '+data.main.temp_min;
  e.textContent='最高気温: '+data.main.temp_max;
  f.textContent='湿度: '+data.main.humidity;
  g.textContent='風速: '+data.wind.speed;
  h.textContent='風向: '+data.wind.deg;
  i.textContent='都市名: '+data.name;
}
function showError(err) {
  console.log(err);
}
function finish() {
  console.log('Ajax 通信が終わりました');
}
///let A = document.querySelector('#print');
///A.addEventListener('click', greeting);
///function greeting() {
	///let B = document.querySelector('input[name="timei"]');
	///let timei = B.value;
  ///console.log(timei);
///}
