//let nomeUsuario = "fds"

const redesSociais = {
    github: "andrealvescorreia",
    twitter: "notc_andre",
    youtube: "AndrezitoBuster",
    facebook: "andre.alves.correia.1",
    instagram: "correiaandrealves"
}

// muda os links visiveis na exibição da página, acessando o DOM.
function mudarLinksRedesSociais(){
    for(let li of socialLinks.children){
        const social = li.getAttribute('class')//pega a classe da li ('twitter', 'youtube', etc.)

        //           a.href
        li.children[0].href = `https://${social}.com/${redesSociais[social]}`

    }
}


function getInfoPerfilGitHub(){


    //          `Template String`  
    const url = `https://api.github.com/users/${redesSociais.github}`
    //alert(url)

    /*Promise*/

    /*Acessa a api do github.*/
    fetch(url)
    .then(resposta => resposta.json() )
    .then(dados => {

        tituloNomeUsuario.textContent = `${dados.name } - DoWhile 2021`//titulo da pagina com o nome do programador
        cabecalhoNomeUsuario.textContent = dados.name                  //heading com o nome do programador


        bioUsuario.textContent = dados.bio       //bio do programador
        /*é equivalente a:*/
        //document.getElementById("bioUsuario").textContent = dados.bio

        linkGithub.href = dados.html_url         //url do github do programador
        nicknameGitHub.textContent = dados.login //nickname do programador
        fotoUsuario.src = dados.avatar_url       //foto do programador

    })
    //response
    //o primeiro .then() passa a 'resposta', em formato JSON, para o segundo .then(), que guarda os dados em 'dados'.
    
    //ARROW FUNCTION => (anônima)

    /*
    //EXEMPLOS:

    argumento => {
        //apenas 1 argumento.
    }
    
    (argumento1, argumento2) => {
        //dois argumentos (ou mais).
    }

    () => {
        //nenhum argumento.
    }

    */

}

mudarLinksRedesSociais()
getInfoPerfilGitHub()