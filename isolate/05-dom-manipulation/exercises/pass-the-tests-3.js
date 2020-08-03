'use strict';

const divEl = document.createElement('ul');
divEl.innerHTML = `
  <table>
    <tbody>
      <tr>
      </tr>
      <tr>
      </tr>
    </tbody>
  </table>
`;
console.log(divEl.nodeName + ' (before)', divEl.cloneNode(true));

// --- write some code ---
const expectedInnerHTMLs = ['a', 'b', 'c', 'd'];
const tbodyElement = Array.from(divEl.children[0].children[0].children);
let count = 0;

for (let element of tbodyElement) {


  while (count < 2) {

    const tdEl = document.createElement('td');
    tdEl.innerHTML = expectedInnerHTMLs[count];
    element.appendChild(tdEl);
    console.log(element.cloneNode(true))
    count++;

  }

  if (!(expectedInnerHTMLs[count - 1] === 'b')) {
    count--;
    while (count < 4) {
      const tdEl = document.createElement('td');
      tdEl.innerHTML = expectedInnerHTMLs[count];
      element.appendChild(tdEl);
      count++;
    }
  }
  count++;

};


// --- --- --- --- --- ---

console.log(divEl.nodeName + ' (after)', divEl.cloneNode(true));


for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    const tbodyEL = divEl.children[0].children[0];
    const trEl = tbodyEL.children[i];
    const tdEl = trEl.children[j];
    const actual = tdEl.innerHTML;
    const expected = expectedInnerHTMLs.shift();
    console.assert(actual === expected, `expected "${expected}"`);
  }
}
