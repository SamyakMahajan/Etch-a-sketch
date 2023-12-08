// script.js
let erase=false
document.addEventListener('DOMContentLoaded', () => {
    const gridCells = document.querySelectorAll('.grid_cell');
    let mousedown = false;
    let chosenColor = "#08af08"; // Default color

    const body = document.body;
    colorPicker.addEventListener('input', () => {
        // if(erase){
        //     chosenColor="#ffffff";
        // }
        // else
            chosenColor = colorPicker.value;
        selectedColor.style.backgroundColor = chosenColor;
    });
    body.addEventListener('mousedown', () => {
        mousedown = true;
    });

    body.addEventListener('mouseup', () => {
        mousedown = false;
    });

    gridCells.forEach(cell => {
        cell.addEventListener('mousedown', () => {
            mousedown = true;
            if(erase){
                chosenColor="#fff";
            }
            else
                chosenColor = colorPicker.value;
        
            cell.style.backgroundColor = chosenColor;
        });

        cell.addEventListener('mouseup', () => {
            mousedown = false;
        });

        cell.addEventListener('mouseenter', () => {
            if (mousedown) {
                if(erase){
                    chosenColor="#ffffff";
                }
                else
                    chosenColor = colorPicker.value;
            
                    cell.style.backgroundColor = chosenColor;
                }
            
        });
    });
});

function toggleClickedState() {
    let button = document.getElementById('Erasor');
    erase=!erase
    button.classList.toggle('clicked'); // Toggle the 'clicked' class
  }

  document.addEventListener('dragstart', function (event) {
    event.preventDefault();
  });