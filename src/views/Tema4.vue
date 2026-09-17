<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Tecnología y #[em marketing] aplicados a la gestión hotelera

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-6.mb-lg-0.mb-0.d-none.d-lg-block(data-aos="fade-right")
        img.img-t(src='@/assets/curso/tema4/1.png')
      .col-lg-6(data-aos="fade-left")
        .bg6.mb-0.p-4.cen
          img.img-t.mb-4.mx-lg-4(src='@/assets/curso/tema4/2.svg')
          p.mb-4.mx-lg-4 La transformación digital y la evolución de las estrategias de comercialización han modificado la manera en que los establecimientos de alojamiento administran sus procesos, se relacionan con los huéspedes y posicionan sus servicios. La integración de sistemas especializados permite centralizar la información, automatizar actividades operativas, disminuir errores y responder con mayor agilidad a las fluctuaciones del mercado turístico.
          p.mb-0.mx-lg-4.mb-lg-1 En este contexto, la tecnología y el #[em marketing] actúan de manera complementaria. Mientras las plataformas digitales apoyan la administración de reservas, habitaciones, tarifas, consumos y canales de distribución, las estrategias comerciales permiten comprender las motivaciones del huésped, personalizar los mensajes y fortalecer la relación entre el establecimiento y sus públicos.


    separador
    #t_4_1.titulo-segundo.mb-5
      h2 4.1 Sistemas de gestión, herramientas tecnológicas y automatización
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema4/3.png')
      .col-lg-7
        p.mb-4 La digitalización integral de la industria del alojamiento constituye un pilar estratégico para la eficiencia administrativa, la optimización financiera y la competitividad en los mercados globales. La incorporación de plataformas informáticas especializadas permite centralizar flujos operativos complejos, reducir los márgenes de error humano en la administración de inventarios, automatizar la distribución multicanal y responder con agilidad analítica a las fluctuaciones de la demanda turística (Organización Mundial del Turismo, 2023).
        p.mb-0 La infraestructura informática de un establecimiento de alojamiento moderno se apoya principalmente en los Sistemas de Gestión de Propiedades (PMS, #[em Property Management Systems]). Estas plataformas de #[em software] integran las operaciones del área de atención al huésped o #[em front office] y las actividades administrativas del #[em back office], lo que facilita la trazabilidad de las transacciones comerciales y financieras (Hayes et al., 2023).

    p.mb-5 El PMS constituye una herramienta tecnológica central para la operación hotelera, debido a que integra la información relacionada con reservas, huéspedes, habitaciones, tarifas y facturación. Su uso facilita la gestión cotidiana de los procesos y proporciona datos relevantes para la toma de decisiones.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 1. 
          | Gestión de clientes y reservas mediante un sistema PMS
        .bg8.p-4.p-lg-5
          img.img-a.img-t(src='@/assets/curso/tema4/4.svg', alt='Sistema PMS hotelero que integra perfiles de clientes, datos personales, historial, preferencias, reservas, grupos y tarifas.')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema4/5.png')
      .col-lg-9
        p.mb-4 El sistema centraliza los datos personales, el historial y las preferencias de los huéspedes. También organiza las reservas individuales o corporativas, los grupos y las tarifas asociadas, lo que permite disponer de información integrada durante las diferentes etapas de la estancia.
        .row.mb-4
          .col-lg-6.col-md-9.col-12.mb-lg-0.mb-0.d-none.d-lg-block(data-aos="fade-right")
            img.img-t(src='@/assets/curso/tema4/6.svg')
          .col-lg-6(data-aos="fade-left")
            .bg22.mb-0.p-4
              p.mb-4.mx-lg-4 La tendencia actual se orienta hacia plataformas con API abiertas, capaces de integrar el PMS con aplicaciones externas, como llaves digitales, quioscos de auto registro y otros servicios tecnológicos. De esta manera, el PMS evoluciona de una herramienta operativa a un ecosistema de gestión del huésped, conectado con sistemas CRM, administradores de canales, motores de reservas y plataformas de pago.
              p.mb-0.mx-lg-4 La arquitectura de estas plataformas se organiza mediante módulos interconectados que apoyan las actividades cotidianas del establecimiento.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Módulos funcionales de un sistema PMS

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        AcordionA.press(tipo="b" clase-tarjeta="tarjeta tarjeta--grey")
          .row.align-items-center(titulo="Reservas y disponibilidad")
            .col-lg-12
              p.mb-0 Administra la asignación de las tipologías de habitaciones, controla la disponibilidad física y virtual, aplica dinámicamente las tarifas y recibe solicitudes provenientes de diferentes canales de venta en línea.
          .row.align-items-center(titulo="Recepción y gestión de huéspedes")
            .col-lg-12
              p.mb-0 Optimiza los procesos de llegada y salida o #[em check-in] y #[em check-out], administra las cuentas de consumo individual o corporativo y almacena el historial de los clientes para facilitar futuras estancias personalizadas.
          .row.align-items-center(titulo="Ama de llaves")
            .col-lg-12
              p.mb-0 Sincroniza en tiempo real el estado operativo de las habitaciones, como limpia, sucia, en inspección o en mantenimiento preventivo. Esta actualización permite agilizar la disponibilidad del inventario para el área de recepción.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema4/7.png')

    p.mb-5 La integración de estos módulos evita que la información permanezca dispersa entre las diferentes áreas del establecimiento. También facilita que los equipos de recepción, administración y ama de llaves consulten datos actualizados y coordinen sus actividades a partir de una misma plataforma.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .cajon.color-primario.p-lg-5.p-4
          h4.mb-3 Gestión hotelera desde la nube
          p.mb-0 La transición hacia arquitecturas de PMS basadas en #[em cloud computing] reduce la dependencia de servidores físicos locales, disminuye los costos de mantenimiento de la infraestructura informática y permite sincronizar los datos financieros y operativos desde diferentes ubicaciones autorizadas (Vicerrectoría Académica UTS, 2023).

    p.mb-5 Además del PMS, el ecosistema tecnológico hotelero incluye soluciones especializadas que responden a las necesidades comerciales, financieras y operativas del sector. Su capacidad de integración permite relacionar el inventario del establecimiento con los canales de venta y los sistemas internos de control.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Soluciones tecnológicas para la operación hotelera

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        TabsC.color-primario
          .p-lg-5.p-4.fd3(titulo="Control de inventarios")
            .row.justify-content-center.align-items-start.mb-0
              .col-lg-5.d-none.d-lg-block
                img.img-t.img-a(src='@/assets/curso/tema4/8.png')
              .col-lg-7
                p.mb-0 Las herramientas de #[em software] bloquean automáticamente la disponibilidad cuando se alcanza el límite de ocupación contratado. Esta función evita situaciones de sobreventa o #[em overbooking] que puedan afectar la experiencia del huésped y la reputación del establecimiento.
          .p-lg-5.p-4.fd3(titulo="Gestión de canales")
            .row.justify-content-center.align-items-start.mb-0
              .col-lg-5.d-none.d-lg-block
                img.img-t.img-a(src='@/assets/curso/tema4/9.png')
              .col-lg-7
                p.mb-0 Los administradores de canales o #[em channel managers] conectan el inventario del PMS con las agencias de viajes en línea (OTA) y los sistemas globales de distribución (GDS). Esto permite actualizar tarifas y disponibilidad de manera simultánea en los diferentes canales de comercialización (Stangl et al., 2016).
          .p-lg-5.p-4.fd3(titulo="Integración financiera y contable")
            .row.justify-content-center.align-items-start.mb-0
              .col-lg-5.d-none.d-lg-block
                img.img-t.img-a(src='@/assets/curso/tema4/10.png')
              .col-lg-7
                p.mb-4 Estas soluciones relacionan los consumos de restaurantes, centros de bienestar, lavandería y otros servicios con los balances contables generales. También facilitan las auditorías financieras, el cálculo de indicadores como ADR, RevPAR y GOPPAR y el cumplimiento de las obligaciones fiscales (Revfine, s. f.).
                p.mb-0 La transformación digital también puede apoyar el cumplimiento de los compromisos ambientales. Los sistemas conectados permiten controlar consumos, programar mantenimientos y generar información útil para evaluar el desempeño sostenible del establecimiento.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 2. 
          | Integración del #[em software] de gestión hotelera con la sostenibilidad
        .bg9.p-4.p-lg-5
          img.img-a.img-t(src='@/assets/curso/tema4/11.svg', alt='Software PMS monitorea energía, agua, residuos y emisiones para generar reportes, apoyar decisiones y mejorar la sostenibilidad.')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7 
        p.mb-4 Los sistemas inteligentes pueden regular la iluminación, la temperatura y el consumo hídrico según la ocupación real. Asimismo, permiten detectar consumos anómalos, programar mantenimientos preventivos, generar alertas y producir informes periódicos sobre energía, agua, residuos y emisiones.
        p.mb-4 Estos reportes sirven como apoyo para evaluar el cumplimiento de las políticas sostenibles, documentar los resultados de la gestión y respaldar procesos de certificación. De esta manera, la transformación digital y la sostenibilidad se integran dentro de una operación más eficiente, competitiva y responsable con el entorno.
        p.mb-0 La automatización también se extiende a los momentos de interacción directa con el huésped. Las soluciones actuales priorizan la autogestión, la conectividad y la personalización de los servicios durante las diferentes fases del viaje.
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema4/12.png')

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Automatización de los servicios hoteleros

    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg7.p-lg-5.p-4
          img.img-t.img-a.mb-4(src='@/assets/curso/tema4/13.svg')
          h4.mb-4.text-center Llaves digitales y registro móvil
          p.mb-0.text-center Las aplicaciones institucionales permiten realizar el registro previo y acceder a la habitación mediante tecnologías de proximidad, como NFC o #[em Bluetooth.]
          p.mb-0.text-center Estas funciones reducen los tiempos de espera en recepción y proporcionan mayor autonomía durante el ingreso al establecimiento.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg7.p-lg-5.p-4
          img.img-t.img-a.mb-4(src='@/assets/curso/tema4/14.svg')
          h4.mb-4.text-center #[em Chatbots] y asistentes virtuales
          p.mb-0.text-center Los sistemas basados en inteligencia artificial atienden consultas frecuentes y solicitudes de servicios mediante diferentes canales.
          p.mb-0.text-center Su implementación ofrece soporte operativo e informativo permanente, con tiempos de respuesta inmediatos.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg7.p-lg-5.p-4
          img.img-t.img-a.mb-4(src='@/assets/curso/tema4/15.svg')
          h4.mb-4.text-center Sistemas domóticos de habitación
          p.mb-0.text-center Los dispositivos inteligentes permiten controlar la iluminación, la climatización, el cortinaje y los sistemas multimedia mediante aplicaciones o comandos de voz.  Estas soluciones incrementan la comodidad, facilitan la personalización del ambiente y optimizan el consumo energético.

    p.mb-0 La incorporación de estas innovaciones libera al personal de algunas tareas repetitivas y le permite concentrarse en actividades que requieren interacción humana, orientación y resolución de necesidades específicas. Al mismo tiempo, responde a las expectativas de huéspedes que valoran la agilidad, la conectividad y la inmediatez en los servicios.


    separador
    #t_4_2.titulo-segundo.mb-5
      h2 4.2 #[em Marketing] hotelero, neuromarketing y publicidad

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema4/16.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4
            p.mb-0 La comercialización en la industria de la hospitalidad ha evolucionado desde los modelos tradicionales de promoción masiva hacia estrategias segmentadas y orientadas por información. La comprensión de los factores que motivan el viaje y del comportamiento del consumidor permite diseñar propuestas de posicionamiento diferenciadas dentro de un mercado competitivo (Kotler et al., 2022).
            br
            br
            p.mb-0 El #[em marketing] aplicado a los establecimientos de alojamiento presenta particularidades derivadas de la naturaleza intangible y variable de los servicios hoteleros.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Características del servicio hotelero

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        AcordionA.press(tipo="b" clase-tarjeta="tarjeta tarjeta--grey")
          .row.align-items-center(titulo="Intangibilidad y perecibilidad")
            .col-lg-12
              p.mb-0 Una noche de alojamiento no puede almacenarse ni probarse físicamente antes de la compra. Por esta razón, la estrategia comercial debe reducir la incertidumbre mediante expectativas veraces, contenidos visuales de calidad y una gestión activa de la reputación en línea.
          .row.align-items-center(titulo="Producción y consumo simultáneos")
            .col-lg-12
              p.mb-0 El servicio se produce y se consume durante la estancia. En consecuencia, el personal que interactúa con los huéspedes representa directamente la identidad, los valores y la promesa de servicio de la marca.
          .row.align-items-center(titulo="Estacionalidad de la demanda")
            .col-lg-12
              p.mb-0 La ocupación puede variar según la temporada, los eventos y las condiciones del mercado. La gestión comercial requiere precios dinámicos y paquetes de valor agregado que permitan equilibrar los periodos de alta y baja demanda.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema4/17.png')

    p.mb-5 Estas características hacen necesario reconocer las motivaciones y los comportamientos de los diferentes segmentos. La clasificación basada únicamente en variables demográficas ha sido complementada por modelos psicográficos y conductuales, en los que el propósito del viaje determina el diseño de la oferta comercial.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Segmentos según la motivación del viaje

    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg7.p-lg-5.p-4
          img.img-t.img-a.mb-4(src='@/assets/curso/tema4/18.svg')
          h4.mb-4.text-center Turista vacacional de descanso y recreación
          p.mb-0.text-center Busca experiencias de desconexión, recreación familiar o acercamiento a las manifestaciones culturales del destino.
          p.mb-0.text-center Valora la relación entre la calidad y el precio, la ubicación del establecimiento y la disponibilidad de amenidades recreativas.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg7.p-lg-5.p-4
          img.img-t.img-a.mb-4(src='@/assets/curso/tema4/19.svg')
          h4.mb-4.text-center Viajero de negocios y convenciones
          p.mb-0.text-center El viajero #[em corporate] o del segmento MICE demanda conectividad simétrica de alta velocidad, espacios ejecutivos y flexibilidad en los horarios de registro de entrada y salida.  También valora la cercanía estratégica del alojamiento a zonas industriales, centros empresariales o sectores financieros.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg7.p-lg-5.p-4
          img.img-t.img-a.mb-4(src='@/assets/curso/tema4/20.svg')
          h4.mb-4.text-center Viajero #[em bleisure]
          p.mb-0.text-center Combina los desplazamientos laborales con actividades de ocio y estancias prolongadas.  
          p.mb-0.text-center Este segmento requiere tarifas flexibles de larga estancia, áreas de trabajo ergonómicas y servicios complementarios adaptados a la productividad digital.

    p.mb-5 La identificación de estas motivaciones permite ajustar los mensajes, las tarifas, los servicios y los canales de comunicación. Así, la segmentación contribuye a que la propuesta del establecimiento responda de manera diferenciada a quienes viajan por descanso, negocios o por una combinación de actividades laborales y recreativas.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema4/21.png')
      .col-lg-7
        p.mb-4 El #[em neuromarketing] amplía el análisis del consumidor al estudiar sus respuestas cognitivas y emocionales frente a los estímulos comerciales generados en los espacios de alojamiento. Esta disciplina permite comprender cómo los aromas, los sonidos, las condiciones de iluminación y las experiencias digitales influyen en la percepción del servicio, la decisión de compra y la relación con la marca (Organización Mundial del Turismo, 2023).
        p.mb-0 Las estrategias sensoriales intervienen en diferentes momentos de la experiencia del huésped y pueden contribuir a generar sensaciones de bienestar, comodidad y confianza. Su aplicación permite fortalecer la identidad del establecimiento y construir experiencias coherentes con las expectativas de los diferentes perfiles de visitantes.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        img(src='@/assets/curso/tema4/22.png')
        .row.justify-content-center.g-0
          .col-lg-12
            .tarjeta.color-primario.p-4.rounded-0.h-100
              .tarjeta.bg-white.p-4.p-lg-5.h-100
                TarjetaAudio.color-acento-botones.mb-0(
                texto="Pódcast: estímulos que transforman la experiencia hotelera"
                :audio="require_src('@/assets/actividad/audio/end-game-success.mp3')"
              ).mb-4
                p.mb-0 Amplíe la comprensión del #[em neuromarketing] mediante este pódcast, en el que se analizan el #[em marketing] olfativo, la atmósfera acústica, la regulación lumínica y la arquitectura de decisiones digitales aplicadas a los establecimientos de alojamiento.
    
    p.mb-5 Además de influir en la experiencia dentro del establecimiento, las estrategias de #[em marketing] deben comunicar sus atributos mediante canales capaces de llegar a públicos específicos. La publicidad hotelera combina acciones orientadas a captar usuarios con intención de reserva, generar interés por la propuesta de servicio, recuperar procesos de compra abandonados y fortalecer la fidelización de los clientes.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Canales de publicidad hotelera

    TabsB.color-acento-contenido.mb-5(data-aos="fade-left")
      .py-4.py-md-5(titulo="Posicionamiento en motores de búsqueda" :icono="require_src('@/assets/curso/tema4/23.svg')")
        .row.justify-content-center.align-items-start.mb-0
          .col-lg-4.col-md-9.col-10.order-md-2.order-2.order-lg-1
            img(src='@/assets/curso/tema4/27.png')
          .col-lg-7.order-md-1.order-1.order-lg-2.mb-lg-0.mb-4
            p.mb-4 Las estrategias SEO favorecen el posicionamiento orgánico, mientras que las campañas SEM utilizan anuncios pagados para captar usuarios con una intención activa de reserva.
            p.mb-0 Su propósito es dirigir al sitio web oficial del establecimiento a personas con una alta predisposición a reservar en un destino específico.
      .py-4.py-md-5(titulo="Redes sociales visuales" :icono="require_src('@/assets/curso/tema4/24.svg')")
        .row.justify-content-center.align-items-start.mb-0
          .col-lg-4.col-md-9.col-10.order-md-2.order-2.order-lg-1
            img(src='@/assets/curso/tema4/28.png')
          .col-lg-7.order-md-1.order-1.order-lg-2.mb-lg-0.mb-4
            p.mb-4 Las campañas presentan la infraestructura, el diseño arquitectónico y las experiencias memorables del establecimiento mediante contenidos visuales y multimedia.
            p.mb-0 Su propósito es generar deseo aspiracional, interacción o #[em engagement] y reconocimiento de la propuesta de servicio.
      .py-4.py-md-5(titulo="Publicidad programática y <em>retargeting</em>" :icono="require_src('@/assets/curso/tema4/25.svg')")
        .row.justify-content-center.align-items-start.mb-0
          .col-lg-4.col-md-9.col-10.order-md-2.order-2.order-lg-1
            img(src='@/assets/curso/tema4/29.png')
          .col-lg-7.order-md-1.order-1.order-lg-2.mb-lg-0.mb-4
            p.mb-4 Estas estrategias dirigen mensajes segmentados a personas que visitaron previamente la página web del hotel, pero abandonaron el proceso de reserva.
            p.mb-0 Su propósito es incentivar el regreso del usuario y facilitar la finalización de la transacción.
      .py-4.py-md-5(titulo="<em>Email marketing</em> de fidelización" :icono="require_src('@/assets/curso/tema4/26.svg')")
        .row.justify-content-center.align-items-start.mb-0
          .col-lg-4.col-md-9.col-10.order-md-2.order-2.order-lg-1
            img(src='@/assets/curso/tema4/30.png')
          .col-lg-7.order-md-1.order-1.order-lg-2.mb-lg-0.mb-4
            p.mb-4 Las comunicaciones se dirigen a clientes recurrentes y a integrantes de la base de datos propia, de acuerdo con sus características y con su historial de relación con el establecimiento.
            p.mb-0 Su propósito es incentivar la recompra directa y evitar el pago de altas comisiones a intermediarios, como las agencias de viajes en línea.

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema4/31.png')
      .col-lg-7
        p.mb-4 La articulación de estos canales permite adaptar el mensaje al nivel de interés y al momento de decisión del consumidor. También contribuye a fortalecer la venta directa, mantener la relación con los clientes recurrentes y disminuir la dependencia de los intermediarios comerciales.
        p.mb-0 La integración de las herramientas tecnológicas, los sistemas de gestión y las estrategias de #[em marketing] permite fortalecer la operación y la comercialización de los establecimientos de alojamiento. Mientras la automatización facilita el control de la información y la prestación de servicios ágiles y personalizados, el conocimiento del consumidor y la selección adecuada de los canales publicitarios contribuyen al posicionamiento, la fidelización y la competitividad en el mercado hotelero.


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
