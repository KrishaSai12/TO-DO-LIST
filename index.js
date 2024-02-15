function add(){
    // geting values 
    let container = document.getElementById("container");
    let input = document.getElementById("data").value;
    let div = document.createElement("div");

    // set classname
    div.className="res";

    // seting the value
    let valArray = [];
    valArray.push(input)
    div.append(valArray);

    // deleting the input field
    document.getElementById('data').value =""

    // deleting the list
    div.addEventListener("click",()=>{
        div.style.textDecoration="line-through"
    })
    div.addEventListener("dblclick",()=>{
        div.remove()
    })
   
    container.append(div);
    
}
