let rows = 16;
let columns = 16;
let color = 'black';
let listenerAction = setToBlack;

var primaryMouseButtonDown = false;

function setPrimaryButtonState(e) {
  var flags = e.buttons !== undefined ? e.buttons : e.which;
  primaryMouseButtonDown = (flags & 1) === 1;
}

document.addEventListener("mousedown", setPrimaryButtonState);
document.addEventListener("mousemove", setPrimaryButtonState);
document.addEventListener("mouseup", setPrimaryButtonState);

function listenerFunction() {
    console.log(primaryMouseButtonDown);
    if (primaryMouseButtonDown) {
    listenerAction(this);
    };
};

function listenerFunctionMouseDown(e) {
    e.preventDefault();
    listenerAction(this);
};

function setToBlack(cell) {
    cell.setAttribute('style', `width: ${500 / rows}px; height: ${500 / rows}px; border: solid black 1px; background-color: black; box-sizing: border-box;`);
};

function setToRandomColor(cell) {
    cell.setAttribute('style', `width: ${500 / rows}px; height: ${500 / rows}px; border: solid black 1px; background-color: rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()}); box-sizing: border-box;`);
};

const main = document.querySelector("#main");

const headlinediv = document.createElement('div');
headlinediv.className = 'headline';
main.appendChild(headlinediv);

const headline = document.createElement('h1');
headline.textContent = 'Etch-a-sketch';
headlinediv.appendChild(headline);

const gridAndMenu = document.createElement('div');
gridAndMenu.className = 'gridAndMenu';
document.body.appendChild(gridAndMenu);

function createGrid() {
    const grid = document.createElement('div');
    grid.className = 'grid';
    
    for (let i = 0; i < rows; i++){
        const row = document.createElement('div');
        for (let j = 0; j < columns; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.setAttribute('style', `width: ${500 / rows}px; height: ${500 / rows}px; border: solid black 1px; box-sizing: border-box;`);
            cell.addEventListener('mousedown', listenerFunctionMouseDown);
            cell.addEventListener('mouseover', listenerFunction);
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
    return grid;
};

function getRandomColor() {
    return Math.floor(Math.random() * 255);
};

function rgbColor () {
    return `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`;
}

const leftMid = document.createElement('div');
leftMid.classList = "leftMid";
leftMid.setAttribute('style', 'display: flex; flex-direction: column; justify-content: center; align-items: center;');
gridAndMenu.appendChild(leftMid);

const gridSize = document.createElement('div');
gridSize.classList = 'gridSize';
gridSize.setAttribute('style','display: flex;');
leftMid.appendChild(gridSize);

const chooseNumber = document.createElement('div');
chooseNumber.textContent = "Grid size (max 100):";
chooseNumber.setAttribute('style', 'margin: 0px;');
gridSize.appendChild(chooseNumber);

const input = document.createElement('input');
input.type = "number";
input.setAttribute('id','input');
input.setAttribute('style', 'margin-right: 10px; margin-left: 10px; ');
gridSize.appendChild(input);

const enterBtn = document.createElement('button');
enterBtn.textContent = "Enter";
enterBtn.addEventListener('click', () => {
    let rememberValue = input.value;
    input.value = '';

    if (rememberValue > 100) {
        alert('We told you max is 100, so we changed it to 100');
        rememberValue = 100;
    } else if (rememberValue < 1) {
        rememberValue = 1;
    };

    rows = rememberValue;
    columns = rememberValue;

    const newGrid = createGrid();

    gridAndMenu.removeChild(grid);
    gridAndMenu.appendChild(newGrid);
    
    grid = newGrid;

});
gridSize.appendChild(enterBtn);

const checkBox = document.createElement('div');
checkBox.setAttribute('style','display: flex;')
leftMid.appendChild(checkBox);

const randomColorCheckBox = document.createElement('input');
randomColorCheckBox.type = "checkbox";
randomColorCheckBox.setAttribute('id','checkBox');
randomColorCheckBox.addEventListener('change', () => {
    if (randomColorCheckBox.checked) {
        listenerAction = setToRandomColor;
    } else {
        listenerAction = setToBlack;
}});

const randomColorText = document.createElement('p');
randomColorText.textContent = 'Random color';


checkBox.appendChild(randomColorCheckBox);
checkBox.appendChild(randomColorText);

let grid = createGrid();
gridAndMenu.appendChild(grid);