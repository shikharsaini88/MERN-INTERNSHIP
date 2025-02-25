
// var listOFQuestions =JSON.parse(localStorage.getItem("questionslist1"))??[] 
// var anss=[]
// //  showStudentData()
// function savequestion(){
//     let que=document.getElementById("que").value
//     let option1=document.getElementById("option1").value
//     let option2=document.getElementById("option2").value
//     let option3=document.getElementById("option3").value
//     let option4=document.getElementById("option4").value
//     let answer=document.getElementById("answer").value
//     var questionObject1={
//         question: que,
//          a:option1,
//          b:option2,
//          c:option3,
//          d:option4,
//         answer:answer

//     }
//     listOFQuestions.push(questionObject1)
//     localStorage.setItem("std",JSON.stringify(listOFQuestions))
//      showStudentData()
// }
// function showStudentData(){
//     listOFQuestions=JSON.parse(localStorage.getItem("std")) 
//     document.getElementById("question-data").innerHTML=listOFQuestions.map((student) =>`<div style="box-shadow: 1px 1px 5px 2px gray;
// padding: 20px; margin: 20px">
// <h1> Q:${student.question}</h1>
//     <h2>A: ${student.a}</h2>
//     <h2>B: ${student.b}</h2>
//     <h2>C: ${student.c}</h2>
//     <h2>D: ${student.d}</h2>
//     <h2> Ans:${student.answer}</h2>   
//     </div>`
// ).join("")
// }
var registerdata1=[]
var anss=[]
// showStudentData()
function savequestion(){
     
    let que=document.getElementById("que").value
        let option1=document.getElementById("option1").value
        let option2=document.getElementById("option2").value
        let option3=document.getElementById("option3").value
        let option4=document.getElementById("option4").value
        let answer=document.getElementById("answer").value
        var questionObject1={
            question: que,
             a:option1,
             b:option2,
             c:option3,
             d:option4,
            answer:answer}
    // registerdata.push(registerObject)
    // localStorage.setItem("registerationlist",JSON.stringify(registerdata))
     
    

  
   
    
    registerdata1.push(questionObject1)
    localStorage.setItem("sss",JSON.stringify(questionObject1))
    // showStudentData()
    
        }function showStudentData(){
                 registerdata1=JSON.parse(localStorage.getItem("sss")) 
                 document.getElementById("question-data").innerHTML=registerdata1.map((student) =>`<div style="box-shadow: 1px 1px 5px 2px gray;
             padding: 20px; margin: 20px">
             <h1> Q:${student.question}</h1>
                 <h2>A: ${student.a}</h2>
                 <h2>B: ${student.b}</h2>
                 <h2>C: ${student.c}</h2>
                <h2>D: ${student.d}</h2>
             <h2> Ans:${student.answer}</h2>   
                 </div>`
             ).join("")
        }




function showTest(){
    document.body.innerHTML=registerdata1.map((student, i) =>`<div style="box-shadow: 1px 1px 6px 3px gray;
    padding: 15px; margin: 15px">
    <h1>Question: ${student.question}</h1>
  <input type="radio" onclick="selectOption(${i},'${student.a}')" name="option${i}"/>A. ${student.a}
  <input type="radio" onclick="selectOption(${i},'${student.b}')" name="option${i}"/>B. ${student.b}
  <input type="radio" onclick="selectOption(${i},'${student.c}')" name="option${i}"/>C. ${student.c}
   <input type="radio" onclick="selectOption(${i},'${student.d}')" name="option${i}"/>D. ${student.d}
                         
        </div>`
    )
    .join("")
     +"<button style='margin-top:13px'  onclick='submit()'>submit</button>"
    }

 function selectOption(index, ansValue){
    anss[index]=ansValue
    console.log(anss)
 }

 
 function submit()
 {
    let score= 0;

     console.log(anss,registerdata1)
    for(var i=0; i<registerdata1.length;i++){
        if(anss[i]==registerdata1[i].answer){
            score++
        }
    }
    document.body.innerHTML="<h1>"+score+"</h1>"
   
 }

 