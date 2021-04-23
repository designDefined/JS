(function initiateGradiation() {


  const root = document.querySelector(":root"),
  body = document.querySelector("body");

  let value = 0;

  root.addEventListener("mousemove", changeColor)

  function changeColor(event){
  value = convertHue(parseFloat(convertProportion(event.screenX).toFixed(2)));
    for (i=0; i<10; i++){
      root.style.setProperty(`--gradient${i}`,`hsl(${(value+40*i)%360}, 100%, 90%)`);
    }
  }

  function convertProportion(mouseX){
    return mouseX/body.offsetWidth
  }

  function convertHue(percent){
    return 360 - Math.floor(360*percent)
  }


})();
