let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#b2a6ff;">Desarrollo sitios web y me desarrollo como instructora en Tecnolochicas.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
