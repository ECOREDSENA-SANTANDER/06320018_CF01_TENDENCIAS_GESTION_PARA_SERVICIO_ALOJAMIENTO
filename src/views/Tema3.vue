<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Tendencias hoteleras y experiencia del huésped

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-6.mb-lg-0.mb-0.d-none.d-lg-block(data-aos="fade-right")
        img.img-t(src='@/assets/curso/tema3/1.png')
      .col-lg-6(data-aos="fade-left")
        .bg1.mb-0.p-4.cen
          img.img-t.mb-4.mx-lg-4(src='@/assets/curso/tema3/2.svg')
          p.mb-4.mx-lg-4 La industria global de la hospitalidad atraviesa una transformación impulsada por la evolución de los valores socioambientales del consumidor, la aceleración tecnológica, la necesidad de optimizar los activos inmobiliarios y la transición hacia la economía de experiencias. Estas dinámicas modifican la infraestructura, los servicios y los modelos de atención de los establecimientos de alojamiento.
          p.mb-0.mx-lg-4 En este contexto, la gestión hotelera requiere espacios flexibles y sostenibles, servicios adaptados a perfiles de clientes cada vez más diversos y estrategias orientadas a crear experiencias memorables. La modernización del sector implica pasar de modelos estandarizados a propuestas que integren eficiencia operativa, personalización y conexión con el entorno. 


    separador
    #t_3_1.titulo-segundo.mb-5
      h2 3.1 Infraestructura, diseño hotelero y tipologías de clientes actuales
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        img(src='@/assets/curso/tema3/3.png')
    
    p.mb-5 El diseño y la construcción de la infraestructura hotelera han dejado atrás los modelos estandarizados y energéticamente intensivos para adoptar enfoques basados en la sostenibilidad bioclimática, la modularidad espacial y la adaptabilidad funcional. Los establecimientos contemporáneos buscan integrarse con el entorno natural, disminuir el consumo de recursos y aprovechar de manera eficiente cada espacio disponible.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Enfoques de infraestructura y diseño hotelero

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema3/4.png')
      .col-lg-9
        TabsA.color-acento-botones.mb-0
          .tarjeta.color-a.p-4(titulo="Orientación y ventilación cruzada")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 El estudio de las trayectorias solares y de los vientos dominantes permite maximizar la iluminación natural y reducir las cargas térmicas, disminuyendo la dependencia de los sistemas mecánicos de climatización HVAC #[em (Heating, Ventilation, and Air Conditioning).]
          .tarjeta.color-a.p-4(titulo="Materiales de ciclo cerrado")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Comprende el uso de materias primas locales, renovables y de baja huella de carbono, como madera certificada, piedra regional, tierra compactada y bioplásticos estructurales.
          .tarjeta.color-a.p-4(titulo="Cubiertas y fachadas vegetales")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 La implementación de techos verdes y vegetación nativa en las fachadas contribuye a retener aguas pluviales, mejorar el aislamiento térmico y mitigar el efecto de isla de calor urbana.
          .tarjeta.color-a.p-4(titulo="Vestíbulos activos")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Los vestíbulos o #[em lobbies] se transforman en áreas multifuncionales que pueden operar simultáneamente como recepción abierta, espacios de #[em coworking,] cafeterías de especialidad y puntos de encuentro social o #[em networking.]
          .tarjeta.color-a.p-4(titulo="Habitaciones modulares")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Las habitaciones incorporan tabiques móviles, mobiliario retráctil y sistemas transformables que permiten adaptar una distribución estándar para utilizarla como oficina privada o suite familiar.

    p.mb-5 La implementación de estas soluciones arquitectónicas responde a la necesidad de maximizar la rentabilidad por metro cuadrado y ofrecer ambientes funcionales para distintos propósitos de estancia. Aunque su desarrollo puede requerir una inversión inicial superior, sus efectos se reflejan en la eficiencia operativa, la reducción de costos y la valorización del establecimiento.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .cajon.color-primario.p-lg-5.p-4
          h4.mb-3 Impacto de la infraestructura bioclimática
          p.mb-0 La inversión inicial en arquitectura bioclimática y diseño modular puede superar en un 10 % la de un desarrollo tradicional. Sin embargo, los análisis de retorno de inversión (ROI) señalan reducciones de hasta un 35 % en los costos operativos de energía y mantenimiento durante los primeros cinco años de operación.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p.mb-4 Además de mejorar la eficiencia del edificio, la infraestructura bioclimática y modular puede revalorizar el activo inmobiliario y fortalecer el posicionamiento de la marca en los segmentos de turismo de diseño y bienestar.
        p.mb-0 Las transformaciones de la infraestructura se relacionan directamente con la diversificación de los perfiles de huéspedes. La segmentación basada únicamente en edad, género o nivel socioeconómico resulta insuficiente frente a un mercado en el que los hábitos de consumo también dependen del propósito del viaje, las preferencias personales y los estilos de vida contemporáneos.
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema3/5.png')
    
    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Nuevos perfiles de huéspedes

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        AcordionA.press(tipo="b" clase-tarjeta="tarjeta tarjeta--grey")
          .row.align-items-center(titulo="Nómadas digitales y profesionales <em>bleisure</em>")
            .col-lg-12
              p.mb-4 Son viajeros que combinan estancias vacacionales de mediana o larga duración con actividades laborales desarrolladas de manera remota.
              p.mb-4 Requieren conectividad simétrica de alta velocidad, estaciones de trabajo ergonómicas, políticas flexibles de cancelación y tarifas escalonadas para estancias prolongadas.
              p.mb-0 La atención de este perfil puede favorecer la ocupación durante temporadas de baja demanda y diversificar los ingresos provenientes de servicios complementarios.
          .row.align-items-center(titulo="Turistas conscientes y ecoviajeros")
            .col-lg-12
              p.mb-4 Son consumidores informados que analizan el desempeño ambiental, ecológico y social del establecimiento antes de realizar una reserva.
              p.mb-4 Valoran la eliminación de plásticos de un solo uso, los programas de gestión de residuos y economía circular, la gastronomía basada en productos locales y la trazabilidad de las prácticas sostenibles.
              p.mb-0 Este perfil puede presentar una alta disposición a pagar un valor adicional por servicios responsables y contribuir al fortalecimiento de la reputación corporativa.
          .row.align-items-center(titulo="Buscadores de bienestar integral")
            .col-lg-12
              p.mb-4 Son huéspedes cuyo propósito de viaje se relaciona con el cuidado de la salud física y mental, el descanso y la desconexión de las rutinas urbanas.
              p.mb-4 Demandan aislamiento acústico, iluminación circadiana, menús especializados en nutrición funcional, programas de #[em mindfulness] y acceso a servicios de #[em spa] y bienestar.
              p.mb-0 Este segmento favorece el desarrollo de paquetes de valor agregado orientados a la relajación, el cuidado personal y las estancias de desconexión digital.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema3/6.png')

    p.mb-0 La identificación de estos perfiles permite ajustar la infraestructura, los servicios y los protocolos de atención a las necesidades de cada segmento. En consecuencia, la diferenciación hotelera ya no depende únicamente de las características físicas del establecimiento, sino de su capacidad para comprender el comportamiento del huésped y ofrecer respuestas coherentes con sus motivaciones de viaje.


    separador
    #t_3_2.titulo-segundo.mb-5
      h2 3.2 Evolución de los servicios y economía de experiencias
    
    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-primario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema3/7.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 La prestación del servicio hotelero ha transitado desde un enfoque funcional, transaccional y estandarizado hacia un modelo relacional basado en la economía de experiencias. Los huéspedes contemporáneos no solo valoran la comodidad de la habitación, sino que buscan vivencias memorables, personalizadas y conectadas con la cultura de la comunidad local.
            br 
            br 
            p.mb-0 Esta transformación exige reorganizar los protocolos de atención y gestionar de manera integral los diferentes momentos de contacto entre el establecimiento y el huésped. La experiencia comienza antes de la llegada, continúa durante la estancia y se prolonga después de la salida mediante acciones de seguimiento y fidelización.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Ciclo de experiencia del huésped

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10
        PasosA.color-acento-contenido.mb-0(tipo="n")
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-8
              h4.mb-4 Inspiración y descubrimiento
              p.mb-0 El huésped conoce y evalúa las alternativas de alojamiento mediante plataformas digitales, estrategias de #[em marketing] sensorial y herramientas de realidad virtual.
            .col-lg-4.cel
              figure
                img.img-a.img-t(src='@/assets/curso/tema3/8.svg')
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-4.cel
              figure
                img.img-a.img-t(src='@/assets/curso/tema3/9.svg')
            .col-lg-8.text-end
              h4.mb-4 Reserva y preparación
              p.mb-0 El establecimiento facilita procesos de reserva sin fricciones, acompañados de confirmaciones automatizadas y personalizadas.
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-8
              h4.mb-4 Llegada y bienvenida
              p.mb-0 El ingreso puede desarrollarse mediante un #[em check-in] flexible, en el que el personal utiliza dispositivos móviles para recibir al huésped, agilizar el registro y ofrecer una atención personalizada.
            .col-lg-4.cel
              figure
                img.img-a.img-t(src='@/assets/curso/tema3/10.svg')
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-4.cel
              figure
                img.img-a.img-t(src='@/assets/curso/tema3/11.svg')
            .col-lg-8.text-end
              h4.mb-4 Estancia vivencial
              p.mb-0 La experiencia incorpora actividades locales inmersivas, como recorridos gastronómicos comunitarios, talleres artesanales y espacios de interacción cultural.
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-8
              h4.mb-4 Posestancia y fidelización
              p.mb-0 El establecimiento realiza seguimiento mediante analítica de datos, gestión proactiva de reseñas y programas de lealtad basados en experiencias, en lugar de limitarse a la acumulación de puntos.
            .col-lg-4.cel
              figure
                img.img-a.img-t(src='@/assets/curso/tema3/12.svg')

    p.mb-5 La gestión articulada de estas fases permite comprender la experiencia como un proceso continuo y no como una serie de servicios aislados. Para fortalecer este proceso, los establecimientos pueden utilizar la información obtenida durante las diferentes interacciones, siempre bajo criterios de uso ético y responsable.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .cajon.color-secundario.p-lg-5.p-4
          h4.mb-3 Hiperpersonalización basada en datos
          p.mb-0 La recopilación ética de información mediante los sistemas de gestión permite anticipar las necesidades del huésped. Conocer aspectos como la temperatura preferida de la habitación, el tipo de almohada, las restricciones alimentarias o la bebida favorita facilita la personalización del servicio.

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema3/13.png')
      .col-lg-7
        p.mb-4 Esta información puede contribuir al incremento del índice de recomendación neta (NPS, #[em Net Promoter Score]) y de la tasa de retorno de los clientes.
        p.mb-4 La evolución del servicio también transforma el papel del personal hotelero, que deja de limitarse a ejecutar procedimientos operativos y asume funciones relacionadas con la facilitación de experiencias y la orientación sobre las posibilidades del destino. El conocimiento de las preferencias y del historial de estancia permite anticipar necesidades y ofrecer una atención coherente con las expectativas de cada huésped.
        p.mb-0 En este modelo, la competitividad depende de la capacidad del establecimiento para combinar infraestructura flexible, conocimiento del cliente y servicios personalizados. La experiencia se convierte así en un elemento central de la propuesta de valor y en un factor de diferenciación frente a otros establecimientos de alojamiento.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
