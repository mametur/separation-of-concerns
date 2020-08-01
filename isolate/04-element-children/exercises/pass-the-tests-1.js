'use strict';

const ulEl = document.createElement('ul');
ulEl.innerHTML = `
  <li> toad </li>
  <li>Frog</li>
  <li>salad</li>
`;
console.log(ulEl.nodeName, ulEl.cloneNode(true));

// --- write some code ---
const expectedInnerHTMLs = ['toad', 'frog', 'salamander'];
const modifyChildren = (array) => {

  const convertArray = Array.from(ulEl.children);

  convertArray.map((element, index) => element.innerHTML = array[index]);
}

modifyChildren(expectedInnerHTMLs);
// --- --- --- --- --- ---

console.log(ulEl.nodeName, ulEl.cloneNode(true));


for (let i = 0; i < expectedInnerHTMLs.length; i++) {
  const actual = ulEl.children[i].innerHTML;
  const expected = expectedInnerHTMLs[i];
  console.assert(actual === expected, `Test child ${i}`);
}
