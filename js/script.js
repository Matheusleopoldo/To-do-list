
function adicionaTarefa(){
    let tarefa = document.querySelector("input").value;
    
    let li = document.createElement("li");

    if (tarefa == '') {
        alert('digite algum valor')
        return
    } else
    {
        li.innerHTML = tarefa + "<span onclick='removerTarefa(this)'>❌</span>"

    document.querySelector("ul").appendChild(li)
    tarefa = "";
    document.querySelector('input').value = ''
    }

}


function removerTarefa(li){
    li.parentElement.remove();
}



