 alert("Fabio");
 var titulo = document.getElementById('titlePage');
        reescreverTitulo(titulo);
        setInterval(function () {
            reescreverTitulo(titulo);
        }, 7000);

        function reescreverTitulo(elemento) {
            const textoArray = elemento.innerHTML.split('');
            elemento.innerHTML = '';
            textoArray.forEach((letra, i) => {
                setTimeout(() => elemento.innerHTML += letra, 75 * i);
            });
        }