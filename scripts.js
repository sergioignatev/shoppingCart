function myF(){
    let inp=document.getElementById("input").value;
    document.getElementById('input').value = ''
    document.getElementById("demo").innerHTML +=`<li class="btn btn-light" class="mt-5" ondblclick="d(this)" >${inp} <button class="btn btn-danger" onclick="complete(this)" >Куплено?</button></li><br>`}
    
    function d(x){
    var display=""
    if(confirm(`Удалить?`)){
    display="none"
    }else{
    display=""
    }
    
    
    x.style.display=display;
    x.style.height="10px"
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
            document.getElementById("demo").innerHTML=""
        }
        else{}
    }