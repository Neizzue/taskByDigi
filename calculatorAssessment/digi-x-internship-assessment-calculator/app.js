(function(){
  
  let screen = document.querySelector('.screen');
  let buttons = document.querySelectorAll('.btn');
  let clear = document.querySelector('.btn-clear');
  let equal = document.querySelector('.btn-equal');
  //create equa variable that holds a string of equation to be compute in eval()
  let equa = "";

  buttons.forEach(function(button){
    button.addEventListener('click', function(e){
      let value = e.target.dataset.num;
      screen.value = value;
      //add all clicked button's values into a string to be compute in eval()
      equa += value;
    })
  });
  
  equal.addEventListener('click', function(e){
    if(screen.value === ''){
      screen.value = 'Please Enter a Value';
    } else {
      //empty the screen first
      screen.value = '';
      let answer = eval(equa);
      //display the answer
      screen.value += answer;
      //clear variable equa & update new value into equation
      equa=""+answer;
    }
  })
  
  clear.addEventListener('click', function(e){
    screen.value = '';
    //also clear the equation as 'C' button also used as reset button
    equa = "";
  })
})

();
