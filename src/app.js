const years = ['2022', '2023'];
const months = ['Enero', 'Febrero', 'Marzo', 'Abril'];
const days = ['Lunes', 'Martes'];
const domains = ['com', 'es', 'dev', 'io', 'net']

domains.forEach(domain => {                       // Esto es el primer loop. Se utiliza el forEach para que recorra todo el array
  months.forEach(month => {                     // Este es el segundo loop. Recorre este primero antes que el anterior. Se empieza desde abajo hacia arriba
    days.forEach(day => {
      years.forEach(year => {
        let dayModificado = day;   // Acá estamos generando una nueva varible para poder modificar la nueva day (generada en el loop) los días Lunes y Martes
        if (domain === "es" && (day === 'Lunes' || day === 'Martes')) { // En esta linea estamos generando un conidicional en donde decimos que si el domain es estricto igual a es y (&&) day es estricto igual a Lunes o martes.....
          dayModificado = day.slice(0, -2) // Se elima las últimas dos letras del día. (SE ME EXPLOTÓ LA CABEZA)
        }
        console.log(`${year}${month}${dayModificado}.${domain}`)
      })
    })
  })
})