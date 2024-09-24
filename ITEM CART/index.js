
let counter = 0;

const count = document.getElementById("counter-value"); 


document.getElementById('itemForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    const itemInput = document.getElementById("item");
    const itemValue = itemInput.value.trim();
    
   

    if (itemValue !== "") {
        addNewItem(itemValue);
        itemInput.value = ""; 
    }
});


function addNewItem(itemValue){
        
        itemList = document.getElementById("itemList")
        //create list item
        const li = document.createElement("li");
        li.textContent = itemValue
        li.style.border = "3px solid black";
        li.style.width = "300px";
        li.style.height = "30px";
        li.style.listStyleType ="none"
        counter++;
        count.innerHTML = `Item Counter: ${counter}`;

        //create add  button
        const addBtn = document.createElement("button");
        addBtn.innerHTML = "ADD";
        addBtn.type = "button";
        addBtn.style.margin = "10px";
        addBtn.style.marginLeft  ="0px";
        addBtn.addEventListener("click", function(){
            addItem(li);
        });

        //create delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "X"
        deleteBtn.type = "button"
        deleteBtn.addEventListener("click", function(){
            deleteItem();
        });

        itemList.appendChild(li);
        itemList.appendChild(addBtn);
        itemList.appendChild(deleteBtn);
    }




    

    const itemInput = document.getElementById("item");
    const itemValue = itemInput.value.trim();

function addItem(){
    
    counter++;
    count.innerHTML = `Item Counter: ${counter}`;
    
}


function deleteItem(){
    if (counter > 0){
        counter--;
        count.innerHTML = `Item Counter: ${counter}`;
        
    }
    
}

