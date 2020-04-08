const classBox = document.querySelector('.classBox');
const dropArea = document.querySelectorAll('.dropArea');  //puts in loop since multiple node list

//Listeners for fill (our box) if to fix uncaught null
classBox.addEventListener('dragstart', dragStart);
classBox.addEventListener('dragend', dragEnd);
classBox.addEventListener('dragover', dragOver);


// loop through all draggable divs
 var dm = document.getElementsByClassName('classBox');
 for (var i = 0; i < dm.length; i++) {
  dm[i].addEventListener('dragstart', drag_start, false);
  document.body.addEventListener('dragover', drag_over, false);
  document.body.addEventListener('drop', drop, false);
}

//Drag Functions

function dragStart(){
  console.log('drag start');
  var style = window.getComputedStyle(event.target, null);
  event.dataTransfer.setData("text/plain", (parseInt(style.getPropertyValue("left"), 10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"), 10) - event.clientY) + ',' + event.target.getAttribute('data-item'));
  //setTimeout(() => , 0 )    for lag issue


}

function dragEnd() {
  console.log('drag end');
  var offset = event.dataTransfer.getData("text/plain").split(',');
  var dm = document.getElementsByClassName('classBox');
  dm[parseInt(offset[2])].style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
  dm[parseInt(offset[2])].style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
  event.preventDefault();
  return false;
}

function dragOver(e) {
  e.preventDefault()
  console.log('drag over');

}


