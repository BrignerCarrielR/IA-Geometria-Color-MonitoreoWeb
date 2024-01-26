const firebaseConfig = {
    apiKey: "AIzaSyBOBbO-9E12tiLlzFUzZuQCZNJspqZEOdg",
    authDomain: "clasificador-de-figuras.firebaseapp.com",
    databaseURL: "https://clasificador-de-figuras-default-rtdb.firebaseio.com",
    projectId: "clasificador-de-figuras",
    storageBucket: "clasificador-de-figuras.appspot.com",
    messagingSenderId: "274600799552",
    appId: "1:274600799552:web:7afa35df652aaa3bb35ea5"
};

firebase.initializeApp(firebaseConfig);

const datosref = firebase.database().ref('Datos')

window.addEventListener('DOMContentLoaded', async (e) =>
    await datosref.on('value', (snapshot) => {
        const datosData = snapshot.val();

        console.log(datosData);
        // guadar datos en una arreglo
        const datosArray = Object.values(datosData);
        console.log(datosArray);
        // guardar datos
        const Color = datosArray[0];
        const ContCirculoAmarillo = datosArray[1];
        const ContCirculoRojo = datosArray[2];
        const ContCirculoVerde = datosArray[3];
        const ContCuadradoAmarillo = datosArray[4];
        const ContCuadradoRojo = datosArray[5];
        const ContCuadradoVerde = datosArray[6];
        const ContTrianguloAmarillo = datosArray[7];
        const ContTrianguloRojo = datosArray[8];
        const ContTrianguloVerde = datosArray[9];
        const Figura = datosArray[10];


        console.log("Color:", Color);
        console.log("ContCirculoAmarillo:", ContCirculoAmarillo);
        console.log("ContCirculoRojo:", ContCirculoRojo);
        console.log("ContCirculoVerde:", ContCirculoVerde);
        console.log("ContCuadradoAmarillo:", ContCuadradoAmarillo);
        console.log("ContCuadradoRojo:", ContCuadradoRojo);
        console.log("ContCuadradoVerde:", ContCuadradoVerde);
        console.log("ContTrianguloAmarillo:", ContTrianguloAmarillo);
        console.log("ContTrianguloRojo:", ContTrianguloRojo);
        console.log("ContTrianguloVerde:", ContTrianguloVerde);
        console.log("Figura:", Figura);

        const colorCirculo = document.getElementById('colorCirculo');
        const colorCuadrado = document.getElementById('colorCuadrado');
        const colorTriangulo = document.getElementById('colorTriangulo');


        document.getElementById('ContTriRo').innerText = ContTrianguloRojo;
        document.getElementById('ContTriVe').innerText = ContTrianguloVerde;
        document.getElementById('ContTriAm').innerText = ContTrianguloAmarillo;
        document.getElementById('ContCirRo').innerText = ContCirculoRojo;
        document.getElementById('ContCirVe').innerText = ContCirculoVerde;
        document.getElementById('ContCirAm').innerText = ContCirculoAmarillo;
        document.getElementById('ContCuaRo').innerText = ContCuadradoRojo;
        document.getElementById('ContCuaVe').innerText = ContCuadradoVerde;
        document.getElementById('ContCuaAm').innerText = ContCuadradoAmarillo;

        const genPDF = document.getElementById('genPDF');

        genPDF.addEventListener('click', function () {
            var doc = new jspdf.jsPDF();

            // nabvar
            doc.setLineWidth(30);
            doc.setDrawColor(28, 50, 71); // color 
            doc.line(0, 1, 300, 1); // Posicion

            // sub nabvar
            doc.setLineWidth(5);
            doc.setDrawColor(254, 153, 0); // color 
            doc.line(0, 18, 300, 18); // Posicion

            // Título
            doc.setFont('helvetica', 'italic');
            doc.setFontSize(15);
            doc.setTextColor(255, 255, 255); // color
            doc.text(5, 10, 'CLASIFICADO DE FIGURAS Y COLORES');


            // descripcion
            doc.setLineWidth(12);
            doc.setDrawColor(254, 153, 0); // color 
            doc.line(20, 41, 21, 41); // Posicion

            doc.setFont('helvetica', 'italic');
            doc.setFontSize(18);
            doc.setTextColor(0, 0, 0); // color
            doc.text(25, 40, 'Información');

            doc.setFont('helvetica', 'italic');
            doc.setFontSize(10);
            doc.setTextColor(0, 0, 0); // color
            doc.text(25, 47, 'Información relevante de los resultados.');

            // Línea de separación
            doc.setLineWidth(0.5);
            doc.setDrawColor(0, 0, 0); // Negro
            doc.line(20, 50, 190, 50);

            // Contenido
            doc.setFontSize(14);
            doc.setFont('helvetica', 'italic');
            doc.setTextColor(0, 0, 0); // Negro

            // Triángulo
            doc.setLineWidth(6);
            doc.setDrawColor(28, 50, 71); // color 
            doc.line(30, 63, 31, 63); // Posicion

            doc.setFontSize(15);
            doc.text(35, 65, 'Triángulo');
            doc.setFontSize(14);
            doc.text(45, 75, 'Rojo: ' + ContTrianguloRojo);
            doc.text(45, 85, 'Amarillo: ' + ContTrianguloAmarillo);
            doc.text(45, 95, 'Verde: ' + ContTrianguloVerde);

            // Círculo
            doc.setLineWidth(6);
            doc.setDrawColor(28, 50, 71); // color 
            doc.line(30, 113, 31, 113); // Posicion

            doc.setFontSize(15);
            doc.text(35, 115, 'Círculo');
            doc.setFontSize(14);
            doc.text(45, 125, 'Rojo: ' + ContCirculoRojo);
            doc.text(45, 135, 'Amarillo: ' + ContCirculoAmarillo);
            doc.text(45, 145, 'Verde: ' + ContCirculoVerde);


            // Cuadrado
            doc.setLineWidth(6);
            doc.setDrawColor(28, 50, 71); // color 
            doc.line(30, 163, 31, 163); // Posicion

            doc.setFontSize(15);
            doc.text(35, 165, 'Cuadrado');
            doc.setFontSize(14);
            doc.text(45, 175, 'Rojo: ' + ContCuadradoRojo);
            doc.text(45, 185, 'Amarillo: ' + ContCuadradoAmarillo);
            doc.text(45, 195, 'Verde: ' + ContCuadradoVerde);


            // Calcular figura con mayor número de apariciones
            let figuraMayor = '';
            let maxApariciones = -1;

            const figuras = ['Circulo', 'Cuadrado', 'Triangulo'];
            for (const figura of figuras) {
                const apariciones = eval(`Cont${figura}Amarillo + Cont${figura}Rojo + Cont${figura}Verde`);

                if (apariciones > maxApariciones) {
                    maxApariciones = apariciones;
                    figuraMayor = figura;
                }
            }

            // Calcular figura con menor número de apariciones
            let figuraMenor = '';
            let minApariciones = Infinity;

            for (const figura of figuras) {
                const apariciones = eval(`Cont${figura}Amarillo + Cont${figura}Rojo + Cont${figura}Verde`);

                if (apariciones < minApariciones) {
                    minApariciones = apariciones;
                    figuraMenor = figura;
                }
            }

            // Calcular color con mayor número de apariciones
            let colorMayor = '';
            let maxColorApariciones = -1;

            const colores = ['Amarillo', 'Rojo', 'Verde'];
            for (const color of colores) {
                const apariciones = eval(`ContCirculo${color} + ContCuadrado${color} + ContTriangulo${color}`);

                if (apariciones > maxColorApariciones) {
                    maxColorApariciones = apariciones;
                    colorMayor = color;
                }
            }

            // Calcular color con menor número de apariciones
            let colorMenor = '';
            let minColorApariciones = Infinity;

            for (const color of colores) {
                const apariciones = eval(`ContCirculo${color} + ContCuadrado${color} + ContTriangulo${color}`);

                if (apariciones < minColorApariciones) {
                    minColorApariciones = apariciones;
                    colorMenor = color;
                }
            }

            // Calcular total de objetos detectados
            const total = ContCirculoAmarillo + ContCirculoRojo + ContCirculoVerde +
                ContCuadradoAmarillo + ContCuadradoRojo + ContCuadradoVerde +
                ContTrianguloAmarillo + ContTrianguloRojo + ContTrianguloVerde;

            // Linea de Resumen
            doc.setLineWidth(6);
            doc.setDrawColor(254, 153, 0); // color 
            doc.line(30, 208, 31, 208); // Posicion

            doc.text(35, 210, 'Resumen...');
            doc.setFontSize(12);
            doc.text(45, 220, 'La figura con mayor número de apariciones fue: ' + figuraMayor);
            doc.text(45, 225, 'La figura con menor número de apariciones fue: ' + figuraMenor);
            doc.text(45, 230, 'El color con mayor número de apariciones fue: ' + colorMayor);
            doc.text(45, 235, 'El color con menor número de apariciones fue: ' + colorMenor);
            doc.text(45, 240, 'Total de objetos detectados fue: ' + total);


            // footer
            doc.setLineWidth(20);
            doc.setDrawColor(228, 237, 245); // color 
            doc.line(0, 290, 300, 290); // Posicion

            // Linea de autores
            doc.setFont('helvetica', 'italic');
            doc.setFontSize(10);
            doc.text(60, 290, 'Sistema de clasificador de figuras y colores -  Grupo 1 y 7');



            // Get the data URI of the PDF
            var pdfDataUri = doc.output('datauristring');

            // Open the PDF in a new tab
            var newTab = window.open();
            newTab.document.write('<iframe width="100%" height="100%" src="' + pdfDataUri + '"></iframe>');
        })
        // Circulo
        if (Color === 'rojo' && Figura === 'circulo') {
            const colorIndex = ['rojo', 'verde', 'amarillo'].indexOf(Color);
            const totalColors = 3;
            const degreesPerColor = 360 / totalColors;
            const rotationAngle = (360 - (colorIndex * degreesPerColor) - 60) % 360;

            colorCirculo.style.transform = `rotate(${rotationAngle}deg)`;
        }
        if (Color === 'verde' && Figura === 'circulo') {
            const colorIndex = ['rojo', 'verde', 'amarillo'].indexOf(Color);
            const totalColors = 3;
            const degreesPerColor = 360 / totalColors;
            const rotationAngle = (360 - (colorIndex * degreesPerColor) - 60) % 360;

            colorCirculo.style.transform = `rotate(${rotationAngle}deg)`;
        }
        if (Color === 'amarillo' && Figura === 'circulo') {
            const colorIndex = ['rojo', 'verde', 'amarillo'].indexOf(Color);
            const totalColors = 3;
            const degreesPerColor = 360 / totalColors;
            const rotationAngle = (360 - (colorIndex * degreesPerColor) - 60) % 360;

            colorCirculo.style.transform = `rotate(${rotationAngle}deg)`;
        }

        // cuadrado
        if (Color === 'rojo' && Figura === 'cuadrado') {
            const colorIndex = ['rojo', 'verde', 'amarillo'].indexOf(Color);
            const totalColors = 3;
            const degreesPerColor = 360 / totalColors;
            const rotationAngle = (360 - (colorIndex * degreesPerColor) - 60) % 360;

            colorCuadrado.style.transform = `rotate(${rotationAngle}deg)`;
        }
        if (Color === 'verde' && Figura === 'cuadrado') {
            const colorIndex = ['rojo', 'verde', 'amarillo'].indexOf(Color);
            const totalColors = 3;
            const degreesPerColor = 360 / totalColors;
            const rotationAngle = (360 - (colorIndex * degreesPerColor) - 60) % 360;

            colorCuadrado.style.transform = `rotate(${rotationAngle}deg)`;
        }
        if (Color === 'amarillo' && Figura === 'cuadrado') {
            const colorIndex = ['rojo', 'verde', 'amarillo'].indexOf(Color);
            const totalColors = 3;
            const degreesPerColor = 360 / totalColors;
            const rotationAngle = (360 - (colorIndex * degreesPerColor) - 60) % 360;

            colorCuadrado.style.transform = `rotate(${rotationAngle}deg)`;
        }

        // triangulo
        if (Color === 'rojo' && Figura === 'triangulo') {
            const colorIndex = ['rojo', 'verde', 'amarillo'].indexOf(Color);
            const totalColors = 3;
            const degreesPerColor = 360 / totalColors;
            const rotationAngle = (360 - (colorIndex * degreesPerColor) - 60) % 360;

            colorTriangulo.style.transform = `rotate(${rotationAngle}deg)`;
        }
        if (Color === 'verde' && Figura === 'triangulo') {
            const colorIndex = ['rojo', 'verde', 'amarillo'].indexOf(Color);
            const totalColors = 3;
            const degreesPerColor = 360 / totalColors;
            const rotationAngle = (360 - (colorIndex * degreesPerColor) - 60) % 360;

            colorTriangulo.style.transform = `rotate(${rotationAngle}deg)`;
        }
        if (Color === 'amarillo' && Figura === 'triangulo') {
            const colorIndex = ['rojo', 'verde', 'amarillo'].indexOf(Color);
            const totalColors = 3;
            const degreesPerColor = 360 / totalColors;
            const rotationAngle = (360 - (colorIndex * degreesPerColor) - 60) % 360;

            colorTriangulo.style.transform = `rotate(${rotationAngle}deg)`;
        }

        var imagen = document.getElementById('imagen');
        let imagemHTML = '';
        // imagen Figura
        if (Figura == 'triangulo') {
            imagemHTML += ` <img class="figura" src="img/triangulo.png" alt=""> <h5 class='fw-bold'>Triangulo</h5>`;
            imagen.innerHTML = imagemHTML
        }
        if (Figura == 'circulo') {
            imagemHTML += `<img class="figura" src="img/circulo.png" alt=""> <h5 class='fw-bold'>Circulo</h5>`;
            imagen.innerHTML = imagemHTML
        }

        if (Figura == 'cuadrado') {
            imagemHTML += `<img class="figura" src="img/cuadrado.png" alt=""> <h5 class='fw-bold'>Cuadrado</h5>`;
            imagen.innerHTML = imagemHTML
        }

    })

)

