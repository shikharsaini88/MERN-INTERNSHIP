var students= ["Ram", "Raj", "Pawan", "Aman", "Ajay", "Bharat", "Chetan", "Kabir", "Shyam", "Shikhar"]
var listElement=document.getElementById("list")
setModifiedDataInList(students)

function filterStudent() {
    var inputValue=document.getElementById("student").value.toLowerCase()

    var modified=students.filter((studentName)=>
        studentName.toLowerCase().startsWith(inputValue)
)
    setModifiedDataInList(modified)
}
function setModifiedDataInList(modifiedArray){
    listElement.innerHTML=modifiedArray.map((v)=>"<li>" +v+ "</li>").join("")
}