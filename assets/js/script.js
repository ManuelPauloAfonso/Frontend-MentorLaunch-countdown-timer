let day = document.getElementById('day');
let hours = document.getElementById('hours');
let minute = document.getElementById('minute');
let  second = document.getElementById('second');



const newneary = "october 14, 2021  16:36:00"


function contador(){
  console.log('oi')
        const newnearyDate = new Date(newneary);
        const currentDate =  new Date();

        const daysTime =  currentDate.getDate();
        const hoursTime = currentDate.getHours();
        const minuteTime = currentDate.getMinutes();
        const secondTime = currentDate.getSeconds();
        
        
        
         day.innerHTML = daysTime;
         hours.innerHTML = hoursTime;
          minute.innerHTML = minuteTime;
          second.innerHTML  = fomartTime(secondTime);

}
function fomartTime(time) {
    return  time >= 10 ? time : `0${time}`;

}
contador();
setInterval(contador, 1000);