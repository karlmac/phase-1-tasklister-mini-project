document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //document.getElementById("")
  
  const ulElement = document.getElementById("tasks");
  let index = 0;
  
  document.addEventListener("submit", function (e) {
    e.preventDefault();
    const txtValue = document.getElementById("new-task-description").value;
    
    const li = document.createElement("li");
    li.textContent = txtValue;
    index++;
    li.id = "li" + index;
    li.append(createDelBtn(li.id));
    
    if(txtValue == null || txtValue == "") {
      alert("Please enter a valid task"); return;
    }
    ulElement.appendChild(li);
    
    document.getElementById("new-task-description").value = "";

    //console.log(ulElement);
  });
  
  function createDelBtn(remId){
    const btn = document.createElement("button");
    btn.textContent = "X";
    btn.addEventListener("click", () => document.getElementById(remId).remove() );
    return btn;
  }
  
});
