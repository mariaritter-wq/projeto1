if (!localStorage.getItem('usuarios')){
    const bancoInicial = [
        { usuario: 'admin', senha: '123'},
        { usuario: 'mafer', senha: '1322'},
    ];
    localStorage.setItem('usuarios', JSON.stringify(bancoInicial));
}

document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();
    const usuarioDigitado = document.getElementById('usuario').value;
    const senhaDigitada = document.getElementById('senha').value;

    document.getElementById('form').addEventListener('submit', function(e){

        const usuarios = JSON.parse(localStorage.getItem('usuarios'));
    
        const usuarioEncontrado = usuarios.find(function(user){
            return user.usuario === usuarioDigitado && user.senha === senhaDigitada;
        });
    }
    
        if (usuarioEncontrado){
            localStorage.setItem('usuarioLogado', usuarioDigitado);
            window.location.href = 'home.html';
        }else{
            alert('Usuario ou senha incorreta');
        }
    
    });