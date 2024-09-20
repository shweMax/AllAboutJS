// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".
let errormsg= document.getElementById("error")

function Purchase() {
  errStr= "Something went wrong, please try again"
  errormsg.innerHTML= errStr
}