import { useState , useEffect} from 'react'
import './App.css'

function App() {

const [currenttime,setCurrenttime]=useState(new Date());
const [ampm,setAmpm]=useState("AM");

useEffect(()=>{
  timeofday();
const timer=setInterval(()=>{
  setCurrenttime(new Date());
},1000);

return()=>clearInterval(timer);
},[]);

const hourformat=(hour)=>{
if(hour===0){
hour=12;
return hour;
}
else if(hour>12){
hour-=12;
return hour;
}
else{
  return hour;
}
};

const timeofday=()=>{
const localtimer=currenttime.getHours();
if(localtimer>12){
setAmpm("PM");
}
};

const zeroadder=(num)=>{
if(num<10){
  num=`0${num}`;
  return num;
}
else{
return num;
}
};
const setmonth=(currmonth)=>{
const month=new Map([
[1,"January"],
[2,"February"],
[3,"March"],
[4,"April"],
[5,"May"],
[6,"June"],
[7,"July"],
[8,"August"],
[9,"September"],
[10,"October"],
[11,"November"],
[12,"December"],
]);
return month.get(currmonth);
};

const setday=(day)=>{
const today=new Map([
  [0,"Sunday"],
  [1,"Monday"],
  [2,"Tuesday"],
  [3,"Wedneday"],
  [4,"Thursday"],
  [5,"Friday"],
  [6,"Saturday"],
])
return today.get(day);
};

  return (
    <>
    <div className='main--container'>
      <div className="heading">Digital Clock</div>
      <div className="clock--time">{zeroadder(hourformat(currenttime.getHours()))} : {zeroadder(currenttime.getMinutes())} : {zeroadder(currenttime.getSeconds())} {ampm}</div>
      <div className="clock--date">{setmonth(currenttime.getMonth())}  {currenttime.getDate()} , {currenttime.getFullYear()}  {setday(currenttime.getDay())}</div>
    </div>
    </>
  )
}

export default App

