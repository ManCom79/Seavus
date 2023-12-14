// Change the text of all paragraphs and headers with javascript
// Note:The html must not be changed

//Changing the elements in the first div
let firtsDivH1 = document.getElementById("myTitle")
firtsDivH1.innerText += " but it is now alsho changed."
firstDivParagraph = firtsDivH1.nextElementSibling
firstDivParagraph.innerText += " but it is alsho changed now!"

//Changing the elements in the second div
let secondDivParagraph = document.getElementsByClassName("second")
secondDivParagraph[0].innerText += " This one is changed too!!!"
let secondDivText = document.getElementsByTagName("text")
secondDivText[0].innerText += " changing them so tehy look much better!!!"

//Changing the elements in the last div
let getDivs = document.getElementsByTagName("div")
let allDivsLength = getDivs.length
//Target third div
let thirdDiv = getDivs[allDivsLength - 1]
//Target the H1 in third div
let thirdDivH1 = thirdDiv.firstElementChild
thirdDivH1.innerText = "This is now changed"
//Target the H3 in the third div
let thirdDivH3 = thirdDivH1.nextElementSibling
thirdDivH3.innerText = "This is now also changed."