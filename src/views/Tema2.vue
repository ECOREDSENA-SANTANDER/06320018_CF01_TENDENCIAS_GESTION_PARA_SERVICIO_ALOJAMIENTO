<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Accesibilidad turística en los servicios de alojamiento

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-6.mb-lg-0.mb-0.d-none.d-lg-block(data-aos="fade-right")
        img.img-t(src='@/assets/curso/tema2/1.png')
      .col-lg-6(data-aos="fade-left")
        .bg6.mb-0.p-4.cen
          img.img-t.mb-4.mx-lg-4(src='@/assets/curso/tema2/2.svg')
          p.mb-4.mx-lg-4 La accesibilidad turística constituye un pilar fundamental en la modernización de los establecimientos de alojamiento, debido a que busca garantizar que la infraestructura, los servicios y la información puedan ser utilizados por todas las personas en condiciones de autonomía, seguridad, comodidad y dignidad, sin discriminación de ninguna naturaleza (Organización Mundial de la Salud, 2011).
          p.mb-0.mx-lg-4.mb-lg-1 Su implementación implica superar una visión limitada a la adecuación física de los espacios y adoptar un enfoque integral que contemple el diseño universal, la atención inclusiva, la comunicación accesible y el cumplimiento de los requisitos técnicos aplicables. De esta manera, la accesibilidad contribuye tanto a la equidad en la prestación del servicio como al fortalecimiento operativo y comercial de los establecimientos.


    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Antecedentes, principios de accesibilidad y diseño universal
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema2/3.png')
      .col-lg-7
        p.mb-4 El concepto de accesibilidad en la hotelería ha evolucionado desde una perspectiva asistencialista y segregada, centrada principalmente en la instalación de rampas para personas usuarias de silla de ruedas, hacia el modelo del diseño universal. Este paradigma, consolidado a finales del siglo XX y regulado mediante normas internacionales, establece que los entornos construidos y los servicios deben concebirse desde su origen para ser utilizados por el mayor número posible de personas, independientemente de su edad, estatura o condición de discapacidad física, sensorial o cognitiva (ICONTEC, 2017).
        p.mb-0 La adopción de este enfoque en los establecimientos de alojamiento permite transformar las barreras arquitectónicas tradicionales en espacios integrales y funcionales. Sus beneficios no se limitan a las personas con discapacidad permanente, sino que se extienden a personas mayores, mujeres gestantes y viajeros que transportan equipaje voluminoso.

    p.mb-5(data-aos="fade-left") La aplicación del diseño universal en los servicios de alojamiento se orienta mediante principios que guían tanto la planeación arquitectónica como la prestación operativa.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Principios del diseño universal en el alojamiento

    TabsB.color-acento-contenido.tabs-tema-2.mb-5(data-aos="fade-left")
      .py-4.py-md-5.img1(titulo="Uso equitativo" :icono="require_src('@/assets/curso/tema2/4.svg')")
        .row.justify-content-center.align-items-start.mb-0
          .col-lg-4.col-md-9.col-10.order-md-2.order-2.order-lg-1
            img(src='@/assets/curso/tema2/8.png')
          .col-lg-7.order-md-1.order-1.order-lg-2.mb-lg-0.mb-4
            p.mb-0 Los espacios y servicios deben ser utilizables y comercialmente accesibles para personas con diversas capacidades, evitando la estigmatización o segregación de las personas usuarias.
      .py-4.py-md-5(titulo="Flexibilidad en el uso" :icono="require_src('@/assets/curso/tema2/5.svg')")
        .row.justify-content-center.align-items-start.mb-0
          .col-lg-4.col-md-9.col-10.order-md-2.order-2.order-lg-1
            img(src='@/assets/curso/tema2/9.png')
          .col-lg-7.order-md-1.order-1.order-lg-2.mb-lg-0.mb-4
            p.mb-0 El diseño debe adaptarse a un amplio rango de preferencias y habilidades individuales, permitiendo diferentes modalidades de interacción con el mobiliario y la tecnología del hotel.
      .py-4.py-md-5(titulo="Uso simple e intuitivo" :icono="require_src('@/assets/curso/tema2/6.svg')")
        .row.justify-content-center.align-items-start.mb-0
          .col-lg-4.col-md-9.col-10.order-md-2.order-2.order-lg-1
            img(src='@/assets/curso/tema2/10.png')
          .col-lg-7.order-md-1.order-1.order-lg-2.mb-lg-0.mb-4
            p.mb-0 La operación de puertas, controles domóticos, sistemas de iluminación y cerraduras electrónicas debe ser fácil de comprender, independientemente de la experiencia, los conocimientos o la capacidad lingüística del huésped.
      .py-4.py-md-5(titulo="Información perceptible" :icono="require_src('@/assets/curso/tema2/7.svg')")
        .row.justify-content-center.align-items-start.mb-0
          .col-lg-4.col-md-9.col-10.order-md-2.order-2.order-lg-1
            img(src='@/assets/curso/tema2/11.png')
          .col-lg-7.order-md-1.order-1.order-lg-2.mb-lg-0.mb-4
            p.mb-0 La señalización y la información institucional deben presentarse mediante diferentes modalidades sensoriales, como la visual, la táctil y la auditiva, para facilitar su comprensión por parte de personas con discapacidad sensorial.

    p.mb-5(data-aos="fade-right") La aplicación de estos principios debe extenderse a las diferentes áreas y servicios del establecimiento. No basta con adecuar espacios aislados, debido a que la accesibilidad depende de la continuidad de los recorridos y de la posibilidad de desplazarse de forma autónoma desde el ingreso hasta las habitaciones y demás zonas de servicio.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .cajon.color-secundario.p-lg-5.p-4
          h4.mb-3 Accesibilidad en todas las áreas
          p.mb-0 La implementación del diseño universal no debe limitarse a las zonas públicas del establecimiento. También debe incluir el porcentaje normativo de habitaciones adaptadas y garantizar rutas libres de obstáculos desde el acceso principal hasta las áreas de descanso.


    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Componentes accesibles, impacto operativo y normativa sectorial
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema2/12.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4
            p.mb-0 La integración de la accesibilidad universal genera transformaciones en la infraestructura, los procesos de atención y la gestión operativa de los establecimientos de alojamiento. Estas modificaciones pueden ampliar las oportunidades comerciales y fortalecer la reputación institucional, aunque también requieren inversión, actualización de la información y capacitación permanente del personal.
            br
            br
            p.mb-0 Los principales beneficios y desafíos pueden analizarse desde las dimensiones de mercado, eficiencia operativa y reputación institucional.

    .tit.mb-5(data-aos="fade-left")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Impacto operativo de la accesibilidad hotelera

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        AcordionA.activ(tipo="a" clase-tarjeta="tarjeta tarjeta--azull").mb-0
          .row.justify-content-center.align-items-center(titulo="Ampliación del mercado")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6.mb-lg-0.mb-4
                  p.mb-4 #[b Ventaja:] permite captar nuevos segmentos de viajeros históricamente excluidos y favorece la fidelización del turismo sénior.
                  p.mb-0 #[b Desafío:] exige actualizar permanentemente los canales de reserva digital para informar con precisión las características de las habitaciones adaptadas.
                .col-lg-6.col-md-8.col-10
                  img(src='@/assets/curso/tema2/13.png')
          .row.justify-content-center.align-items-center(titulo="Eficiencia operativa")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6.mb-lg-0.mb-4
                  p.mb-4 #[b Ventaja:] reduce riesgos laborales y optimiza los flujos de circulación utilizados para transportar equipaje y movilizar carros de servicio.
                  p.mb-0 #[b Desafío:] requiere inversión inicial para remodelar la infraestructura y cumplir con las condiciones técnicas relacionadas con espacios de circulación y radios de giro.
                .col-lg-6.col-md-8.col-10
                  img(src='@/assets/curso/tema2/14.png')
          .row.justify-content-center.align-items-center(titulo="Reputación institucional")
            .col-lg-11
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6.mb-lg-0.mb-4
                  p.mb-4 #[b Ventaja:] fortalece la imagen corporativa del establecimiento como una organización inclusiva, ética y socialmente responsable.
                  p.mb-0 #[b Desafío:] demanda capacitación continua del personal en protocolos de asistencia respetuosa y lenguaje incluyente.
                .col-lg-6.col-md-8.col-10
                  img(src='@/assets/curso/tema2/15.png')

    p.mb-5(data-aos="fade-left") La accesibilidad también representa una oportunidad de posicionamiento para la industria hotelera. La Organización Mundial de la Salud (2011) señala que aproximadamente el 15 % de la población mundial experimenta alguna forma de discapacidad. Esta proporción, sumada al incremento de la esperanza de vida, evidencia la necesidad de disponer de servicios que respondan a diferentes condiciones de movilidad, comunicación y percepción.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema2/16.png')
      .col-lg-7
        p.mb-4 Las personas con necesidades de accesibilidad suelen viajar acompañadas por familiares o asistentes, lo que puede incrementar el gasto por grupo y favorecer la ocupación hotelera durante periodos de menor demanda. Por esta razón, los establecimientos que no cuentan con condiciones accesibles pueden limitar su capacidad de atender nuevos segmentos de mercado y afectar su posicionamiento en el sector turístico contemporáneo.
        p.mb-4 Además del impacto comercial y operativo, la accesibilidad en Colombia se encuentra respaldada por disposiciones técnicas aplicables a los servicios de alojamiento y hospedaje. Entre ellas se encuentra la Norma Técnica Sectorial NTS-TS 052, que establece requisitos de accesibilidad al medio físico para personas con discapacidad (ICONTEC, 2017).
        p.mb-0 El cumplimiento de estos requisitos se refleja en diferentes componentes de la infraestructura y el equipamiento hotelero.

    .tit.mb-5(data-aos="fade-left")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Componentes de un alojamiento accesible

    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-right")
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg7.p-lg-5.p-4
          img.img-t.img-a.mb-4(src='@/assets/curso/tema2/17.svg')
          h4.mb-4.text-center Rutas de evacuación y circulación
          p.mb-0.text-center Los pasillos deben contar con un ancho libre superior a 1,20 metros y permanecer libres de obstáculos o escalones sin señalización. Las rampas deben cumplir las pendientes reglamentadas, generalmente entre el 6 % y el 8 %, y disponer de pasamanos dobles.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg7.p-lg-5.p-4
          img.img-t.img-a.mb-4(src='@/assets/curso/tema2/18.svg')
          h4.mb-4.text-center Mobiliario y equipamiento adaptado
          p.mb-0.text-center Los establecimientos deben disponer de mesones de recepción con alturas diferenciadas, botoneras de ascensores en sistema braille y con relieve, así como alarmas visuales y sonoras que permitan alertar a personas con discapacidad auditiva o visual.  
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg7.p-lg-5.p-4
          img.img-t.img-a.mb-4(src='@/assets/curso/tema2/19.svg')
          h4.mb-4.text-center Baterías sanitarias y habitaciones accesibles
          p.mb-0.text-center Las puertas deben contar con vanos de acceso mínimos de 90 centímetros. Los baños deben incorporar barras de apoyo fijas y abatibles, lavabos sin pedestal que permitan el acercamiento frontal de una silla de ruedas y duchas a nivel del piso con asiento abatible.

    p.mb-0(data-aos="fade-left") La articulación entre el diseño universal, la gestión operativa y el cumplimiento normativo permite que la accesibilidad forme parte integral de la experiencia del huésped. Su aplicación favorece el uso autónomo de los espacios, mejora la atención a diferentes perfiles de visitantes y fortalece la calidad general de los servicios de alojamiento.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
