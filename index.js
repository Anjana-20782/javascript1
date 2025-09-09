

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

function addtask(event){
    event.preventDefault();
    let arr=JSON.parse(localStorage.getItem("name")) || [];
    let tname=document.getElementById("taskname").value;
    let tdate=document.getElementById("date").value;
    let taskdata={tname,tdate};
    arr.push(taskdata);
    localStorage.setItem("name",JSON.stringify(arr));

}
