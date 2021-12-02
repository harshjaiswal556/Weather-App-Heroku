let cityname = document.getElementById("cityname");
let sumbitBtn = document.getElementById("sumbitBtn");
let city_name=document.getElementById("city_name");
let temp =document.getElementById("temp")
let temp_status=document.getElementById("temp_status");
let today_date=document.getElementById("today_date");
let day=document.getElementById("day");

let date = new Date();
let Day = new Array(7);
Day[0]="Sun";
Day[1]="MOn";
Day[2]="Tue";
Day[3]="Wed";
Day[4]="Thu";
Day[5]="Fri";
Day[6]="Sat";
day.innerText=Day[date.getDay()];
console.log(Day[date.getDay()])
let month=new Array(12);
            month[0]="JAN";
            month[1]="FEB";
            month[2]="MAR";
            month[3]="APR";
            month[4]="MAY";
            month[5]="JUN";
            month[6]="JUL";
            month[7]="AUG";
            month[8]="SEP";
            month[9]="OCT";
            month[10]="NOV";
            month[11]="DEC";
today_date.innerText= `${date.getDate()} ${month[date.getMonth()]}`;
const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityname.value;

    if(cityVal === ""){
        city_name.innerText="Please write the name before search"
    }
    else{
        try{

            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=21206564e090c00974e7630f8708192f`;
            let response = await fetch(url);
            let data = await response.json();
            let arrData = [data];

            city_name.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerText=(arrData[0].main.temp - 273.15).toFixed(1);
            temp_status.innerText=arrData[0].weather[0].main;
            let tempMood = arrData[0].weather[0].main;
            if (tempMood == "Clear") {
                temp_status.innerHTML="<i class='fas fa-sun' style='color: #eccc68;'></i>"
            }
            else if (tempMood == "Clouds") {
                temp_status.innerHTML="<i class='fas fa-cloud' style='color: #f1f2f6;'></i>"
            }
            else if (tempMood == "Rain") {
                temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>"
            }
            else {
                temp_status.innerHTML="<i class='fas fa-cloud' style='color: #f1f2f6;'></i>"
            }
        }
        catch{
            city_name.innerText="please enter city name correct"
        }

    }
}

sumbitBtn.addEventListener("click",getInfo);
