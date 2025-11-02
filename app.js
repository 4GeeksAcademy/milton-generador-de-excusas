// Este código genera una excusa al azar cada vez que recargo la página

function generateExcuse() {
  let who = ['El camarero', 'Mi abuela', 'El chef', 'El turista', 'Mi amigo del bar'];
  let action = ['se comió', 'quemó', 'olvidó', 'tiró', 'confundió'];
  let what = ['la paella', 'las tapas', 'la tortilla', 'el jamón', 'la sangría'];
  let when = ['antes de servirla', 'mientras cocinaba', 'durante la fiesta', 'ayer por la noche', 'cuando iba a traerla a la mesa'];

  // Elegir una palabra al azar de cada lista
  let whoRandom = Math.floor(Math.random() * who.length);
  let actionRandom = Math.floor(Math.random() * action.length);
  let whatRandom = Math.floor(Math.random() * what.length);
  let whenRandom = Math.floor(Math.random() * when.length);

  // Combinar todo en una oración
  let excuse = who[whoRandom] + " " + action[actionRandom] + " " + what[whatRandom] + " " + when[whenRandom] + ".";

  // Mostrar la excusa en la página
  document.getElementById("excuse").innerHTML = excuse;
}
