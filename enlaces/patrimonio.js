const textos = [
      "Este es el antiguo Cine Gran Cinema, un lugar emblemático de Sanlúcar de Barrameda.",
      "El Cine Barrameda, inaugurado en 1945, fue otro de los grandes cines de Sanlúcar. Su programación incluía películas de estreno y se convirtió en un lugar de referencia para los amantes del cine.",
      "El Cine Rialto, con su estilo neoclásico, fue inaugurado en 1950. Durante décadas, ofreció una variada cartelera de películas, convirtiéndose en un símbolo del entretenimiento en Sanlúcar.",
      "El Castillo de Espíritu Santo, construido en el siglo XV, es un importante vestigio histórico de Sanlúcar. Su arquitectura y su ubicación estratégica lo convierten en un lugar de interés turístico.",
      "El Baluarte de San Salvador, parte de las murallas de la ciudad, es un ejemplo de la arquitectura militar del siglo XVII. Hoy en día, es un espacio cultural que alberga eventos y exposiciones.",
      "El Horno del Castillo Bajo de Guía, construido en el siglo XVIII, es un antiguo horno de pan que ha sido restaurado y ahora sirve como centro cultural y turístico.",
      "La Estación de Tren de Sanlúcar, inaugurada en 1883, fue un importante punto de conexión ferroviaria. Aunque ya no opera como estación, su arquitectura sigue siendo un atractivo para los visitantes.",
      "El Teatro Principal estaba ubicado en la Calle Ancha, fue cine y Teatro hasta su cierre en 1980. Su historia lo convierte en un lugar de interés para los amantes del patrimonio cultural.",
    ];

    const imagenes = [
      "/enlaces/cinegrancinema1.jpeg",
      "/enlaces/cinebarrameda.jpg",
      "/enlaces/cinerialto.jpg",
      "/enlaces/castilloespiritusanto.webp",
      "/enlaces/baluartesansalvador.jpg",
      "/enlaces/castillitobajodeguia.jpg",
      "/enlaces/estaciontren1.jpg",
      "/enlaces/teatroprincipal.jpg",
    ];

    function mostrar(index) {
      document.getElementById("galeria").style.display = "none";
      document.getElementById("vista").style.display = "block";
      document.getElementById("imagenGrande").src = imagenes[index];
      document.getElementById("texto").textContent = textos[index];
    }

    function volver() {
      document.getElementById("vista").style.display = "none";
      document.getElementById("galeria").style.display = "flex";
    }