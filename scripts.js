
function myF(){
    let inp=document.getElementById("input").value;
    document.getElementById('input').value = ''
    let addItem=`<li class="btn btn-light" class="mt-5" ondblclick="d(this)" >${inp} <button class="btn btn-danger" onclick="complete(this)" >Куплено?</button></li>`
    document.getElementById("demo").innerHTML +=addItem}
    
    function d(x){
    var display=""
    if(confirm(`Удалить?`)){
    display="none"
    }else{
    display=""
    }
    x.style.display=display;
    }
    function complete(x){
      x.innerHTML="✓ Куплено"
      x.classList.add("btn-success")
      x.classList.remove("btn-danger")
      x.parentElement.classList.add("btn btn-success")
    }
   
    function rem(){
        let completed=document.getElementsByClassName("btn-success")
        for(let i=0;i<completed.length;i++){
            completed[i].parentElement.style.display="none"
            
            
        }
    }
    
    function deleteAll(){
        if(confirm('Удалить все?')){
            document.getElementById("demo").innerHTML="";
            
        }
        else{}
    }

  setInterval(miF,1)
  
   function miF(){
    let storage=""
let aa=document.getElementById("demo").innerHTML;
if(aa!==""){
    storage=aa
}
else{
storage=localStorage.getItem("items")
}
localStorage.setItem("items",storage);

   }
   document.getElementById("demo").innerHTML=localStorage.getItem('items')

    