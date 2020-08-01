'use strict';

const divEl = document.createElement('ul');
divEl.innerHTML = `
  <table>
    <tbody>
      <tr>
        <td>w</td>
        <td>x</td>
      </tr>
      <tr>
        <td>y</td>
        <td>z</td>
      </tr>
    </tbody>
  </table>
`;
console.log(divEl.nodeName, divEl.cloneNode(true));

// --- write some code ---
//  you will need to access and update each <td> element



const modifyChildren = (array) => {

  const reachTrTags = Array.from(divEl.children[0].children[0].children);
  let count = 0;
  reachTrTags.forEach(element => {

    for (let tdTag of Array.from(element.children)) {
      tdTag.innerHTML = [array[count]];
      count++;
    }
  });

}




// --- --- --- --- --- ---
const expectedInnerHTMLs = ['a', 'b', 'c', 'd'];
modifyChildren(expectedInnerHTMLs);
console.log(divEl.nodeName, divEl.cloneNode(true));


for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    const tbodyEL = divEl.children[0].children[0];
    const trEl = tbodyEL.children[i];
    const tdEl = trEl.children[j];
    const actual = tdEl.innerHTML;
    //The shift() method removes the first item of an array.
    const expected = expectedInnerHTMLs.shift();
    console.assert(actual === expected, `expected "${expected}"`);
  }
}
