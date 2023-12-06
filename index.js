
let x = 0;
document.getElementById("c").innerText = x;

function add(val){
    document.getElementById("hello").innerHTML +="<li>"+val+"<input type='button' value='X' onclick='remove()'></li>"
    x=x+1;
    document.getElementById("c").innerText = x;
}
function remove(){
    let listItem = document.getElementsByTagName("li");
    for(let i=0; i < listItem.length; i++){
        listItem[i].onclick=function(){
        this.parentNode.removeChild(this);
    }
}
x = x-1;
document.getElementById("c").innerText = x;
}