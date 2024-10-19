const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value ===''){
        alert('Add a Task to Proceed');
    }
    else{
        
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        let span = document.createElement('span');
        span.innerHTML='\u00d7'
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    inputBox.value = '';
}