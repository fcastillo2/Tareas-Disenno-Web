"use strict";

function mostrarResultado(id, contenido, tipo = "") {
    const contenedor = document.getElementById(id);
    contenedor.className = `result ${tipo}`.trim();
    contenedor.innerHTML = contenido;
}

document.getElementById("btnEdad").addEventListener("click", () => {
    const edad = Number(document.getElementById("edad").value);

    if (!Number.isFinite(edad) || edad < 0) {
        mostrarResultado("resultadoEdad", "Ingrese una edad válida.", "error");
    } else if (edad < 12) {
        mostrarResultado("resultadoEdad", "Clasificación: niñez.", "success");
    } else if (edad < 18) {
        mostrarResultado("resultadoEdad", "Clasificación: adolescencia.", "success");
    } else if (edad < 65) {
        mostrarResultado("resultadoEdad", "Clasificación: persona adulta.", "success");
    } else {
        mostrarResultado("resultadoEdad", "Clasificación: persona adulta mayor.", "success");
    }
});

document.getElementById("btnDia").addEventListener("click", () => {
    const dia = Number(document.getElementById("dia").value);
    let mensaje;

    switch (dia) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            mensaje = "Es un día entre semana.";
            break;
        case 6:
        case 7:
            mensaje = "Es fin de semana.";
            break;
        default:
            mensaje = "Día no válido.";
    }

    mostrarResultado("resultadoDia", mensaje, "success");
});

document.getElementById("btnDividir").addEventListener("click", () => {
    try {
        const dividendo = Number(document.getElementById("dividendo").value);
        const divisor = Number(document.getElementById("divisor").value);

        if (!Number.isFinite(dividendo) || !Number.isFinite(divisor)) {
            throw new TypeError("Los dos valores deben ser números.");
        }

        if (divisor === 0) {
            throw new Error("No es posible dividir entre cero.");
        }

        mostrarResultado(
            "resultadoDivision",
            `Resultado: ${dividendo} ÷ ${divisor} = ${dividendo / divisor}`,
            "success"
        );
    } catch (error) {
        mostrarResultado(
            "resultadoDivision",
            `<strong>${error.name}:</strong> ${error.message}`,
            "error"
        );
    }
});

document.getElementById("btnFor").addEventListener("click", () => {
    const numero = Number(document.getElementById("numeroTabla").value);
    let elementos = "<ul>";

    for (let i = 1; i <= 10; i++) {
        elementos += `<li>${numero} × ${i} = ${numero * i}</li>`;
    }

    elementos += "</ul>";
    mostrarResultado("resultadoFor", elementos, "success");
});

document.getElementById("btnWhile").addEventListener("click", () => {
    const limite = Number(document.getElementById("limiteWhile").value);

    if (!Number.isInteger(limite) || limite < 1 || limite > 30) {
        mostrarResultado("resultadoWhile", "Use un entero entre 1 y 30.", "error");
        return;
    }

    let contador = 1;
    const numeros = [];

    while (contador <= limite) {
        numeros.push(contador);
        contador++;
    }

    mostrarResultado("resultadoWhile", `Conteo: ${numeros.join(", ")}`, "success");
});

document.getElementById("btnDoWhile").addEventListener("click", () => {
    let numero = 10;
    const valores = [];

    do {
        valores.push(numero);
        numero++;
    } while (numero < 5);

    mostrarResultado(
        "resultadoDoWhile",
        `El bloque se ejecutó ${valores.length} vez. Valor procesado: ${valores[0]}.`,
        "success"
    );
});

function calcularArea(base, altura) {
    return base * altura;
}

document.getElementById("btnArea").addEventListener("click", () => {
    const base = Number(document.getElementById("baseRectangulo").value);
    const altura = Number(document.getElementById("alturaRectangulo").value);

    if (base <= 0 || altura <= 0) {
        mostrarResultado("resultadoArea", "La base y la altura deben ser mayores que cero.", "error");
        return;
    }

    const area = calcularArea(base, altura);
    mostrarResultado("resultadoArea", `Área del rectángulo: ${area} unidades².`, "success");
});

