export default {
  global: {
    Name: 'Introducción y aplicación de la inteligencia artificial generativa',
    Description:
      'Este componente formativo se centra en la comprensión conceptual de la inteligencia artificial generativa y su aplicabilidad en diversas áreas. Se exploran los fundamentos de la IA, su evolución histórica y su impacto tanto en la vida cotidiana como en la industria. Además, se profundiza en las características de las herramientas generativas de IA y se enseña cómo interactuar eficientemente con estos modelos mediante el uso adecuado de prompts. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'Inteligencia Artificial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Historia y evolución',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Principios fundamentales',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Aplicaciones en la vida cotidiana y en la industria',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Papel en el desarrollo de software',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Herramientas de inteligencia artificial generativas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Características  ',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Lista de Herramientas de IA Generativa',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Prompt',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Principios de prompting',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Técnicas de mejora de la interacción con modelos de inteligencia artificial  ',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Ejemplos de prompts efectivos y no efectivos  ',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Casos de usos en entornos reales  ',
            hash: 't_3_4',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
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
  complementario: [
    {
      tema: 'POLÍTICA NACIONAL DE INTELIGENCIA ARTIFICIAL',
      referencia:
        'Departamento Nacional de Planeación. (2025). POLÍTICA NACIONAL DE INTELIGENCIA ARTIFICIAL. ',
      tipo: 'Documento',
      descarga: 'downloads/4144.pdf',
    },
    {
      tema: 'MARCO ÉTICO PARA LA INTELIGENCIA ARTIFICIAL EN COLOMBIA',
      referencia:
        'Guío, A. (2020). MARCO ÉTICO PARA LA INTELIGENCIA ARTIFICIAL EN COLOMBIA. ',
      tipo: 'Documento',
      descarga: 'downloads/Marco-etico-IA.pdf',
    },
    {
      tema: 'La inteligencia artificial y el SENA, un camino común',
      referencia:
        'SENA. (20 de junio de 2024). La inteligencia artificial y el SENA, un camino común. [Video] Youtube. ',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=FHibpKlfIpM',
    },
    {
      tema:
        'V. Completa. Una clase magistral del pionero de la inteligencia artificial. Jürgen Schmidhuber',
      referencia:
        'BBVA. (20 de noviembre de 2024). V. Completa. Una clase magistral del pionero de la inteligencia artificial. Jürgen Schmidhuber. BBVA, Aprendemos Juntos 2030. [Video] Youtube.',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=Q6BclIP5QBQ',
    },
    {
      tema:
        'Prompts de experto para ChatGPT: mejora tu marketing en segundos (Guía de prompts gratis)',
      referencia:
        'HubSpot Español. (9 de abril de 2025). 10 prompts de experto para ChatGPT: mejora tu marketing en segundos (Guía de prompts gratis). [Video] Youtube.  ',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=zXv52OFkfYk',
    },
  ],
  glosario: [
    {
      termino: 'Algoritmo',
      significado:
        'es una serie de pasos lógicos o instrucciones que se siguen para resolver un problema o realizar una tarea específica. En la programación y la inteligencia artificial, los algoritmos permiten que las máquinas ejecuten tareas de manera eficiente y eficaz, desde simples cálculos hasta procesos más complejos, como el entrenamiento de modelos de IA. Los algoritmos son fundamentales para el funcionamiento de la IA, ya que guían cómo se deben procesar y analizar los datos.',
    },
    {
      termino: 'Automatización',
      significado:
        'es el uso de tecnologías y sistemas para realizar tareas sin intervención humana directa. En el contexto de la inteligencia artificial, la automatización se refiere a la capacidad de los modelos de IA para realizar tareas repetitivas o complejas de manera eficiente, como el procesamiento de datos, la generación de informes, o la optimización de procesos. Esto aumenta la productividad y reduce la posibilidad de errores humanos.',
    },
    {
      termino: 'Desarrollo Tecnológico',
      significado:
        'se refiere al proceso de creación e innovación en el uso de tecnologías para mejorar productos, servicios y procesos. En el ámbito de la IA, el desarrollo tecnológico implica la creación de nuevos algoritmos, modelos de aprendizaje automático y aplicaciones innovadoras que aprovechan las capacidades de la inteligencia artificial para resolver problemas complejos y mejorar la calidad de vida.',
    },
    {
      termino: 'Inteligencia artificial',
      significado:
        'es un área de la informática que se enfoca en crear sistemas o máquinas capaces de realizar tareas que normalmente requieren inteligencia humana, como razonamiento, aprendizaje y toma de decisiones. La IA permite que las máquinas simulen habilidades cognitivas humanas, como la percepción, el lenguaje natural, y el reconocimiento de patrones.',
    },
    {
      termino: 'Inteligencia artificial generativa',
      significado:
        'es un subcampo de la IA que se enfoca en la creación de contenido nuevo y original, como texto, imágenes, música y videos. Utiliza modelos avanzados que aprenden de grandes cantidades de datos para producir resultados novedosos que imitan el estilo o las características de los datos en los que fueron entrenados. Un ejemplo famoso de IA generativa son los modelos GPT para generación de texto.',
    },
    {
      termino: 'Modelo',
      significado:
        'es un sistema matemático o computacional entrenado para realizar tareas específicas como clasificación, predicción, o generación de contenido. Los modelos de IA son entrenados con grandes volúmenes de datos y utilizan algoritmos para aprender patrones y tomar decisiones basadas en esos patrones. Los modelos generativos, como los basados en redes neuronales, pueden crear contenido nuevo, como textos e imágenes.',
    },
    {
      termino: 'Prompt',
      significado:
        'es una instrucción o entrada proporcionada a un modelo de IA generativa para guiar la generación de respuestas o resultados específicos. Los prompts pueden variar en complejidad y deben ser formulados de manera clara y precisa para obtener respuestas adecuadas. En el contexto de la IA, un prompt puede ser una pregunta, instrucción o descripción de lo que se espera del modelo.',
    },
    {
      termino: 'Transformador de lenguaje',
      significado:
        'es un tipo de modelo de IA diseñado para procesar y generar lenguaje natural. Los modelos de transformador, como GPT-4, están entrenados para comprender y generar texto de manera coherente, lo que los hace ideales para tareas como traducción automática, respuestas a preguntas, y generación de texto. Estos modelos utilizan una arquitectura que les permite manejar relaciones complejas entre palabras y frases en grandes volúmenes de datos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Abeliuk, A., y Gutiérrez, C. (2021). Historia y evaluación de la inteligencia artificial. Revista Bits de Ciencia, 21, 14-21.',
      link: '',
    },
    {
      referencia: 'Amazon Web Services. (2023). ¿Qué es la IA generativa? ',
      link: 'https://aws.amazon.com/es/what-is/generative-ai/',
    },
    {
      referencia: 'Iberdrola. (2023). Historia de la inteligencia artificial.',
      link:
        ' https://www.iberdrola.com/documents/20125/3718402/historia-inteligencia-artificial-infografia-ES.pdf',
    },
    {
      referencia:
        'Lalangui, P. (2024). IA generativa y sus características principales. LinkedIn. ',
      link:
        'https://es.linkedin.com/pulse/ia-generativa-y-sus-caracter%C3%ADsticas-principales-pedro-valera-lalangui-ypche',
    },
    {
      referencia:
        'Lasse, R. (2018). Inteligencia artificial: 101 cosas que debes saber hoy sobre nuestro futuro. Planeta. ',
      link:
        'https://planetadelibrosar0.cdnstatics.com/libros_contenido_extra/40/39307_Inteligencia_artificial.pdf',
    },
    {
      referencia:
        'Mahmoud, S., Myrzakhan, S., y Myrzakhan, Z. (2024). Principled instructions are all you need for questioning LLaMA-1/2, GPT-3.5/4. arXiv. ',
      link: 'https://doi.org/10.48550/arXiv.2312.16171',
    },
    {
      referencia:
        'Panamerican Business School. (2024). Qué es un prompt en IA. ',
      link:
        'https://panamericanlatam.com/que-es-un-prompt-en-ia-y-para-que-sirve/',
    },
    {
      referencia:
        'Sancho, P. (2023). La IA está revolucionando el desarrollo de software. Dreams. ',
      link:
        'https://www.dreams.es/transformacion-digital/modelos-de-comportamiento/la-ia-esta-revolucionando-el-desarrollo-de-software',
    },
    {
      referencia:
        'Serna, E. (2017). Desarrollo e innovación en ingeniería. Instituto Andino de Ingeniería. ',
      link: 'https://dialnet.unirioja.es/servlet/libro?codigo=881928',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
