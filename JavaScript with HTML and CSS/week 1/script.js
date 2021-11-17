
// This function reads wich option was chose for the user;
function readForm() {
  // radioButtons count and save the quantity of options have in the form;
  let radioButtons = document.getElementsByName('timezone');
  // This 'for' loop control the change of element in the form;
  for (var i = 0; i < radioButtons.length; i++) {
    // And this 'if' checks wich element of the form was checked;
    if (radioButtons[i].checked == true) {
      // buttonChecked save the value of the element that was checked for the user;
      let buttonChecked = radioButtons[i].value;
      //Now we take the output of radioButtons[i].value and include in the HTML;
      document.getElementById('showMe').innerHTML = buttonChecked;
    }
  }
}

function showRespectiveTime() {
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let session = '';
  
  if (hour.toFixed() < 12) {
    session = 'AM';
  } else {
    session = 'PM'
  }
  let time = hour + ':' +  minutes + ':' + seconds + ' ' + session
  document.getElementById('showMe').innerHTML = time;
  setTimeout(showRespectiveTime, 1000);
}
showRespectiveTime();
