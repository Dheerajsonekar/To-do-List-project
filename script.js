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
        saveData();
    }
    inputBox.value = '';
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function getData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

getData();