

// document.getElementById("search").addEventListener("keyup",()=>{

//     let arr=JSON.parse(localStorage.getItem("search"));
//     let value=document.getElementById("search").value;
//     arr.array.forEach(element => {
        
//         if(element==value)
//         {

//         }
//         else{


//         }
//     });
    
// });
let arr=null;

showData();
function addtask(event){
    event.preventDefault();
    let arr=JSON.parse(localStorage.getItem("name")) || [];
    let tname=document.getElementById("taskname").value;
    let tdate=document.getElementById("date").value;
    let taskdata={tname:tname,tdate:tdate,status:false};
    arr.push(taskdata);
    localStorage.setItem("name",JSON.stringify(arr));
     showData();
}

function showData(){
     arr = JSON.parse(localStorage.getItem("name"));
    let HTML = "";
    
    arr.forEach((taskdata,index) => {
        let statusname="";
       
        HTML += `
                  <tr>
                    <td><input type="checkbox" ${taskdata.status?"checked":""} onchange="handleChange(${index})" name="" id="nam${index}"></td>
                    <td><span style="text-decoration:${taskdata.status?"line-through":"none"}">${taskdata.tname}</span></td>
                   <td>${taskdata.tdate}</td>
                     <td>${taskdata.status?"completed":"pending"}</td>
                    <td><button class="editbtn" onclick="editData(${index})">Edit</button> <button class="deletebtn" onclick="deleteData(${index})">Delete</button></td>
                  </tr>   
                `});
    let table = document.getElementById("tablebody");
    table.innerHTML = HTML;

  

};


function handleChange(index){
console.log(arr[index].status);
arr[index].status=!arr[index].status;
localStorage.setItem("name",JSON.stringify(arr))
showData()
}

let popup = false;
function addshow(){

    popup=!popup;
    popup?document.getElementById("popup").style.display="block":document.getElementById("popup").style.display="none"
    

}

function closetask() {
  document.getElementById("popup").style.display = "none";
  popup = false;
}


function deleteData(index){

  let arr=JSON.parse(localStorage.getItem("name"));
  arr.splice(index,1)
   localStorage.setItem("name",JSON.stringify(arr));
   showData();

}

function editData(index){

    let arr=JSON.parse(localStorage.getItem("name"));  
    let value=prompt("editshow",arr[index]);
    arr[index]=value;
     localStorage.setItem("name",JSON.stringify(arr));
    showData();
}

function editData(){

    popup=!popup;
    popup?document.getElementById("popup").style.display="block":document.getElementById("popup").style.display="none"
   
}
