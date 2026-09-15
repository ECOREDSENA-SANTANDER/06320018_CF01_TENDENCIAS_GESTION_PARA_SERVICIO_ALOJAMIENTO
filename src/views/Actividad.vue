<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Normatividad y tendencias estratégicas en la gestión hotelera.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> validar el grado de apropiación de los conceptos teóricos y técnicos relacionados con la sostenibilidad turística, la accesibilidad universal, las tipologías de clientes y las herramientas tecnológicas aplicadas en los establecimientos de alojamiento.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito fundamental de la implementación de modelos de sostenibilidad turística en los establecimientos de alojamiento?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reducir exclusivamente el consumo de papel en el área administrativa de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Minimizar los impactos ambientales negativos y optimizar el uso eficiente de los recursos naturales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Incrementar de manera arbitraria las tarifas de venta de las habitaciones sin justificación técnica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir totalmente al personal operativo por sistemas automatizados de control energético.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué define el concepto de calidad turística en el marco de la gestión de servicios de alojamiento?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El cumplimiento sistemático de los requisitos del cliente y de las normas técnicas sectoriales para garantizar la mejora continua.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La oferta exclusiva de servicios de lujo orientados únicamente a un segmento de mercado corporativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La eliminación de los canales de comunicación directa con las agencias de viajes intermediarias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La reducción de los tiempos de estancia de los huéspedes para incrementar la rotación de camas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es la función principal del Sello Ambiental Colombiano (SAC) en los servicios de alojamiento?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Certificar el cumplimiento de las obligaciones tributarias y fiscales del establecimiento hotelero.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Verificar el consumo eficiente de energía y agua, el control de vertimientos, la gestión de residuos y el uso de materias primas ecológicas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Regular las tarifas máximas que un establecimiento puede cobrar por temporada alta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Determinar la clasificación por estrellas de la infraestructura hotelera según su tamaño.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué establece una Norma Técnica Sectorial (NTS) en la industria del alojamiento?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Requisitos estandarizados de calidad, sostenibilidad y seguridad que deben cumplir los prestadores de servicios turísticos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Lineamientos estrictos sobre el diseño arquitectónico obligatorio de las cadenas hoteleras internacionales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Políticas internas de contratación y remuneración salarial para el personal de recepción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Procedimientos obligatorios de comercialización digital a través de redes sociales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Cómo se caracteriza el modelo de turismo sostenible aplicado al sector hotelero?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Por priorizar la rentabilidad financiera a corto plazo por encima de la conservación de los ecosistemas locales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Por equilibrar de manera armónica la viabilidad económica, la conservación ambiental y la responsabilidad social.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Por limitar el acceso de los turistas nacionales a las instalaciones del establecimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Por centralizar todas las decisiones operativas en los organismos gubernamentales de control.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es la función de los entes certificadores dentro del proceso de sostenibilidad hotelera?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Emitir directrices políticas para el desarrollo urbanístico de las zonas turísticas del país.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Evaluar de forma objetiva y verificar el cumplimiento de los requisitos establecidos en las normas técnicas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Administrar directamente los recursos financieros de los establecimientos de alojamiento certificados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Capacitar obligatoriamente a los huéspedes en normas de comportamiento ambiental.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué representa un destino turístico certificado en términos de competitividad territorial?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un territorio que ha estandarizado sus procesos de gestión sostenible y calidad en beneficio de visitantes y residentes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Una zona geográfica donde se prohíbe totalmente el ingreso de visitantes internacionales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un espacio urbano exento del cumplimiento de la normatividad ambiental vigente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un mercado monopólico controlado por una sola cadena hotelera multinacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Qué comprende el concepto de accesibilidad turística en los establecimientos de alojamiento?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La eliminación exclusiva de barreras arquitectónicas para vehículos de transporte público.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La condición que deben cumplir los entornos y servicios para ser utilizados por todas las personas con autonomía y seguridad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La gratuidad total de los servicios complementarios para los adultos mayores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La disponibilidad ilimitada de habitaciones individuales durante todo el año.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es uno de los antecedentes normativos fundamentales que impulsaron la accesibilidad en la hotelería?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La evolución de los sistemas de reservas en línea a través de dispositivos móviles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La adopción de directrices internacionales y normativas sobre diseño universal e inclusión social.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La implementación obligatoria de tarifas dinámicas para la temporada baja.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La reducción de los costos de importación de equipos de climatización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es un principio rector fundamental del diseño universal aplicado al sector de alojamiento?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El uso equitativo, flexible y de fácil comprensión de los espacios y servicios por cualquier persona.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La restricción de acceso a las zonas húmedas únicamente a personal especializado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El diseño de estructuras complejas que requieran asistencia técnica permanente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La estandarización de una sola tipología de mobiliario para todas las habitaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Qué ventaja estratégica aporta la implementación de políticas de accesibilidad en un hotel?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La reducción automática de las cargas impositivas municipales de la propiedad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La ampliación del segmento de mercado al atender las necesidades de personas con movilidad reducida o discapacidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La supresión de la obligación de realizar mantenimientos preventivos en las instalaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La exención de cumplir con las auditorías de los sellos ambientales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Cuál es una condición que debe cumplir la infraestructura de un alojamiento accesible?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Contar únicamente con una habitación aislada para emergencias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Disponer de rutas libres de obstáculos, mobiliario adaptado y habitaciones accesibles.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ofrecer tarifas gratuitas a todas las personas mayores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar la señalización táctil y auditiva.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Cómo se caracteriza la tendencia de la hotelería enfocada en el viajero bleisure?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Por la reducción de los servicios de alimentos y bebidas en horarios nocturnos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Por la prohibición del uso de dispositivos electrónicos en las áreas comunes del hotel.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Por la combinación de estancias de trabajo remoto con actividades vacacionales y de ocio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Por la contratación exclusiva de personal bilingüe para la recepción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué función cumple un Sistema de Gestión de Propiedad (PMS, Property Management System) en el hotel?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Controlar de manera manual la contabilidad física de la caja menor diaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Diseñar las campañas publicitarias impresas para revistas especializadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Supervisar el rendimiento energético de los paneles solares de la fachada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Centralizar y automatizar las operaciones del frente de casa, reservas, inventarios y recepción.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Qué beneficio aporta la integración financiera y contable del sistema hotelero?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar los canales de reservas digitales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Unificar los consumos de las diferentes áreas con los balances contables y facilitar las auditorías financieras.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir al personal de contabilidad del establecimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mantener las tarifas iguales durante todo el año.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es la utilidad de integrar un sistema Channel Manager en la gestión tecnológica del hotel?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sincronizar en tiempo real la disponibilidad y tarifas en múltiples canales de distribución digital en línea.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Sustituir la atención presencial del personal de recepción mediante quioscos virtuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Almacenar las historias clínicas de los huéspedes que visitan el spa del hotel.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Calcular de forma automática las liquidaciones de nómina de los empleados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Cómo influye el marketing olfativo y sensorial en la experiencia del huésped según el neuromarketing?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustituyendo los protocolos de limpieza e higiene en las habitaciones del establecimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Incrementando de forma directa el consumo de energía eléctrica en el vestíbulo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Obligando al cliente a realizar un registro digital anticipado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Induciendo respuestas emocionales subconscientes que fortalecen la recordación positiva de la marca hotelera.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué caracteriza a la publicidad digital basada en estrategias SEM y SEO en la hotelería?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La impresión exclusiva de folletos físicos distribuidos en aeropuertos internacionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El posicionamiento orgánico y las campañas de pago por clic para captar reservas directas en buscadores.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La contratación de espacios publicitarios en vallas viales de carreteras nacionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La emisión de cuñas radiales en horarios de alta audiencia matutina.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es el beneficio operativo del módulo de ama de llaves de un sistema PMS?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Actualizar en tiempo real el estado de las habitaciones para agilizar su disponibilidad en recepción.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Enviar mensajes de cobranza a los huéspedes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Administrar las campañas publicitarias del hotel.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controlar el inventario de alimentos de la cocina.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Qué finalidad tienen los informes generados por los sistemas tecnológicos relacionados con la sostenibilidad?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Evaluar consumos, documentar resultados y apoyar los procesos de certificación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Determinar la clasificación por estrellas del hotel.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir las auditorías realizadas por organismos acreditados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Establecer los horarios laborales del personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