document.getElementById("btnOperadores").addEventListener("click", () => {
    const a = Number(document.getElementById("operadorA").value);
    const b = Number(document.getElementById("operadorB").value);

    // Asignación
    let copiaA = a;
    copiaA += 1;

    // Comparación, aritmética y lógica
    const salida = `
        <ul>
            <li><strong>Asignación:</strong> a = ${a}; después de a += 1, vale ${copiaA}.</li>
            <li><strong>Suma:</strong> ${a + b}</li>
            <li><strong>Resta:</strong> ${a - b}</li>
            <li><strong>Multiplicación:</strong> ${a * b}</li>
            <li><strong>División:</strong> ${b !== 0 ? a / b : "No definida"}</li>
            <li><strong>Módulo:</strong> ${b !== 0 ? a % b : "No definido"}</li>
            <li><strong>Comparación a === b:</strong> ${a === b}</li>
            <li><strong>Comparación a &gt; b:</strong> ${a > b}</li>
            <li><strong>Lógico (a &gt; 0 &amp;&amp; b &gt; 0):</strong> ${a > 0 && b > 0}</li>
            <li><strong>Lógico (a === 0 || b === 0):</strong> ${a === 0 || b === 0}</li>
        </ul>
    `;

    mostrarResultado("resultadoOperadores", salida, "success");
});

document.getElementById("btnMath").addEventListener("click", () => {
    const numero = Number(document.getElementById("numeroMath").value);

    if (!Number.isFinite(numero)) {
        mostrarResultado("resultadoMath", "Ingrese un número válido.", "error");
        return;
    }

    const salida = `
        <ul>
            <li><strong>Number.isInteger:</strong> ${Number.isInteger(numero)}</li>
            <li><strong>Con dos decimales:</strong> ${numero.toFixed(2)}</li>
            <li><strong>Math.round:</strong> ${Math.round(numero)}</li>
            <li><strong>Math.floor:</strong> ${Math.floor(numero)}</li>
            <li><strong>Math.ceil:</strong> ${Math.ceil(numero)}</li>
            <li><strong>Math.sqrt:</strong> ${numero >= 0 ? Math.sqrt(numero).toFixed(3) : "No real"}</li>
            <li><strong>Math.pow(numero, 2):</strong> ${Math.pow(numero, 2)}</li>
            <li><strong>Aleatorio de 1 a 10:</strong> ${Math.floor(Math.random() * 10) + 1}</li>
        </ul>
    `;

    mostrarResultado("resultadoMath", salida, "success");
});

document.getElementById("btnFecha").addEventListener("click", () => {
    const ahora = new Date();

    const salida = `
        <ul>
            <li><strong>Fecha completa:</strong> ${ahora.toLocaleString("es-CR")}</li>
            <li><strong>Año:</strong> ${ahora.getFullYear()}</li>
            <li><strong>Mes:</strong> ${ahora.getMonth() + 1}</li>
            <li><strong>Día del mes:</strong> ${ahora.getDate()}</li>
            <li><strong>Hora:</strong> ${ahora.getHours()}:${String(ahora.getMinutes()).padStart(2, "0")}</li>
        </ul>
    `;

    mostrarResultado("resultadoFecha", salida, "success");
});

document.getElementById("btnTexto").addEventListener("click", () => {
    const textoOriginal = document.getElementById("textoUsuario").value;
    const textoLimpio = textoOriginal.trim();

    const salida = `
        <ul>
            <li><strong>Cadena literal:</strong> La frase ingresada fue "${textoLimpio}".</li>
            <li><strong>Longitud:</strong> ${textoLimpio.length} caracteres.</li>
            <li><strong>Mayúsculas:</strong> ${textoLimpio.toUpperCase()}</li>
            <li><strong>Minúsculas:</strong> ${textoLimpio.toLowerCase()}</li>
            <li><strong>Incluye "JavaScript":</strong> ${textoLimpio.includes("JavaScript")}</li>
            <li><strong>Primeros 10 caracteres:</strong> ${textoLimpio.slice(0, 10)}</li>
            <li><strong>Reemplazo:</strong> ${textoLimpio.replace("JavaScript", "JS")}</li>
        </ul>
    `;

    mostrarResultado("resultadoTexto", salida, "success");
});

