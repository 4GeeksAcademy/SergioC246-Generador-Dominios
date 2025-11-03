const year = ['2022', '2023'];
const month = ['Enero', 'Febrero', 'Marzo', 'Abril'];
const day = ['Lunes', 'Martes'];
const domain = ['com', 'es', 'dev', 'io', 'net']

year.forEach(year => {                       // Esto es el primer loop. Se utiliza el forEach para que recorra todo el array
  month.forEach(month => {                     // Este es el segundo loop. Recorre este primero antes que el anterior. Se empieza desde abajo hacia arriba
    day.forEach(day => {
      domain.forEach(domain => {
        console.log(`${year}${month}${day}.${domain}`)       // Esto es una forma más simplificada de concatenar las variables
      })
    })
  })
})