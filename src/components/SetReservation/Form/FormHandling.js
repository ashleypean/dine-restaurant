const formErrorHandling=(entries)=> {
  let error = ''
  //Invalid dates
  const date = Date.now()
  const today = new Date(date) //Store current date
  const hours = ((today.getHours()) % 12 + 1) //Current 24 hour clock to 12hr clock
  
  if(entries.month < 1 || entries.month > 12) {
    error+= ' Please enter a valid date. 1'
  }else if(entries.day < 1 || entries.day > 31 ) {
    error+= ' Please enter a valid date.'
  }else if(entries.year < today.getFullYear()) {
    error+= ' Please enter a valid date. 2'
  }else if(entries.year > 2021) {
    error+= ' We are currently only accepting reservations through 2021, please enter another date.'
  }

  //Invalid Time
  if(entries.hour < 1 || entries.hour > 12) {
    error+= ' Please enter a valid time.'
  }else if(entries.minute < 1 || entries.minute > 59) {
    error+= ' Please enter a valid time.'
  }

  //Attempt to reserve for today, but the time has already passed 
  if(entries.day === today.getDay && entries.month === today.getMonth() && entries.year === today.getFullYear()) {
    if(entries.hour < hours) { 
      //If current hour has already passed
      error+= ' Please enter a valid time.'
    }else if(entries.hour === hours && entries.minute < today.getMinutes()) { 
      //Current hour, minute has passed
      error+= ' Please enter a valid time.'
    }
  }

  //Attempt to reserve day this year that has already passed
  if(entries.year === today.getFullYear() && entries.month < today.getMonth() ) {
    error+= ' Please enter a valid date. 3'
  }else if(entries.year === today.getFullYear() && entries.month === today.getMonth() && entries.date < today.getDate()) {
    error+= ' Please enter a valid date. 4'
  }

  //Invalid party count 
  if(entries.partyCount < 1) {
    error+=' Party must consist of at least one person.'
  }

  //Invalid email check
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (!regex.test(entries.email)) {
    error+=' Please enter a valid email.'
  }

  //Return true if form validation passes, pass error message if it fails
  return error === ''? true:error
}

export default formErrorHandling