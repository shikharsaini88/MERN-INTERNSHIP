var Students=[
    {name:"Raj", Surname: "Yadav", Age: 24, city: "Devas"

    },
    {name:"Ram", Surname: "Shukla", Age: 25, city: "Delhi"

    },
    {name:"Krishna", Surname: "Goswami", Age: 23, city: "Indore"

    },
    {name:"Lakhan", Surname: "Yadav", Age: 32, city: "nepa"

    },
    {name:"Bhupendra", Surname: "Dayne", Age: 20, city: "Khandwa"

    }
]
 var listElement=document.getElementById("list")
 var check=1
 setModifiedDataInList(Students)
 function changeFilterType(checkValue){
    check= checkValue
 }


 function filterStudent() {
    var inputValue=document.getElementById("student").value.toLowerCase()

    var modified=Students.filter
        ((Students)=>{
            if(check==1){
                return Students.name.toLowerCase().startsWith(inputValue)
            }if(check==2){
                return Students.Surname.toLowerCase().startsWith(inputValue)
            }if(check==3){
                return Students.Age == inputValue
            }if(check==4){
                return Students.city.toLowerCase().startsWith(inputValue)
            }
            return true
            
        }
        
        
)
setModifiedDataInList(modified)
    
}
function setModifiedDataInList(modifiedArray){
    listElement.innerHTML=modifiedArray.map((v)=>
    "<li><h2> Name:"+v.name
     +" Surname:" +v.Surname
    +"</h2><h3>Age:"+v.Age 
    +"</h3><h4> city:"
    +v.city +"</h4></li>").join("")
}