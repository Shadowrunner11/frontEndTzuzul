import getCalendar from "./calendar.js";
import { $, $$ } from "./functions/selectors.js";

const populateDays = (date = new Date())=>{
console.log(date)
let {initDate, actualDate, finalDay, monthNumber, year} = getCalendar(date)

const td = $$("#calendar tbody td")
let days = 1


    while(days<=finalDay){
        td[initDate].setText(days)
        //if(days===actualDate) {console.log("a");td[initDate].element.style= "background: blue;"}
        initDate++
        days++
    }
return {monthNumber,year}
}

let {monthNumber, year}=populateDays()

$("#button-prev-month").onClick(()=>{
    $$(".calendar__fr td").forEach(element=>element.setText(""))
    $$(".calendar__lr td").forEach(element=>element.setText(""))
    populateDays(new Date(year, monthNumber--,1))
})

$("#button-next-month").onClick(()=>{
    $$(".calendar__fr td").forEach(element=>element.setText(""))
    $$(".calendar__lr td").forEach(element=>element.setText(""))
    populateDays(new Date(year, monthNumber++,1))
})

