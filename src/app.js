const years = ['2022', '2023'];
const months = ['Enero', 'Febrero', 'Marzo', 'Abril'];
const days = ['Lunes', 'Martes'];
const domains = ['com', 'es', 'dev', 'io', 'net']

domains.forEach(domain => {                       // Esto es el primer loop. Se utiliza el forEach para que recorra todo el array
  months.forEach(month => {                     // Este es el segundo loop. Recorre este primero antes que el anterior. Se empieza desde abajo hacia arriba
    days.forEach(day => {
      years.forEach(year => {
        if (domain === 'es' || day === 'Lunes')
        console.log(`${year}${month}${day}.${domain}`)
      })
    })
  })
})