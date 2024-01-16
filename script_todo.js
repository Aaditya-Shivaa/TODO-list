const inputbox = document.getElementById('input');
const list = document.getElementById('listcontainer');

function addtask(){
    if (inputbox.value == ''){
        alert('Add some task!')
    }
    else{
        let li = document.createElement('li');
        li.innerHTML=inputbox.value;
        list.appendChild(li)
        
        let cross=document.createElement('span')
        cross.innerHTML='\u00d7'
        li.appendChild(cross)

    }  
    savedata();
}

listcontainer.addEventListener("click",eventt,false)

function eventt(e){
    if(e.target.tagName=='LI'){
        e.target.classList.toggle("listitem");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}

function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showdata(){
    listcontainer.innerHTML = localStorage.getItem("data")
}
showdata();

