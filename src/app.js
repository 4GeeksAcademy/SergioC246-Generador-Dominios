let year = ['2022', '2023'];
let month = ['Enero', 'Febrero', 'Marzo', 'Abril'];
let day = ['Lunes', 'Martes'];
const domain = ['com', 'es', 'dev', 'io', 'net']

year.forEach(year => {                       // Esto es el primer loop. Se utiliza el forEach para que recorra todo el array
  month.forEach(month => {                     // Este es el segundo loop. Recorre este primero antes que el anterior. Se empieza desde abajo hacia arriba
    day.forEach(day => {
      domain.forEach(domain => {
        console.log(b + ' ' + a + ' ' + c + ' ' + '.' + d)       // Esto es para concatenar todo los elementos
      })
    })
  })
})