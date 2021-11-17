function readForm() {
  let radioButtons = document.getElementsByName('timezone');
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked == true) {
      let buttonChecked = radioButtons[i].value;
      document.getElementById('showMe').innerHTML = buttonChecked;
    }
  }
}