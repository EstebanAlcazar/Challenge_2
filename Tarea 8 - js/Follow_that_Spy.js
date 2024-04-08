//Estamos persiguiendo diligentemente a nuestro esquivo agente, Matthew Knight , que también se hace llamar Roy Miller . Emplea un estilo de vida nómada para evadir la detección, moviéndose constantemente de un lugar a otro, y cada uno de sus viajes sigue una secuencia de itinerarios desconcertante y no estándar . Nuestra misión es descifrar las rutas que emprenderá durante cada uno de sus viajes.
//Se le ha proporcionado una variedad de itinerarios routes, descifre los destinos precisos que visitará en la secuencia correcta de acuerdo con sus itinerarios meticulosamente planificados.
//Puede asumir con seguridad que no habrá ubicaciones duplicadas con archivos routes.
//Todos routeslos proporcionados tendrán itinerarios no vacíos .
//Siempre habrá al menos una (1) ruta que conecte un waypoint con otro.

function findRoutes(routes) {
    const destinations = routes.reduce((acc, route) => {
      acc.push(route[0], route[1]);
      return acc;
    }, []);
    
    const uniqueDestinations = [...new Set(destinations)];
    
    const startingPoints = routes.map(route => route[0]);
    const endingPoints = routes.map(route => route[1]);
    
    const start = startingPoints.find(point => !endingPoints.includes(point));
    
    if (!start) return "No se puede encontrar un punto de inicio.";
    
    let currentDestination = start;
    const routeSequence = [start];
    
    while (routeSequence.length < uniqueDestinations.length) {
      const nextRoute = routes.find(route => route[0] === currentDestination);
      if (!nextRoute) break;
      const nextDestination = nextRoute[1];
      routeSequence.push(nextDestination);
      currentDestination = nextDestination;
    }
    
    return routeSequence.join(', ');
  }
  
  console.log(findRoutes([['USA', 'BRA'], ['JPN', 'PHL'], ['BRA', 'UAE'], ['UAE', 'JPN']])); // Devuelve: "USA, BRA, UAE, JPN, PHL"
  