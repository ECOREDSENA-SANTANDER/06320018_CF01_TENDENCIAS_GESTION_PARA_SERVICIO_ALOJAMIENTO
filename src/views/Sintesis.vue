<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4(data-aos="fade-right") El componente formativo integra los fundamentos y tendencias que orientan la gestión moderna de los servicios de alojamiento. Aborda la sostenibilidad y la calidad turística mediante sellos ambientales, normas técnicas sectoriales, sistemas de gestión, prácticas de eficiencia energética y procesos de certificación articulados con los destinos turísticos sostenibles. Asimismo, desarrolla la accesibilidad como un elemento esencial para garantizar espacios, servicios e información utilizables por todas las personas, a partir del diseño universal y el cumplimiento normativo. También analiza las transformaciones de la infraestructura hotelera, los nuevos perfiles de huéspedes y la evolución hacia experiencias personalizadas durante las distintas etapas de la estancia. 
    
    p.mb-5 Finalmente, presenta los sistemas PMS, las herramientas tecnológicas, la automatización y las soluciones digitales que apoyan la operación hotelera, junto con estrategias de #[em marketing, neuromarketing,] segmentación y publicidad orientadas a fortalecer la comunicación, la fidelización, la eficiencia operativa y la competitividad de los establecimientos de alojamiento. 
    

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual del componente con cuatro ejes: sostenibilidad, accesibilidad, tendencias hoteleras, tecnología y marketing.")
      .col-auto
        a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis


</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
