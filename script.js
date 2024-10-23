let sTime = document.getElementById('start-time')
let eTime = document.getElementById('end-time')

let sHour = 8;
let eHour = 17;

loadTheBody(sTime,8)
loadTheBody(eTime,17)

function loadTheBody(body,value){
    let i =0;
    while(i!=24){
        let oElement = document.createElement("option");
        let hour = i % 12 === 0 ? 12: i%12;
        hour += ":00"
        hour += i<12 ? " AM": " PM"
        hour = hour=="12:00 PM" ? "0:00 PM": hour
        i++;
        oElement.text=hour;
        oElement.value=i;
        if(i === value){
            oElement.selected=true;
        }
        body.appendChild(oElement)
    }
}
sTime.addEventListener("change",function(){
    sHour= parseInt(this.value)
    createTable();
})

eTime.addEventListener("change",function(){
    eHour= parseInt(this.value)
    createTable();
})


function createTable(){
   const divElement = document.getElementById("timeTable");
   let tableHTML = `<table><thead><tr><th>time</th>`

   const days= ["Sun","Mon","Tuse","wen","thu","fri","sat"]
   days.forEach(day => {
    tableHTML += `<th class = "day th">${day}</th>`
   })
   tableHTML +=`</th></tr></thead><tbody>`
   for (let l=sHour;l<=eHour;l++){
    
    let hour = (l-1) % 12 === 0 ? 12: (l-1)%12;
    hour += ":00"
    hour += (l-1)<12 ? " AM": " PM"
    hour = hour=="12:00 PM" ? "0:00 PM": hour

    tableHTML += `<tr> <td class=time-lable>${hour}</td>`
    days.forEach(day => {
        tableHTML += `<th class ="time-slot"
        onclick="toggle(this)"
        data-day ="${day}"
        hour-time= "${hour}">
        </th>`
       })
   }
   tableHTML += `</tbody></table>`
   divElement.innerHTML= tableHTML;
}

function toggle(e){
    const getClasses =e.classList
    if(getClasses.length==1){
    e.classList.add("selected")
    }
    else{
        e.classList.remove("selected")
    }
}

createTable();


const submitE = document.getElementById("submitMeeting")



async function handleAPI(){
    const eventName= document.getElementById("event-name")
    const personName = document.getElementById("user-name")
    if(eventName.value=="" || personName.value ==""){
        alert("please enter your name and the event name")
        eventName.focus()
    }
    else{
        const seletedTimes = document.querySelectorAll(".selected")
        let daysHoursPayload=""
        for(let e of seletedTimes){
            daysHoursPayload +="\n"+ e.getAttribute("data-day") +" "
            daysHoursPayload +=e.getAttribute("hour-time")+" "
        }

        const payload={
            name: personName.value,
            eventName: eventName.value,
            slots: [...daysHoursPayload.split("\n")]
        }
        payload.slots.splice(0, 1);
        const API_URL ="https://jsonplaceholder.typicode.com/posts"
        const response = await fetch(API_URL,{
            method: `POST`,
            body: JSON.stringify(payload),
            headers: {
                'Content-type': 'application/json'
            }
        });
        const data = await response.json();
        alert("Sucess ! \npress ok to see the response in the console")
        console.log(data)
    }

}

submitE.addEventListener("click",handleAPI)