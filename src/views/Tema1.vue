<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Gestión sostenible y certificación en los servicios de alojamiento

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-6.mb-lg-0.mb-0.d-none.d-lg-block(data-aos="fade-right")
        img.img-t(src='@/assets/curso/tema1/1.png')
      .col-lg-6(data-aos="fade-left")
        .bg1.mb-0.p-4.cen
          img.img-t.mb-4.mx-lg-4(src='@/assets/curso/tema1/2.svg')
          p.mb-4.mx-lg-4 La gestión moderna de los establecimientos de alojamiento se fundamenta en la relación entre la sostenibilidad y la calidad en el servicio, dos ejes estratégicos que influyen en la viabilidad y competitividad de la empresa turística. Su implementación requiere articular la operación del establecimiento con la conservación del entorno, las dinámicas socioeconómicas locales, el cumplimiento normativo y la satisfacción integral del huésped.
          p.mb-0.mx-lg-4 Este apartado aborda los conceptos que orientan la gestión sostenible, los sellos ambientales y las normas técnicas aplicables a la hotelería. También presenta las dimensiones operativas del turismo sostenible, las tecnologías orientadas a la eficiencia energética, el proceso de certificación y la relación de los establecimientos de alojamiento con los destinos turísticos certificados.


    separador
    #t_1_1.titulo-segundo.mb-5
      h2 1.1 Sostenibilidad, calidad, sellos ambientales y normas técnicas sectoriales
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        img(src='@/assets/curso/tema1/3.png')
    
    p.mb-4(data-aos="fade-left") La sostenibilidad turística se define como un modelo de gestión que busca el equilibrio dinámico entre tres dimensiones esenciales: la viabilidad económica a largo plazo de la empresa hotelera, la integridad ecológica de los ecosistemas donde opera y la equidad social y cultural de las comunidades receptoras (Organización Mundial del Turismo, 2022). En el contexto del servicio de alojamiento, este enfoque implica transformar las rutinas operativas cotidianas para reducir de manera sistemática la huella de carbono, optimizar el consumo de recursos hídricos y energéticos y minimizar la generación de residuos sólidos mediante la aplicación de principios de economía circular.

    p.mb-5(data-aos="fade-right") Paralelamente, la calidad turística en la hotelería contemporánea deja de interpretarse únicamente como el lujo material o la suntuosidad de la infraestructura para concebirse como un atributo multidimensional, enfocado en el cumplimiento de las expectativas del huésped, la mejora continua de los procesos internos y el respeto por el marco regulatorio sectorial. La calidad y la sostenibilidad actúan como elementos sinérgicos: un establecimiento que optimiza sus procesos mediante prácticas sostenibles incrementa su eficiencia operativa, reduce sus costos financieros y fortalece su reputación corporativa frente a un consumidor cada vez más consciente y exigente.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .cajon.color-primario.p-lg-5.p-4
          h4.mb-3 Integración de calidad y sostenibilidad
          p.mb-0 La integración de los sistemas de gestión de calidad y sostenibilidad no debe considerarse un procedimiento opcional ni un elemento publicitario superficial, sino un requisito crítico de competitividad que previene riesgos legales, disminuye la vulnerabilidad ante las fluctuaciones del mercado y favorece la permanencia del establecimiento en el sector turístico internacional.

    .row.justify-content-center.align-items-start.mb-5
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema1/4.png')
      .col-lg-9
        .row.mb-4
          .col-lg-6.col-md-9.col-12.mb-lg-0.mb-0.d-none.d-lg-block(data-aos="fade-right")
            img.img-t(src='@/assets/curso/tema1/5.svg')
          .col-lg-6(data-aos="fade-left")
            .bg2.mb-0.p-4
              p.mb-0.mx-lg-4 Los sellos ambientales y las certificaciones ecológicas permiten que los establecimientos de alojamiento validen ante sus grupos de interés el compromiso adquirido con el desarrollo sostenible. Estos distintivos funcionan como mecanismos de verificación objetiva, protegen al consumidor frente a prácticas de comunicación engañosa o #[em greenwashing] y acreditan el cumplimiento de parámetros de desempeño ambiental y social.
        p.mb-0 Para reconocer los diferentes enfoques aplicados en el sector hotelero, la siguiente información presenta tres referentes relacionados con la sostenibilidad en los establecimientos de alojamiento.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Referentes de sostenibilidad para el alojamiento

    .row.justify-content-center.align-items-center.mb-4.mb-lg-0(data-aos="fade-left")
      .col-lg-12
        TabsC.color-primario
          .p-lg-5.p-4.fd3(titulo="Sello Ambiental Colombiano (SAC)")
            .row.justify-content-center.align-items-start.mb-0
              .col-lg-5.d-none.d-lg-block
                img.img-t.img-a(src='@/assets/curso/tema1/6.png')
              .col-lg-7
                p.mb-0 Se aplica a establecimientos de alojamiento y hospedaje en el ámbito nacional. Verifica el consumo eficiente de energía y agua, el control de vertimientos, la gestión de residuos peligrosos y ordinarios y el uso de materias primas ecológicas.
          .p-lg-5.p-4.fd3(titulo="Norma Técnica Colombiana NTC 6503")
            .row.justify-content-center.align-items-start.mb-0
              .col-lg-5.d-none.d-lg-block
                img.img-t.img-a(src='@/assets/curso/tema1/7.png')
              .col-lg-7
                p.mb-0 Se aplica a establecimientos de alojamiento y hospedaje en Colombia. Establece los requisitos del Sistema de Gestión de Sostenibilidad (SGS), bajo un enfoque estandarizado de mitigación de impactos ambientales, socioculturales y económicos.
          .p-lg-5.p-4.fd3(titulo="Certificación <em>Biosphere</em>")
            .row.justify-content-center.align-items-start.mb-0
              .col-lg-5.d-none.d-lg-block
                img.img-t.img-a(src='@/assets/curso/tema1/8.png')
              .col-lg-7
                p.mb-0 Se dirige a alojamientos alineados con los Objetivos de Desarrollo Sostenible (ODS) de la Agenda 2030. Considera la gestión integral de la sostenibilidad, la mitigación del cambio climático, la protección de la biodiversidad y el retorno económico equitativo para la comunidad local.

    .row.fd1.p-5.fon.mb-0(data-aos="fade-down")
      .col-lg-12
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-8
            p.mb-4 La adopción de estos distintivos incide de manera directa en el posicionamiento comercial del establecimiento, facilita su inserción en canales de distribución global especializados en turismo responsable y favorece la captación de segmentos de mercado con alta fidelidad hacia marcas comprometidas con el entorno.
            p.mb-4 Además de los sellos y certificaciones, la actividad hotelera en Colombia se encuentra orientada por las Normas Técnicas Colombianas (NTC) y las Normas Técnicas Sectoriales (NTS), expedidas por el organismo nacional de normalización en coordinación con las autoridades ministeriales correspondientes. Estas disposiciones establecen parámetros de calidad, seguridad, sostenibilidad y desempeño que condicionan la operación de los prestadores de servicios turísticos (ICONTEC, 2024).
            p.mb-0 La aplicación de la NTC 6503 requiere que los establecimientos de alojamiento documenten, implementen y mantengan un Sistema de Gestión de Sostenibilidad estructurado en dimensiones ambientales, socioeconómicas y culturales. Su aplicación práctica implica integrar estas dimensiones en la gestión de los recursos, las relaciones con las comunidades locales y la protección del patrimonio del destino.
          .col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/tema1/9.png')


    separador
    #t_1_2.titulo-segundo.mb-5
      h2 1.2 Operación sostenible, certificación y destinos turísticos certificados
    
    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-primario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema1/10.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 La materialización de la sostenibilidad en la industria hotelera trasciende las iniciativas aisladas de ahorro energético o la reducción temporal de insumos. Requiere un modelo de gestión sistémico que articule la operación del establecimiento con la capacidad de carga del destino y con las dinámicas socioeconómicas y culturales del entorno local.
            br 
            br 
            p.mb-0 El funcionamiento del turismo sostenible en los establecimientos de alojamiento y hospedaje se sustenta en un enfoque de gestión por procesos que evalúa permanentemente el ciclo de vida de los servicios ofrecidos. Esta estructura integra tres dimensiones interdependientes que favorecen la viabilidad a largo plazo de la empresa turística (Organización Mundial del Turismo, 2022).

    .tit.mb-5(data-aos="fade-left")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Dimensiones de la operación turística sostenible

    .row.justify-content-center.align-items-center.mb-lg-5.mb-4(data-aos="fade-right")
      .col-lg-8
        AcordionA.press(tipo="b" clase-tarjeta="tarjeta tarjeta--grey")
          .row.align-items-center(titulo="Gestión integral de recursos naturales y ecosistemas")
            .col-lg-12
              p.mb-4 Comprende el control y la reducción de vertimientos líquidos, la optimización de emisiones atmosféricas, la gestión integral de residuos y la protección de la biodiversidad y de los ecosistemas locales.
              p.mb-4 Esta dimensión implica implementar tecnologías de bajo consumo y sistemas automatizados para controlar los recursos hídricos y energéticos. Los hoteles sostenibles pueden integrar plantas de tratamiento de aguas grises, iluminación LED con sensores de presencia, paneles solares térmicos y fotovoltaicos y políticas para eliminar plásticos de un solo uso.
              p.mb-0 También contempla la separación de residuos en la fuente, el compostaje de residuos orgánicos y la articulación con cadenas de reciclaje certificadas.
          .row.align-items-center(titulo="Dinámica socioeconómica y cadenas de valor locales")
            .col-lg-12
              p.mb-4 Comprende el estímulo al empleo regional, la vinculación de proveedores locales en la cadena de suministro y la adopción de protocolos para prevenir la explotación sexual comercial asociada al turismo (ESCAT).
              p.mb-4 Su aplicación busca que la operación hotelera genere un impacto distributivo positivo en las comunidades receptoras. Esto se refleja en la contratación de personal local bajo condiciones laborales justas, el desarrollo de capacidades técnicas y la integración de proveedores de agricultura orgánica, artesanías, guianza turística y proveeduría general.
              p.mb-0 Estas acciones permiten acortar las cadenas de suministro y reducir la huella de carbono asociada al transporte de mercancías.
          .row.align-items-center(titulo="Preservación e integración cultural")
            .col-lg-12
              p.mb-4 Comprende la protección del patrimonio arquitectónico e histórico y la promoción respetuosa de las expresiones culturales, artesanales y gastronómicas propias del destino.
              p.mb-0 Los establecimientos pueden estructurar experiencias que promuevan el conocimiento de las tradiciones locales, la gastronomía autóctona y el respeto por los códigos de conducta comunitarios. Estas acciones deben evitar la folclorización comercial y garantizar una retribución justa a los portadores de saberes ancestrales.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema1/11.png')

    p.mb-5(data-aos="fade-left") La dimensión ambiental se concreta mediante estrategias operativas y componentes tecnológicos que permiten reducir el consumo energético, identificar desperdicios y tomar decisiones sustentadas en información verificable.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Tecnología para la eficiencia energética

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .tarjetaf.p-lg-5.p-4.mb-0
          SlyderA(tipo="b")(data-aos="zoom-in-left")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h3.mb-4 Iluminación eficiente
                    p.mb-4 #[b Componente tecnológico:] iluminación LED.
                    p.mb-0 Reduce el gasto y el consumo eléctrico de la propiedad. Su impacto se refleja en la disminución verificable de la huella de carbono y de los costos fijos de la matriz energética.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema1/12.png")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h3.mb-4 Control dinámico de presencia
                    p.mb-4 #[b Componente tecnológico:] sensores de movimiento.
                    p.mb-0 Evita el desperdicio de energía en áreas comunes de baja ocupación y pasillos durante las horas de menor circulación. También contribuye a optimizar la vida útil de los equipos de iluminación del hotel.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema1/13.png")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h3.mb-4 Climatización inteligente
                    p.mb-4 #[b Componente tecnológico:] automatización HVAC (#[em Heating, Ventilation, and Air Conditioning]).
                    p.mb-0 Optimiza el consumo de los sistemas de calefacción y aire acondicionado, los cuales representan algunos de los mayores costos operativos. Además, reduce las emisiones de gases de efecto invernadero (GEI) asociadas con una climatización ineficiente.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema1/14.png")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h3.mb-4 Telemetría y analítica avanzada
                    p.mb-4 #[b Componente tecnológico:] monitoreo digital y #[em software] de gestión energética.
                    p.mb-0 Permite identificar picos de consumo anómalos y fugas energéticas. La información recolectada respalda la toma de decisiones basada en evidencia estadística para diseñar políticas ecoeficientes.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema1/15.png")
    
    p.mb-5(data-aos="fade-right") La incorporación de estas tecnologías fortalece la eficiencia operativa del establecimiento; sin embargo, su implementación debe acompañarse de mecanismos que permitan comprobar los resultados alcanzados. La medición periódica facilita la identificación de avances, desviaciones y oportunidades de mejora en la gestión sostenible.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .cajon.color-secundario.p-lg-5.p-4
          h4.mb-3 Medición del desempeño sostenible
          p.mb-0 La implementación operativa del turismo sostenible requiere indicadores cuantitativos de desempeño, como los KPI ambientales y sociales, que permitan medir la reducción real del consumo por huésped-noche y asegurar la transparencia durante las auditorías de control normativo.

    p.mb-4(data-aos="fade-right") La aplicación de prácticas sostenibles debe complementarse con procesos de evaluación externa que permitan verificar el cumplimiento de los requisitos establecidos. La obtención de credenciales de sostenibilidad constituye un procedimiento técnico estructurado, orientado a garantizar la transparencia y la veracidad de la gestión ambiental de la empresa.

    p.mb-5(data-aos="fade-left") La siguiente ruta presenta las fases fundamentales de diagnóstico, implementación y auditoría que conforman el proceso de certificación.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Ruta de certificación en sostenibilidad

    .row.justify-content-center.align-items-center.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-10
        PasosA.color-acento-contenido.mb-0(tipo="n")
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-8
              h4.mb-4 Autoevaluación y diagnóstico
              p.mb-0 Se realiza una revisión inicial del cumplimiento normativo y ambiental del establecimiento frente a los requisitos de la NTC 6503.
              p.mb-0 Esta fase permite identificar brechas operativas y formular un plan inicial de mejora.
            .col-lg-4.cel
              figure
                img.img-a.img-t(src='@/assets/curso/tema1/16.svg')
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-4.cel
              figure
                img.img-a.img-t(src='@/assets/curso/tema1/17.svg')
            .col-lg-8.text-end
              h4.mb-4 Adecuación e implementación
              p.mb-0 Se ajustan los procesos operativos, se capacita al personal y se instalan tecnologías de eficiencia energética e hídrica.
              p.mb-0 Como resultado, se documentan formalmente los procedimientos que conforman el Sistema de Gestión de Sostenibilidad (SGS).
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-8
              h4.mb-4 Auditoría externa y certificación
              p.mb-0 Un organismo auditor debidamente acreditado realiza una evaluación de conformidad en el establecimiento.
              p.mb-0 Con base en los resultados, se emite el dictamen técnico y se otorga la certificación formal de sostenibilidad.
            .col-lg-4.cel
              figure
                img.img-a.img-t(src='@/assets/curso/tema1/18.svg')
        
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.d-none.d-lg-block
        img(src="@/assets/curso/tema1/19.png")
      .col-lg-7
        p.mb-4 La validez y el reconocimiento de las certificaciones dependen de la legitimidad y del respaldo institucional de los organismos encargados de evaluar la conformidad. Estas entidades operan bajo normas internacionales de acreditación, como las directrices de la familia ISO/IEC 17065, que buscan garantizar imparcialidad, competencia técnica y objetividad en los procesos de evaluación (Organización Mundial del Turismo, 2022).
        p.mb-0 En Colombia y Latinoamérica, el ecosistema de certificación está conformado por entidades nacionales e internacionales autorizadas por los organismos competentes, como el Organismo Nacional de Acreditación de Colombia (ONAC). Entre los actores representativos se encuentran institutos técnicos de normalización, corporaciones internacionales de certificación ambiental y agencias especializadas en turismo responsable.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .cajon.color-primario.p-lg-5.p-4
          h4.mb-3 Verificación del ente certificador
          p.mb-0 La dirección del establecimiento debe verificar que el organismo certificador seleccionado cuente con acreditación vigente ante el ONAC o ante las autoridades competentes. Esta verificación permite asegurar que el certificado emitido tenga validez legal y reconocimiento comercial ante los operadores turísticos globales.

    p.mb-4(data-aos="fade-right") La sostenibilidad hotelera no opera de forma aislada, sino que se articula con el desarrollo de los Destinos Turísticos Sostenibles (DTS). Un destino turístico certificado gestiona integralmente su territorio y busca equilibrar la afluencia de visitantes con la capacidad de carga de los ecosistemas, la infraestructura urbana, la preservación cultural y el bienestar de la comunidad residente (ICONTEC, 2024).

    p.mb-5(data-aos="fade-left") La relación entre los establecimientos de alojamiento y los destinos certificados genera diferentes beneficios para la competitividad territorial.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Alojamiento y destinos turísticos certificados

    .row.justify-content-center.align-items-stretch.mb-0(data-aos="fade-left")
      .col-lg-4.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4.mb-md-4
        .bg3.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema1/20.svg')
          h3.text-center.mb-4 Sinergia estratégica
          p.mb-0 Los hoteles ubicados en destinos certificados se benefician del posicionamiento de la marca territorial, lo que favorece la llegada de visitantes con interés en el gasto responsable y con una mayor estancia promedio.
      .col-lg-4.col-md-6.ps-lg-0.pe-lg-0.ps-md-0.mb-lg-0.mb-4.mb-md-4
        .bg4.p-4.h-100
          img.img-t.img-a.mb-4.text-white(src='@/assets/curso/tema1/21.svg')
          h3.text-center.text-white.mb-4 Articulación de políticas públicas
          p.mb-0.text-white Los prestadores de servicios hoteleros participan en los comités de gestión del destino y coordinan estrategias para el manejo de residuos municipales, la movilidad sostenible y la seguridad turística.
      .col-lg-4.col-md-6.ps-lg-0.ps-md-0.mb-0
        .bg5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema1/22.svg')
          h3.text-center.mb-4 Mitigación de impactos colectivos
          p.mb-0 La suma de prácticas sostenibles implementadas por los hoteles incide en la sostenibilidad general del destino y contribuye a proteger los atractivos naturales y culturales que motivan el desplazamiento de los turistas.


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
