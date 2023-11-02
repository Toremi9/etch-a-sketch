let rows = 16;
let columns = rows;

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

let grid = document.createElement('div');
grid.className = 'grid';

for (let i = 0; i < rows; i++){
    const row = document.createElement('div');
    for (let j = 0; j < columns; j++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.setAttribute('style', `width: ${500 / rows}px; height: ${500 / rows}px; border: solid black 1px; box-sizing: border-box;`);
        cell.addEventListener('mouseover', () => {
            cell.setAttribute('style', `width: ${500 / rows}px; height: ${500 / rows}px; border: solid black 1px; background-color: black; box-sizing: border-box;`);
        });
        row.appendChild(cell);
    }
    grid.appendChild(row);
}


const leftOfGrid = document.createElement('div');
leftOfGrid.setAttribute('style','display: flex; justify-content: center; align-content: center;');
leftOfGrid.className = 'leftOfGrid';
gridAndMenu.appendChild(leftOfGrid);

const bottomMid = document.createElement('div');
bottomMid.setAttribute('style', 'display: flex; flex-wrap: wrap; align-items: center;');
leftOfGrid.appendChild(bottomMid);

const chooseNumber = document.createElement('p');
chooseNumber.textContent = "Grid size (max 100):";
chooseNumber.setAttribute('style', ' margin: 0px;');
bottomMid.appendChild(chooseNumber);

const input = document.createElement('input');
input.setAttribute('style', 'margin-right: 10px; margin-left: 10px;');
bottomMid.appendChild(input);

const enterBtn = document.createElement('button');
enterBtn.textContent = "Enter";
enterBtn.addEventListener('click', () => {
    let rememberValue = input.value;
    input.value = '';

    if (rememberValue > 100) {
        alert('We told you max is 100, so we changed it to 100');
        rememberValue = 100;
    };

    if (rememberValue < 1) {
        rememberValue = 1;
    };

    rows = rememberValue;
    columns = rememberValue;

    let newGrid = document.createElement('div');
    newGrid.className = 'grid';

    for (let i = 0; i < rows; i++){
        const row = document.createElement('div');
        for (let j = 0; j < columns; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.setAttribute('style', `width: ${500 / rows}px; height: ${500 / rows}px; border: solid black 1px; box-sizing: border-box;`);
            cell.addEventListener('mouseover', () => {
                cell.setAttribute('style', `width: ${500 / rows}px; height: ${500 / rows}px; border: solid black 1px; background-color: black; box-sizing: border-box;`);
            });
            row.appendChild(cell);
        }
        newGrid.appendChild(row);
        }

    
    gridAndMenu.removeChild(grid);
    gridAndMenu.appendChild(newGrid);
    
    grid = newGrid;


});
bottomMid.appendChild(enterBtn);

gridAndMenu.appendChild(grid);