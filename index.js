let backUpImg = ['https://images.unsplash.com/photo-1514521068412-14c7cd29cc23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',''];

fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=forest')
    .then(res => res.json())
    .then(data =>{

        
        document.body.style.backgroundImage= `url(${data.urls.full})`
       
        document.getElementById('author').innerText=`By: ${data.user.name}`
        


    })
    .catch(err=>{

        document.body.style.backgroundImage= `url(${'https://images.unsplash.com/photo-1514521068412-14c7cd29cc23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'})`
        

    })



    // Bitcoin data

    fetch('https://api.coingecko.com/api/v3/coins/bitcoin')
        .then(res =>{
            
            if(!res.ok){

                throw Error("something went wrong")

            }
            
            
            return res.json()}
            
            )
        .then(data => {

            console.log(data)
            document.getElementById('cryptoImg').src=`${data.image.small}`;
            document.getElementById('Crypto').innerText=`${data.name}`;
            
            document.querySelector('.bitcoin-details').innerHTML =`
            
          

            <p>🎯:&nbsp&nbsp$${data.market_data.current_price.usd}</p>
            <p>📈:&nbsp&nbsp$${data.market_data.high_24h.usd}</p>
            <p>📉:&nbsp&nbsp$${data.market_data.low_24h.usd}</p>

            
            
            `



        })
        .catch(err=> console.log("this is error"))

        
        setInterval(Time,1000)

        function Time(){

            var today = new Date();
            var hours = today.getHours();

            var date = new Date();
            
            let time = date.toLocaleTimeString('en-GB',{timeStyle:"short"})

            document.getElementById('time').innerHTML= `<h1>${time}<h1>`
            
           
            
         

            if(time>='1:00' && time<='12:00'){
                document.getElementById('greet').innerHTML=`<h2>Good Morning</h2>`
                
            }else if(time>='12:00' && time<='16:00'){
               
                document.getElementById('greet').innerHTML=`<h2>Good Aftermoon</h2>`
            }else if(time>='16:00' && time<='21:00'){
             
                document.getElementById('greet').innerHTML=`<h2>Good Evening</h2>`
            }else if(time>='21:00' && time<='24:00'){
               
                document.getElementById('greet').innerHTML=`<h2>Good Night</h2>`
            }

            
    
            

        }
        
// Weather API

navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
          const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
          document.getElementById("Weather").innerHTML = `
            <div id="degree">
              <img src=${iconUrl} />
              <p class="weather-temp">${Math.round(data.main.temp)}º</p>
          </div>
              <p class="weather-city">${data.name}</p>
          `
          console.log(data);
      })
      .catch(err => console.error(err))
});




        