<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/intro/1.png')
      .col-lg-7
        .row.justify-content-center.align-items-start.mb-lg-2.mb-4
          .col-lg-2.col-md-2.col-5.mb-lg-0.mb-4.d-none.d-md-block
            img.img-t(src='@/assets/curso/intro/2.svg')
          .col-lg-10.ps-lg-0.col-md-10
            p.mb-0 La gestión y modernización de los establecimientos de alojamiento constituyen procesos esenciales para fortalecer la planificación, la organización y la competitividad en la industria de la hospitalidad. La integración de la sostenibilidad turística, la accesibilidad universal, las nuevas tipologías de infraestructura y las herramientas tecnológicas permite interpretar las características del mercado, reconocer las necesidades del entorno y respaldar la toma de decisiones relacionadas con la prestación de servicios seguros, eficientes y de calidad.
        p.mb-0 Este componente formativo aborda los fundamentos asociados con las tendencias de gestión para el servicio de alojamiento y la sostenibilidad turística. Para ello, integra aspectos relacionados con la calidad turística, los sellos ambientales, las normas técnicas sectoriales y los procesos de certificación, los cuales proporcionan referentes para comprender la gestión ambiental y operativa de los establecimientos de alojamiento.

    p.mb-4 Asimismo, se presentan los elementos que orientan la accesibilidad turística mediante el estudio de sus antecedentes, fundamentos, ventajas, desventajas, datos estadísticos, políticas, normas técnicas sectoriales y componentes del producto turístico accesible. Estos contenidos permiten reconocer la importancia de eliminar barreras físicas y sensoriales, promover la equidad en el servicio y responder a las diversas necesidades de los visitantes.

    p.mb-0 Finalmente, se desarrollan las principales tendencias de la hotelería relacionadas con la infraestructura, las tipologías de clientes, la evolución de los servicios, la experiencia del consumidor y las herramientas tecnológicas de gestión. También se aborda el papel de los sistemas de gestión de propiedad (PMS) y las estrategias de #[em marketing] en la optimización operativa, la automatización de procesos y la creación de experiencias hoteleras alineadas con la innovación, la eficiencia y la mejora continua.


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
