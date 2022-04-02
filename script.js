function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if(formularioAno.value.length == 0 || formularioAno.value > ano ){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formularioAno.value)
        var genero = ''
        var img = document.createElement('img') 
        img.setAttribute('id', 'foto') // possivelmete será mudado para o codigo HTML
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade <10){
                // criança
            } else if (idade >= 10 && idade < 21) {
                //adolecente
            } else if (idade < 50){
                // adulto
            } else {
                // idoso
            }
                  

        } else if (fsex[1].checked){
            genero ='Mulher'
            if (idade >=0 && idade <10){
                // criança
            } else if (idade >= 10 && idade < 21) {
                //adolecente
            } else if (idade < 50){
                // adulto
            } else {
                // idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
}