const estudiantes = ["Ana", "Carlos", "María"];

function actualizarArreglo() {
    const lista = estudiantes.length
        ? `<ol>${estudiantes.map(nombre => `<li>${nombre}</li>`).join("")}</ol>`
        : "El arreglo está vacío.";

    mostrarResultado(
        "resultadoArreglo",
        `${lista}<p class="mb-0"><strong>Cantidad:</strong> ${estudiantes.length}</p>`,
        "success"
    );
}

document.getElementById("btnAgregarNombre").addEventListener("click", () => {
    const input = document.getElementById("nuevoNombre");
    const nombre = input.value.trim();

    if (nombre === "") {
        mostrarResultado("resultadoArreglo", "Escriba un nombre antes de agregar.", "error");
        return;
    }

    estudiantes.push(nombre);
    input.value = "";
    actualizarArreglo();
});

document.getElementById("btnEliminarNombre").addEventListener("click", () => {
    estudiantes.pop();
    actualizarArreglo();
});

document.getElementById("btnArregloTipado").addEventListener("click", () => {
    const notas = new Int16Array([78, 85, 92, 67]);
    const promedio = Array.from(notas).reduce((suma, nota) => suma + nota, 0) / notas.length;

    mostrarResultado(
        "resultadoTipado",
        `<ul>
            <li><strong>Tipo:</strong> ${notas.constructor.name}</li>
            <li><strong>Valores:</strong> ${Array.from(notas).join(", ")}</li>
            <li><strong>Promedio:</strong> ${promedio.toFixed(2)}</li>
        </ul>`,
        "success"
    );
});

actualizarArreglo();

function limpiarResaltados() {
    document.querySelectorAll(".dom-highlight").forEach(elemento => {
        elemento.classList.remove("dom-highlight");
    });
}

document.querySelectorAll(".dom-button").forEach(boton => {
    boton.addEventListener("click", () => {
        limpiarResaltados();
        const accion = boton.dataset.domAction;

        if (accion === "id") {
            const elemento = document.getElementById("tituloDOM");
            elemento.classList.add("dom-highlight");
            mostrarResultado("resultadoDOM", "getElementById encontró el título de la zona DOM.", "success");
        }

        if (accion === "tag") {
            const elementos = document.getElementsByTagName("li");
            Array.from(document.querySelectorAll("#listaDOM li")).forEach(li => li.classList.add("dom-highlight"));
            mostrarResultado(
                "resultadoDOM",
                `getElementsByTagName encontró ${elementos.length} elementos &lt;li&gt; en toda la página.`,
                "success"
            );
        }

        if (accion === "class") {
            const elementos = document.getElementsByClassName("texto-dom");
            Array.from(elementos).forEach(elemento => elemento.classList.add("dom-highlight"));
            mostrarResultado(
                "resultadoDOM",
                `getElementsByClassName encontró ${elementos.length} elementos con la clase texto-dom.`,
                "success"
            );
        }

        if (accion === "selector") {
            const elemento = document.querySelector(".destacado-dom");
            elemento.classList.add("dom-highlight");
            mostrarResultado(
                "resultadoDOM",
                "querySelector encontró el primer elemento que coincide con .destacado-dom.",
                "success"
            );
        }

        if (accion === "collection") {
            const lista = document.getElementById("listaDOM");
            const coleccion = lista.children;
            Array.from(coleccion).forEach(elemento => elemento.classList.add("dom-highlight"));
            mostrarResultado(
                "resultadoDOM",
                `La colección children contiene ${coleccion.length} elementos.`,
                "success"
            );
        }
    });
});

document.getElementById("btnRestablecerDOM").addEventListener("click", () => {
    limpiarResaltados();
    mostrarResultado("resultadoDOM", "La demostración fue restablecida.");
});
