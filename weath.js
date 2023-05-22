const apikey="bc7adebfe8970f8673ae920e3c0bea9b";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";




const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const icon=document.querySelector(".icon");



async function check(city){
    const response=await fetch(apiUrl + city + `&appid=${apikey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data=await response.json();
    
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";

if(data.weather[0].main == "Clouds"){
    icon.src="images/clouds.png";
}
else if(data.weather[0].main == "Clear"){
    icon.src="images/clear.png";
}
else if(data.weather[0].main == "Rain"){
    icon.src="images/rain.png";
}
else if(data.weather[0].main == "Drizzle"){
    icon.src="images/drizzle.png";
}
else if(data.weather[0].main == "Mist"){
    icon.src="images/mist.png";

}
document.querySelector(".weather").style.display="block";
document.querySelector(".error").style.display="none";
    }

}

searchbtn.addEventListener("click",()=>{
    check(searchbox.value);
})
