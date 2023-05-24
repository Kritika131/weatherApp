const submitBtn=document.querySelector('#submitBtn');
const cityName= document.querySelector('#cityname');
const output = document.querySelector('#city_name');
const temp_statue = document.querySelector('#temp_status')
const temp = document.querySelector('#temp')
const datahide = document.querySelector('.middle_layer')
const tempInfo = document.querySelector('.tempInfo');
const temp_con=document.querySelector('.temp_st')

const getInfo=async(e)=>{
    e.preventDefault();
    let val = cityName.value;
    if(val===""){
       output.innerHTML='<h2>Please! write city name before search.</h2>'
       datahide.classList.add('data_hide')
    }else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/find?q=${val}&units=metric&appid=ee02ba742a0d58d3329818bc182b5c41`
            const response= await fetch(url);
            const data = await response.json();
            const arrData = [data];
            console.log(arrData);
            console.log(arrData[0].list[0].weather[0].main);
            console.log(arrData[0].list[0].main.temp);

            output.innerText=`${arrData[0].list[0].name},${arrData[0].list[0].sys.country}`;
            temp.innerText=arrData[0].list[0].main.temp;
            temp_con.innerText=arrData[0].list[0].weather[0].main;
            
            
            // condition to check sunny rainy or cloudy
            const tempSt=arrData[0].list[0].weather[0].main ;
            if(tempSt==='Clear'){
                temp_statue.innerHTML="<i class ='fas fa-sun' style='color:#eccc68;'></i>"
                tempInfo.style.background='linear-gradient(160deg, orange, orangered)'
            }
            else if(tempSt==='Clouds'){
                temp_statue.innerHTML="<i class ='fas fa-cloud' style='color:#f1f2f6;'></i>"
                tempInfo.style.background='linear-gradient(-5deg, cornflowerblue, transparent)'
            }
            else if(tempSt==='Rain'){
                temp_statue.innerHTML="<i class ='fas fa-cloud-rain' style='color:#a4b0be;'></i>"
                tempInfo.style.background='linear-gradient(-5deg, cornflowerblue, white)'
            }
            else{
                temp_statue.innerHTML="<i class ='fas fa-cloud' style='color:#f1f2f6;'></i>"
                tempInfo.style.background='linear-gradient(-5deg, cornflowerblue, transparent)'
            }
            
            datahide.classList.remove('data_hide')
            

        }catch(err){
            console.log(err);
            output.innerHTML='<h2>plz, enter the city name properly.</h2>'
            datahide.classList.add('data_hide')
        }

        
    }
}
submitBtn.addEventListener('click',getInfo);