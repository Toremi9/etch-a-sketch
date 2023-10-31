let rows = 16;
let columns = rows;

const main = document.querySelector("#main");
main.setAttribute('style', 'display: flex; justify-content:center;');

let grid = document.createElement('div');
grid.className = 'grid';
grid.setAttribute('style', 'display: flex; border: solid 1px;');

for (let i = 0; i < rows; i++){
    const row = document.createElement('div');
    for (let j = 0; j < columns; j++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.setAttribute('style', 'flex: 0 0 1; width: 30px; height: 30px; border: solid black 1px;');
        row.appendChild(cell);
    }
    grid.appendChild(row);
}
main.appendChild(grid);
