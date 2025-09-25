/*async function getWeather() {
    try {

    
    const divRef = document.querySelector("#weather");
    const cityInputRef  = document.querySelector("#cityName");
    const cityName = cityInputRef.value;

    const res = await axios.get(`https://p2pclouds.up.railway.app/v1/learn/weather?
        city=${cityName}`);
    divRef.innerHTML = res.data.current.feelslike_c;
}
    catch (err) {
        alert("Error fetching weather data");
    }
}
async function getQuerryAnswer() {
    try {
        const divRef = document.querySelector("#weather");
        const querryInputRef  = document.querySelector("#querry"); 
        const querry = querryInputRef.value;
        const res = await axios.post(
        ("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent", 
        {
            "contents": [
      {
        "parts": [
          {
            text: querry,
          },
        ],
      },
    ],
  },
{ Headers: 
    {
    "X-Goog-Api-Key" :"AIzaSyDv65vB6olKVlp5ZIDRy9iI84oSfxQzurw",
    "Content-Type": "application/json",
    },

}

);
const answer = res.data.candidates[0].content.parts[0].text;
divRef.innerHTML = answer;


    } catch (err) {
        alert("Something went wrong");
    }
}
async function getWeather(){
    try {  
    const divRef = document.querySelector("#weather");
    const cityInputRef = document.querySelector
    ("#cityName");
    const cityName = cityInputRef.value;

        const res = await axios.get(`https://p2pclouds.up.railway.app/v1/learn/weather?city=${cityName}`);
       divRef.innerHTML = res.data.current.feelslike_c;
     } catch (err ){
        alert("Something went wrong, check your internet connection");
       }
    }
    async function getQueryAnswer(){
        try {
            const divRef = document.querySelector("#weather");
             const queryInputRef = document.querySelector("#query");
             const query = queryInputRef.value;
             const res = await axios.post(
                "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
                {
    "contents": [
      {
        "parts": [
            
          {
            text: query,
          },
        ],
      },
    ],
  },
  
  {
    headers: 
  {  
    "Content-Type":"application/json",
},

  }
             );
             const answer = res.data.candidates[0].content.parts[0].text;
             divRef.innerHTML = answer;
            

        } catch (err){
            alert("Something went wrong");
        }
      }*/
     async function getQueryAnswer() {
  try {
    const divRef = document.querySelector("#weather");
    const queryInputRef = document.querySelector("#query");
    const query = queryInputRef.value.trim();

    if (!query) {
      alert("Please enter a query");
      return;
    }

    const res = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=YOUR_API_KEY",
      {
        contents: [
          {
            parts: [{ text: query }]
          }
        ]
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    console.log(res.data); // 👈 check actual response in console

    const answer = res.data.candidates?.[0]?.content?.parts?.[0]?.text || "No response from AI";
    divRef.innerHTML = answer;

  } catch (err) {
    console.error(err);
    alert("Something went wrong");
  }
}
