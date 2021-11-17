
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

//This function have the intend of show to the user the local time in the page;
function showRespectiveTime() {
  // The variable 'date' save the time datas of the user computer;
  let date = new Date();
  // 'hour', 'minutes' and 'seconds' saves the respectives datas from 'date';
  let hour = date.getHours();
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
  document.getElementById('showMe').innerHTML = time;
  // And we establish how ofter our function will be executed, to updated the data information, 1000ms = 1s.
  setTimeout(showRespectiveTime, 1000);
}
showRespectiveTime();
