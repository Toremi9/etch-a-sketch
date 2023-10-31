let rows = 16;
let columns = rows;

const main = document.querySelector("#main");

const headlinediv = document.createElement('div');
headlinediv.className = 'headline';
main.appendChild(headlinediv);

const headline = document.createElement('h1');
headline.textContent = 'Etch-a-sketch';
headlinediv.appendChild(headline);

let grid = document.createElement('div');
grid.className = 'grid';
grid.setAttribute('style', 'display: flex; border: solid 2px; justify-content: center; margin: auto; width: 500px; height: 500px;');

for (let i = 0; i < rows; i++){
    const row = document.createElement('div');
    for (let j = 0; j < columns; j++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.setAttribute('style', `width: ${500 / rows}px; height: ${500 / rows}px; border: solid black 1px; box-sizing: border-box;`);
        cell.addEventListener('mouseover', () => {
            cell.setAttribute('style', `width: ${500 / rows}px; height: ${500 / rows}px; border: solid black 1px; background-color: yellow; box-sizing: border-box;`);
        });
        row.appendChild(cell);
    }
    grid.appendChild(row);
}
main.appendChild(grid);

const underGrid = document.createElement('div');
underGrid.className = 'underGrid';
main.appendChild(underGrid);

const leftmid = document.createElement('div');
leftmid.textContent = "Choose a color";
underGrid.appendChild(leftmid);