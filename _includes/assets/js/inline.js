let latitude = "-45.878761";
let longitude = "170.502792";
    
    let url = "https://api.niwa.co.nz/tides/data?lat="+latitude+"&long="+longitude;
    fetch(url, {
      method: "GET",
      headers: {
        "x-apikey": "mRg3UUIvxzuyZ0ESRPttGgs5FKSyXIph"
      }
    })
    .then(response => { return response.json() })
    .then(data => {
        console.log(data);
        processTideData(data);
    })

    function processTideData(data){
      const article = document.querySelector('article');
      const tideValues = (data.values);
      console.log(data.values)
    
      for (let i = 0; i < tideValues.length; i++){
        const tideEntery = document.createElement('p');
        tideEntery.textContent = ((tideValues[i].time) + " | " + (tideValues[i].value));
        console.log(tideEntery);
        article.appendChild(tideEntery);
      }
    }