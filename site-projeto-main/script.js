document.addEventListener('DOMContentLoaded', function() {
    const btnContraste = document.getElementById('btnContraste');
    const btnAumentar = document.getElementById('btnAumentarFonte');
    const btnDiminuir = document.getElementById('btnDiminuirFonte');
    
    let tamanhoFonte = 100; 

   
    if (btnContraste) {
        btnContraste.addEventListener('click', function() {
            document.body.classList.toggle('alto-contraste');
        });
    }

    
    if (btnAumentar) {
        btnAumentar.addEventListener('click', function() {
            if (tamanhoFonte < 160) { 
                tamanhoFonte += 10;
                document.documentElement.style.fontSize = tamanhoFonte + '%';
            }
        });
    }

  
    if (btnDiminuir) {
        btnDiminuir.addEventListener('click', function() {
            if (tamanhoFonte > 80) { 
                tamanhoFonte -= 10;
                document.documentElement.style.fontSize = tamanhoFonte + '%';
            }
        });
    }
});