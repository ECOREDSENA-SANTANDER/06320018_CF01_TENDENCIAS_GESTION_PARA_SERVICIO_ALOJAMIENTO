export default {
  global: {
    Name: 'Normatividad y tendencias estratégicas en la gestión hotelera',
    Description:
      'Este componente formativo aborda la sostenibilidad turística, los sellos ambientales, las normas técnicas sectoriales, la accesibilidad y los productos turísticos accesibles. Integra tendencias hoteleras relacionadas con infraestructura, tipologías de clientes, experiencia del consumidor, herramientas tecnológicas, sistemas de gestión de propiedad (PMS) y estrategias de <em>marketing</em>, con el fin de fortalecer la eficiencia operativa y la competitividad del servicio de alojamiento.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Gestión sostenible y certificación en los servicios de alojamiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Subtema 1',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Subtema 1',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Subtema 1',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Subtema 1',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tema 2',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Subtema 1',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Subtema 1',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Subtema 1',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Subtema 1',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Tema 3',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Subtema 1',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Subtema 1',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Subtema 1',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Subtema 1',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Tema 4',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Subtema 1',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Subtema 1',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Subtema 1',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Subtema 1',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Accesibilidad turística',
      significado:
        'conjunto de condiciones que deben cumplir los entornos, las infraestructuras, los productos, la información y los servicios hoteleros para ser utilizados por todas las personas con autonomía, seguridad, comodidad y dignidad.',
    },
    {
      termino: 'Calidad turística',
      significado:
        'atributo multidimensional relacionado con el cumplimiento de las expectativas del huésped, la mejora continua de los procesos internos y el respeto por el marco regulatorio sectorial.',
    },
    {
      termino: 'Canal de distribución',
      significado:
        'medio tecnológico o intermediario comercial que conecta la oferta de alojamiento de un establecimiento con los consumidores finales o los mercados emisores.',
    },
    {
      termino: 'Certificación de sostenibilidad',
      significado:
        'proceso formal mediante el cual un organismo acreditado evalúa y confirma que un establecimiento de alojamiento cumple los requisitos normativos de sostenibilidad ambiental, social y económica.',
    },
    {
      termino: 'Diseño universal',
      significado:
        'enfoque arquitectónico y conceptual que orienta la creación de espacios, mobiliario y servicios utilizables por el mayor número posible de personas, sin necesidad de adaptaciones especializadas.',
    },
    {
      termino: '<i>Marketing</i> hotelero',
      significado:
        'conjunto de estrategias comerciales orientadas a la promoción, el posicionamiento y la venta de servicios de alojamiento, mediante la gestión de la reputación en línea y la reducción de la incertidumbre asociada con la intangibilidad del servicio.',
    },
    {
      termino: '<i>Neuromarketing</i>',
      significado:
        'disciplina que estudia las respuestas cognitivas, emocionales y sensoriales del consumidor ante los estímulos generados en los espacios y canales de comercialización hotelera.',
    },
    {
      termino: 'Norma Técnica Sectorial (NTS)',
      significado:
        'conjunto de requisitos técnicos y de calidad aplicables a los prestadores de servicios turísticos en Colombia, orientados a estandarizar la operación y garantizar la seguridad de las personas usuarias.',
    },
    {
      termino: '<i>Overbooking</i>',
      significado:
        'práctica de gestión de inventarios que consiste en aceptar un número de reservas superior a la capacidad real disponible, con base en un margen estimado de cancelaciones o inasistencias.',
    },
    {
      termino: '<i>Property Management System</i> (PMS)',
      significado:
        'sistema informático de gestión de propiedades que centraliza y automatiza las operaciones del área de atención al huésped y los procesos administrativos de un establecimiento hotelero.',
    },
    {
      termino: 'Sello Ambiental Colombiano (SAC)',
      significado:
        'distintivo voluntario que certifica el desempeño ambiental, la eficiencia en el consumo de recursos y la gestión de residuos de los establecimientos de alojamiento.',
    },
    {
      termino: 'Sostenibilidad turística',
      significado:
        'modelo de gestión que busca equilibrar la viabilidad económica de la empresa hotelera, la integridad ecológica de los destinos y la equidad social y cultural de las comunidades receptoras.',
    },
    {
      termino: 'Turismo accesible',
      significado:
        'modalidad turística que incorpora condiciones de accesibilidad en las diferentes etapas de la experiencia de viaje, con el propósito de garantizar la inclusión de las personas con discapacidad y otras necesidades de accesibilidad.',
    },
    {
      termino: 'Turismo sostenible',
      significado:
        'actividad turística planificada bajo principios de conservación ambiental, respeto cultural y responsabilidad socioeconómica, orientada a reducir los impactos negativos en los destinos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Hayes, D. K., Ninemeier, J. D., & Miller, A. A. (2023). Hotel operations management (3.ª ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'ICONTEC. (2017). Norma Técnica Sectorial Colombiana NTS-TS 052: Requisitos de accesibilidad al medio físico para personas con discapacidad en la prestación de servicios de alojamiento y hospedaje. Instituto Colombiano de Normas Técnicas y Certificación.',
      link: '',
    },
    {
      referencia:
        'ICONTEC. (2020). Sello Ambiental Colombiano: Requisitos generales para prestadores de servicios de alojamiento. Instituto Colombiano de Normas Técnicas y Certificación.',
      link: '',
    },
    {
      referencia:
        'ICONTEC. (2024). Norma Técnica Colombiana NTC 6503: Sistema de gestión de la sostenibilidad para establecimientos de alojamiento. Requisitos. Instituto Colombiano de Normas Técnicas y Certificación.',
      link: '',
    },
    {
      referencia:
        'Kotler, P., Keller, K. L., & Chernev, A. (2022). Marketing management (16.ª ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2019). Lineamientos de política para el desarrollo del turismo accesible en Colombia. MinCIT.',
      link: '',
    },
    {
      referencia: 'Noray. (s. f.). Retos hoteleros y software especializado.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2011). Informe mundial sobre la discapacidad. OMS y Banco Mundial.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial del Turismo. (2022). Indicadores de desarrollo sostenible para los destinos turísticos: Guía práctica. OMT.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial del Turismo. (2023). Innovación tecnológica y transformación digital en la industria de la hospitalidad. OMT.',
      link: '',
    },
    {
      referencia: 'Revfine. (s. f.). KPIs hoteleros: ADR, RevPAR y GOPPAR.',
      link: '',
    },
    {
      referencia:
        'Stangl, B., Inversini, A., & Schegg, R. (2016). Hotels’ dependency on online intermediaries. International Journal of Hospitality Management, 52, 1–12.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional grado 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Leidy Nataly Ramírez Díaz',
          cargo: 'Experta temática',
          centro: 'Centro Agroturístico – Regional Santander',
        },
        {
          nombre: 'Angélica Varón Quintero',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico – Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
