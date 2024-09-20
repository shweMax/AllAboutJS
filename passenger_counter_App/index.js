let saveEl= document.getElementById("save-el")
let count=0
let countEl=document.getElementById("count-el")
// console.log(countEl)

function increment(){
  count= count + 1;
  countEl.innerText = count
}

function save(){
  // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
  let format= count+" - "
  // 3. Render the variable in the saveEl using innerText
  saveEl.innerHTML+=format
  // NB: Make sure to not delete the existing content of the paragraph
  countEl.innerHTML =0;
  count=0;
}