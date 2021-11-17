
//This function have the intend of show to the user the local time in the page;
function showRespectiveTime() {
  // The variable 'date' save the time datas of the user computer;
  let date = new Date();
  // 'hour', 'minutes' and 'seconds' saves the respectives datas from 'date';
  let hour = date.getHours() + offset;
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  //This variable will save the information got from the 'if' above;
  let session = '';
  
  if (hour.toFixed() < 12) {
    session = 'AM';
  } else {
    session = 'PM'
  }
  // 'time' generate the message of the time with the data obtained;
  let time = hour + ':' +  minutes + ':' + seconds + ' ' + session
  // We insert the content of 'time' in the HTML;
  document.getElementById('time').innerHTML = time;
  // And we establish how ofter our function will be executed, to updated the data information, in this case 1000ms = 1s.
  setTimeout(showRespectiveTime, 1000);
}
showRespectiveTime();

var offset = 0;

// This function reads wich option was chose for the user;
function readForm() {
  // radioButtons count and save the quantity of options have in the form;
  let radioButtons = document.getElementsByName('timezone');
  // This 'for' loop control the change of element in the form;
  for (var i = 0; i < radioButtons.length; i++) {
    // And this 'if' checks wich element of the form was checked;
    if (radioButtons[i].checked == true) {
      // buttonChecked save the value of the element that was checked for the user;
      var buttonChecked = radioButtons[i].value;
      //Now we take the output of radioButtons[i].value and include in the HTML;
      document.getElementById('showMe').innerHTML = buttonChecked;
    }
  }

  switch (buttonChecked) {
    case 'cst':
      offset = -3;
      break
    case 'est':
      offset = -2;
      break;
    case 'hst':
      offset = -7;
      break;
    case 'pst':
      offset = -5;
      break;
    case 'ast':
      offset = -1; 
      break;
    case 'brt':
      offset = 0;
      break;
    default:
      offset = 0;
      break;
    }   

  console.log(offset);
}

