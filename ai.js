async function askAI(){

const question = document.getElementById("userQuestion").value;

const response = await fetch("https://api.openai.com/v1/chat/completions",{

method:"POST",

headers:{
"Content-Type":"application/json",
"Authorization":"Bearer YOUR_API_KEY"
},

body:JSON.stringify({

model:"gpt-4.1-mini",

messages:[
{role:"system",content:"You are a cybersecurity training assistant."},
{role:"user",content:question}
]

})

})

const data = await response.json()

document.getElementById("aiResponse").innerText =
data.choices[0].message.content

}
