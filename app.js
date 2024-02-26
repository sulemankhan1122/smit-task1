
document.addEventListener('DOMContentLoaded', function () {

    let clickInfoDiv = document.createElement('div'); //div done
    clickInfoDiv.id = 'clickInfo';
    document.body.appendChild(clickInfoDiv);
  
    function updateClickInfo(event) {
      let clickX = event.clientX;
      let clickY = event.clientY;
  
      // take date from date objest
      let clickTime = new Date().toLocaleTimeString();
  
      let clickInfo = `Clickedat:(X :${clickX}, Y : ${clickY})<br>Time: ${clickTime}`;
      clickInfoDiv.innerHTML = clickInfo;
      // var a = clickInfoDiv.style.left = ${clickX}px;
  
      // console.log(a)
    }
  
    document.body.addEventListener('click', updateClickInfo);
});