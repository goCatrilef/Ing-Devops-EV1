document.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById("last-load");
    if (el)
        el.textContent =
            "Última actualización: " + new Date().toLocaleTimeString("es-CL");

    // Precio base por m² según tipo de cartón corrugado (valores referenciales, CLP)
    const PRECIO_M2 = {
        simple: 950,
        doble: 1400,
        triple: 2100,
    };

    /**
     * Calcula un precio estimado por caja y el total del pedido,
     * a partir del desarrollo de la plancha de cartón (largo x ancho x alto)
     * y el tipo de corrugado seleccionado.
     */
    function calcularCotizacionCarton({ largo, ancho, alto, cantidad, tipo }) {
        if (
            [largo, ancho, alto, cantidad].some((v) => !Number.isFinite(v) || v <= 0)
        ) {
            return { error: "Todos los campos deben ser números mayores a 0." };
        }

        const precioM2 = PRECIO_M2[tipo] ?? PRECIO_M2.doble;

        // Desarrollo aproximado de la plancha (superficie de una caja tipo RSC)
        const desarrolloCm2 =
            2 * (largo * ancho) + 2 * (largo * alto) + 2 * (ancho * alto);
        const desarrolloM2 = desarrolloCm2 / 10000;

        const precioPorCaja = desarrolloM2 * precioM2;
        const totalPedido = precioPorCaja * cantidad;

        return {
            precioPorCaja: Math.round(precioPorCaja),
            totalPedido: Math.round(totalPedido),
            desarrolloM2: Number(desarrolloM2.toFixed(3)),
        };
    }

    const formatoCLP = new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
        maximumFractionDigits: 0,
    });

    const btnCotizar = document.getElementById("btnCotizar");
    const resultBox = document.getElementById("calcResult");

    if (btnCotizar && resultBox) {
        btnCotizar.addEventListener("click", () => {
            const datos = {
                largo: parseFloat(document.getElementById("largo").value),
                ancho: parseFloat(document.getElementById("ancho").value),
                alto: parseFloat(document.getElementById("alto").value),
                cantidad: parseInt(document.getElementById("cantidad").value, 10),
                tipo: document.getElementById("tipoCarton").value,
            };

            const resultado = calcularCotizacionCarton(datos);

            if (resultado.error) {
                resultBox.innerHTML = `<p class="result-placeholder">${resultado.error}</p>`;
                return;
            }

            resultBox.innerHTML = `
        <dl class="result-box">
          <dt>Desarrollo de plancha por caja</dt>
          <dd>${resultado.desarrolloM2} m²</dd>
          <dt>Precio estimado por caja</dt>
          <dd>${formatoCLP.format(resultado.precioPorCaja)}</dd>
          <dt>Total del pedido (${datos.cantidad} unidades)</dt>
          <dd class="total">${formatoCLP.format(resultado.totalPedido)}</dd>
        </dl>
      `;
        });
    }

    const contactForm = document.getElementById("contactForm");
    const formNote = document.getElementById("formNote");

    if (contactForm && formNote) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();
            formNote.textContent =
                "Solicitud recibida. Un ejecutivo te contactará dentro de 24 horas hábiles.";
            contactForm.reset();
        });
    }
});
