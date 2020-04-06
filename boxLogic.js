const classBox = document.querySelector('.classBox');
const dropArea = document.querySelectorAll('.dropArea');  //puts in loop since multiple node list

//Listeners for fill (our box) if to fix uncaught null
classBox.addEventListener('dragstart', dragStart);
classBox.addEventListener('dragend', dragEnd);
classBox.addEventListener('dragover', dragOver);



//Drag Functions

function dragStart(){
  console.log('drag start');
  //setTimeout(() => , 0 )    for lag issue


}

function dragEnd() {
  console.log('drag end');
}

function dragOver(e) {
  e.preventDefault()
  console.log('drag over');

}


