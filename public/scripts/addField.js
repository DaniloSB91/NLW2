// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botão 
.addEventListener('click', cloneField)


//Executar uma ação
function cloneField() {
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // cloneNode Boolean - true or false - apenas duas opções
    //Duplicar os campos R: Que campos? 

    //Limpar os campos R: Que campos? 
    const fields = newFieldContainer.querySelectorAll('input') // Selecionando todos os campos do tipo input
    
   //para cada campo, limpar | Usar estrutura lógica de repetição de dados.
    fields.forEach(function(field){
        //pega o field do momento e limpa o campo. 
        field.value = ""
    })
    //Colocar na página R: Onde? 
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

 