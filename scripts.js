/*Добавляет элементы,берет текст из инпута и сразу же очищает его*/
function myF(){
    let inp=document.getElementById("input").value;
    document.getElementById('input').value = ''
    let addItem=`<li class="btn btn-light" class="mt-5" ondblclick="d(this)" >${inp} <button class="btn btn-danger" onclick="complete(this)" >Куплено?</button></li>`
    document.getElementById("demo").innerHTML +=addItem}
    
    
    /*Функция удаляет один элемент , в данном случае после двойного нажатия (ondblclick) и подтверждения*/
    function d(x){
    var display=""
    if(confirm(`Удалить?`)){
    display="none"
    }else{
    display=""
    }
    x.style.display=display;
    }
    
    
    /* Меняет класс c btn-danger на btn-success*/
    function complete(x){
      x.innerHTML="✓ Куплено"
      x.classList.add("btn-success")
      x.classList.remove("btn-danger")
      x.parentElement.classList.add("btn btn-success")
    }
  
  
    /*Удаляет , вернее делает невидимыми все родительские элементы класса btn-success т.е в нашем случае купленные товары*/
    function rem(){
        let completed=document.getElementsByClassName("btn-success")
        for(let i=0;i<completed.length;i++){
            completed[i].parentElement.style.display="none"
            
            
        }
    }
    /*Простенькая функция чтобы удалить все содержимое с id demo*/
    function deleteAll(){
        if(confirm('Удалить все?')){
            document.getElementById("demo").innerHTML="";
            
        }
        else{}
    }
 
 
    /*Функция и нитервал снизу отвечают за Storage API. Усли "items" пустые то автоматически присваивается предыдущее значение элементу с 
 ID demo*/
  setInterval(miStorage,1)
 
   function miStorage(){
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

    