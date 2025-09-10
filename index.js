

// document.getElementById("search").addEventListener("keyup",()=>{

//     let arr=JSON.parse(localStorage.getItem("search"));
//     let value=document.getElementById("search").value;
//     arr.forEach(element => {
        
//         if(element==value)
//         {

//         }
//         else{


//         }
//     });
    
// });

  



let arr=null;
let editIndex=null;
showData();
function addtask(event) {
    event.preventDefault();
    let tasks = JSON.parse(localStorage.getItem("name")) || [];

    let tname = document.getElementById("taskname").value;
    let tdate = document.getElementById("date").value;

    if (editIndex !== null) {
      
        tasks[editIndex].tname = tname;
        tasks[editIndex].tdate = tdate;
        editIndex = null;
    } else {
  
        let taskdata = { tname: tname, tdate: tdate, status: true };
        tasks.unshift(taskdata);
    }

    localStorage.setItem("name", JSON.stringify(tasks));
    showData();
    closetask();
}


function showData() {
    arr = JSON.parse(localStorage.getItem("name")) || [];

    let filter = document.getElementById("select")?.value || "all";  
    let HTML = "";

    arr.forEach((taskdata, index) => {
        // 🔹 apply filter
        if (
            filter === "all" ||
            (filter === "completed" && taskdata.status) ||
            (filter === "pending" && !taskdata.status)
        ) {
            HTML += `
                <tr>
                    <td><input type="checkbox" ${taskdata.status ? "checked" : ""} onchange="handleChange(${index})"></td>
                    <td><span style="text-decoration:${taskdata.status ? "line-through" : "none"}">${taskdata.tname}</span></td>
                    <td>${taskdata.tdate}</td>
                    <td>${taskdata.status ? "Completed" : "Pending"}</td>
                    <td>
                        <button class="editbtn" onclick="editData(${index})">Edit</button>
                        <button class="deletebtn" onclick="deleteData(${index})">Delete</button>
                    </td>
                </tr>`;
        }
    });

    document.getElementById("tablebody").innerHTML = HTML || "<tr><td colspan='5'>No tasks found</td></tr>";
}


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


function deleteData(index) {
  const shouldDelete = confirm("Are you sure you want to delete this task?");
  if (shouldDelete) {
    let arr = JSON.parse(localStorage.getItem("name")) || [];
    arr.splice(index, 1);
    localStorage.setItem("name", JSON.stringify(arr));
    showData();
  }
}

function editData(index) {
    let tasks = JSON.parse(localStorage.getItem("name"));
    document.getElementById("taskname").value = tasks[index].tname;
    document.getElementById("date").value = tasks[index].tdate;

    editIndex = index; 
    document.getElementById("popup").style.display = "block";
    popup = true;

    
    document.querySelector("#popup h1").innerText = "Edit Task";
}



// function searchTask() {
//     let query = document.getElementById("search").value.toLowerCase();
//     let arr = JSON.parse(localStorage.getItem("name")) || [];
//     let suggestionBox = document.getElementById("suggestions");

//     if (query === "") {
//         suggestionBox.style.display = "none";
//         return;
//     }

//     let matches = arr.filter(task => task.tname.toLowerCase().includes(query));

//     if (matches.length > 0) {
//         suggestionBox.innerHTML = matches
//             .map((task, index) => `<div onclick="selectSuggestion('${task.tname}')">${task.tname}</div>`)
//             .join("");
//         suggestionBox.style.display = "block";
//     } else {
//         suggestionBox.innerHTML = "<div>No matches found</div>";
//         suggestionBox.style.display = "block";
//     }
// }

// // 🔹 When user clicks a suggestion
// function selectSuggestion(value) {
//     document.getElementById("search").value = value;
//     document.getElementById("suggestions").style.display = "none";

//     // optional: filter table results directly
//     filterTable(value);
// }

// // 🔹 Filter tasks in table
// function filterTable(value) {
//     let arr = JSON.parse(localStorage.getItem("name")) || [];
//     let HTML = "";

//     arr.forEach((taskdata, index) => {
//         if (taskdata.tname.toLowerCase().includes(value.toLowerCase())) {
//             HTML += `
//                 <tr>
//                     <td><input type="checkbox" ${taskdata.status ? "checked" : ""} onchange="handleChange(${index})"></td>
//                     <td><span style="text-decoration:${taskdata.status ? "line-through" : "none"}">${taskdata.tname}</span></td>
//                     <td>${taskdata.tdate}</td>
//                     <td>${taskdata.status ? "Completed" : "Pending"}</td>
//                     <td>
//                         <button class="editbtn" onclick="editData(${index})">Edit</button>
//                         <button class="deletebtn" onclick="deleteData(${index})">Delete</button>
//                     </td>
//                 </tr>`;
//         }
//     });

//     document.getElementById("tablebody").innerHTML = HTML || "<tr><td colspan='5'>No tasks found</td></tr>";
// }

