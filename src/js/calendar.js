function getCalendar(date=new Date()){
    
    let month = date.toLocaleString('es-ES',{month:"long"})
    let actualDay = date.getDay()
    let actualDate = date.getDate()
    let day = date.getDate()
    let year = date.getFullYear()
    let initDate = (actualDay-day)%7+1;
    if (initDate<0) initDate = 7+initDate
    let finalDay = new Date(year, date.getMonth()+1, 0).getDate()
    let monthNumber = date.getMonth()
    return {month, date, year, initDate, finalDay, actualDay, actualDate, monthNumber}
}


export default getCalendar
