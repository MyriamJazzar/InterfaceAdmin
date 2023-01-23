let inputimg = document.querySelector(".Img")
let inputtxt = document.querySelector(".Txt")
let button = document.querySelector("button")
let liste = document.querySelector("ul")
button.addEventListener("click",AddStudent)

//### Triggering a Button Click on Enter####//
inputtxt.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
     e.preventDefault();
     button.click();
 }
});

let i = 0
function AddStudent()
{ if(inputtxt.value=="")
{
    alert("Empty Field")
    return
}

  console.log("hello")
  let li = document.createElement("li")
  li.id = "Student" + i
  i++
  let button = document.createElement("button")
  button.innerText = "Supprimer"
  button.className="Del"
  button.addEventListener("click",DeleteStd)
  let span = document.createElement("span")
  span.innerHTML = inputtxt.value
  let reader = new FileReader()
  let image = document.createElement("img")
  image.src = reader.result
  li.appendChild(button)
  li.appendChild(span)
  li.appendChild(image)
  liste.appendChild(li)
  inputtxt.value=""

  

}

  function DeleteStd(e){
    console.log("hey")
    let id = e.target.parentElement.id
    let elementToDelete = document.getElementById(id);
        console.log(elementToDelete);
        elementToDelete.remove();
      
    }
/*inputimg.addEventListener("change", function()
{
    //console.log(input.value)
    let reader = new FileReader()
    reader.addEventListener("load", function()
    {
        document.querySelector(".classouette").style.backgroundImage = `url($(reader.result))`
    })
    reader.readAsDataURL(this.files[0])
})*/


