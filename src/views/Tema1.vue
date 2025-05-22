<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Inteligencia artificial
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/temas/tema1/1.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Una forma de explicar qué es la inteligencia artificial (IA) es definirla como la capacidad que tienen las máquinas para ejecutar tareas que, tradicionalmente, requieren de la inteligencia humana, como el aprendizaje, la comprensión del lenguaje, el razonamiento o la toma de decisiones, entre otras (Lasse, 2018). La IA permite que una máquina adopte comportamientos considerados inteligentes, gracias al uso de algoritmos avanzados y al análisis y procesamiento de grandes volúmenes de datos. Esto le permite llevar a cabo procesos complejos en menos tiempo y con un margen de error menor al humano, identificando patrones y adaptando sus acciones en función de los resultados obtenidos.
    
        .bg-color-2.p-4.mb-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/temas/tema1/2.png", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Un ejemplo claro de su funcionamiento es cuando se le habla al teléfono y este responde con la acción solicitada, demostrando que ha interpretado correctamente el mensaje. Otro caso cotidiano es el sistema de recomendaciones de YouTube, que sugiere videos relacionados con los que ya se han reproducido anteriormente.
        p(data-aos="fade-left") Está demostrado que el objetivo de la inteligencia artificial no se limita a la automatización de tareas. Por el contrario, busca un mejoramiento continuo, perfeccionándose mediante el aprendizaje obtenido a través del análisis de datos. Esto la convierte en una herramienta fundamental para abordar problemas cada vez más complejos. A diferencia de los humanos, estas máquinas no se fatigan y pueden trabajar de manera constante mientras reciban energía, lo que las hace especialmente valiosas en áreas como la salud, la educación, el trabajo y otros ámbitos donde su aplicación es requerida.
    
    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Historia y evolución 
    
    .bg-full-width.bg-fondo-2.mb-5
      .px-4.px-md-5
        p.mb-5 A continuación, se presenta los principales hitos en la evolución de la inteligencia artificial, desde sus antecedentes conceptuales en el siglo XIX hasta los avances más relevantes del siglo XX.
        LineaTiempoB.color-secundario.mb-5(:datos="datosLineaTiempoB")
        LineaTiempoA.color-acento-contenido.mb-5(:datos="datosLineaTiempoA")
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Línea de tiempo de la inteligencia artificial (2002-2016)
    
    p.mb-5 A continuación, se presentan los avances del inicio del siglo XXI que sentaron las bases para la consolidación de la inteligencia artificial contemporánea.

    .bg-fondo-slider.p-4.mb-5
      .tarjeta.bg-color-white.p-4
        //- LineaTiempoC debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- text-small se usa para que los títulos sean mas pequeños
        LineaTiempoC.color-acento-contenido(text-small)
          .row(titulo="2002").justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0
              h5 2002
              p.mb-0 Roomba: Sale al mercado Roomba, línea de robots aspiradores, de la empresa iRobot, capaces de aspirar una casa. Su salida marca un hito en la automatización doméstica y genera el referente que la gente espera de la IA.
          
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema1/16.png', alt='Texto que describa la imagen')
          .row(titulo="2009").justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0
              h5 2009
              p.mb-0 ImageNet democratiza los datos: Una base de datos con más de 14 millones de imágenes etiquetadas, diseñada para el entrenamiento de IA.
          
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema1/17.png', alt='Texto que describa la imagen')
          .row(titulo="2011").justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0
              h5 2011
              p.mb-0 Watson de IBM: Watson, sistema de IA de la empresa IBM, que dando respuestas a preguntas formuladas en lenguaje natural, ganó el concurso de televisión Jeopardy.
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema1/18.png', alt='Texto que describa la imagen')
          .row(titulo="2014").justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0
              h5 2014
              p.mb-0 Eugene pasa el Test de Turing: Eugene Goostman, programa de IA simulando ser un adolescente ucraniano, convenció a un tercio de los jueces de ser un humano, convirtiéndose en el primer sistema en superar públicamente el Test de Turing.
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema1/19.png', alt='Texto que describa la imagen')
          .row(titulo="2014").justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0
              h5 2014
              p.mb-0 Enseñando a las máquinas a inventar: Ian Goodfellow crea las Redes Generativas Adversariales (GAN, por sus siglas en inglés), una arquitectura que permite generar imágenes artificiales, abriendo el camino para la generación de contenido visual.
          
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema1/20.png', alt='Texto que describa la imagen')
          .row(titulo="2014").justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0
              h5 2014
              p.mb-0 Alexa: Presenta Alexa, asistente virtual controlado por voz, que responde a comandos, interactúa verbalmente y ejecuta órdenes en dispositivos inteligentes.
          
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema1/21.png', alt='Texto que describa la imagen')
          .row(titulo="2015 - 2016").justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0
              h5 2015 - 2016
              p.mb-0 Aprendizaje profundo al alcance de todos: TensorFlow y PyTorch se popularizan como herramientas para el desarrollo de proyectos de aprendizaje automático.
          
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema1/22.png', alt='Texto que describa la imagen')

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Línea de tiempo de la inteligencia artificial (2017-2023)

    p.mb-5 A continuación, se presentan hitos recientes que evidencian la consolidación de la inteligencia artificial en la vida cotidiana y su expansión hacia nuevas capacidades cognitivas.

    .row.mb-3.justify-content-center
      .col-lg-10
        LineaTiempoD.color-primario
          .row(numero="2017" titulo="AlphaGo").align-items-center
            .col-md-9.mb-4.mb-md-0.order-2
              p.mb-0 Creado por Google DeepMind, derrota al campeón mundial del juego Go, utilizando habilidades complejas que se creían exclusivas de los humanos.
            .col-md-3.order-1
              figure
                img(src='@/assets/curso/temas/tema1/23.png', alt='Texto que describa la imagen')
          .row(numero="2018" titulo="BERT, un modelo de lenguaje").align-items-center
            .col-md-9.mb-4.mb-md-0.order-2
              p.mb-0 BERT, un modelo de procesamiento de lenguaje natural desarrollado por Google, logra comprender el contexto de las palabras en una oración o en una pregunta e interactuar respondiendo.
            .col-md-3.order-1
              figure
                img(src='@/assets/curso/temas/tema1/24.png', alt='Texto que describa la imagen')
          .row(numero="2019" titulo=" GPT-2 y GPT-3").align-items-center
            .col-md-9.mb-4.mb-md-0.order-2
              p.mb-0 Avances en generación de texto: La empresa OpenAI lanza los modelos GPT-2 y GPT-3, sistemas de inteligencia artificial con la capacidad de generar texto fluido, coherente y de alta calidad como respuesta a pocas instrucciones.
            .col-md-3.order-1
              figure
                img(src='@/assets/curso/temas/tema1/25.png', alt='Texto que describa la imagen')
          .row(numero="2020" titulo="IA en la pandemia de COVID-19").align-items-center
            .col-md-9.mb-4.mb-md-0.order-2
              p.mb-0 La IA es utilizada para trabajar y responder con mayor rapidez al rastreo de contagios, análisis de datos médicos y el aceleramiento en el desarrollo de vacunas para combatir la COVID-19.
            .col-md-3.order-1
              figure
                img(src='@/assets/curso/temas/tema1/26.png', alt='Texto que describa la imagen')
          .row(numero="2022" titulo="Lanzamiento de ChatGPT").align-items-center
            .col-md-9.mb-4.mb-md-0.order-2
              p.mb-0 OpenAI lanza ChatGPT, primer modelo de IA generativa abierto al público para mantener conversaciones de forma natural, apoyar en tareas y asistir en diferentes actividades, lo que catapultó su uso a nivel mundial, marcando un antes y un después en la IA y una explosión masiva de diferentes herramientas que hoy se han tomado los diferentes escenarios en los cuales se desenvuelve el hombre.
            .col-md-3.order-1
              figure
                img(src='@/assets/curso/temas/tema1/27.png', alt='Texto que describa la imagen')
          .row(numero="2023" titulo="IA multimodal y modelos fundacionales").align-items-center
            .col-md-9.mb-4.mb-md-0.order-2
              p.mb-0 Emergen modelos multimodales avanzados como GPT-4 y otras propuestas de las empresas más grandes del mundo como Google, Meta, Anthropic y Microsoft, capaces de generar información combinando texto, imágenes, audio y/o video, ampliando significativamente las capacidades de la IA en escenarios diversos y complejos.
            .col-md-3.order-1
              figure
                img(src='@/assets/curso/temas/tema1/28.png', alt='Texto que describa la imagen')


    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2	Principios fundamentales

    p.mb-5 A continuación, se presenta una explicación sobre los principios fundamentales de la inteligencia artificial.

    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3	Aplicaciones en la vida cotidiana y en la industria

    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/temas/tema1/29.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") Desde su incursión, la inteligencia artificial ha tenido un impacto relevante y significativo en el hombre, tanto en su vida cotidiana, como en la industria. Esto le ha ayudado a mejorar sus procesos y a conseguir soluciones innovadoras, que han ido desde asistentes virtuales, hasta sistemas de recomendación. La IA se ha aplicado en diferentes áreas, tales como la salud, el entretenimiento, el transporte, entre otras, optimizando tareas y generando nuevas oportunidades de trabajo.  

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Aplicaciones de la IA en la vida cotidiana
    
    p.mb-5 A continuación, se presentan ejemplos concretos del uso de la inteligencia artificial en actividades cotidianas, desde el entretenimiento y la comunicación, hasta la automatización del hogar y la seguridad digital.

    .bg-full-width-2.bg-fondo-1.mb-5
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/temas/tema1/31.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Asistentes virtuales
                p.text-center Asistentes que responden preguntas o controlan dispositivos respondiendo a la voz (Siri, Alexa).
              .bg-color-white.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/temas/tema1/32.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Recomendaciones personalizadas
                p.text-center Plataformas que usan la IA para sugerir contenido según los gustos identificados en los usuarios (Netflix, YouTube, Spotify).
              .bg-color-white.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/temas/tema1/33.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Traducción automática
                p.text-center Herramientas que usan la IA para traducir textos y conversaciones, páginas web y conversaciones en tiempo real (Google Translate).
              .bg-color-white.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/temas/tema1/34.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Fotografía inteligente
                p.text-center Teléfonos inteligentes cuyas cámaras ajustan de forma automática su enfoque, brillo y filtros con algoritmos de visión por computadora.
              .bg-color-white.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/temas/tema1/35.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Domótica y casas inteligentes
                p.text-center Termostatos inteligentes, iluminación automática y aspiradoras robóticas como Roomba.
              .bg-color-white.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/temas/tema1/36.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Filtros y reconocimiento facial
                p.text-center Aplicaciones que aplican filtros para retocar las fotografías que se montan a redes sociales o que permiten desbloquear el teléfono con el rostro.
    
          .col-lg-4.order-1
            figure.position-relative
              img(src="@/assets/curso/temas/tema1/30.png", data-aos="zoom-in")
              img.pst-1(src="@/assets/curso/temas/tema1/30-2.png")
              img.pst-2(src="@/assets/curso/temas/tema1/30-1.png")
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Aplicaciones de la IA en la industria
    
    p.mb-5 A continuación,  se presentan usos destacados de la inteligencia artificial en distintos sectores productivos, donde contribuye a optimizar procesos, reducir riesgos y mejorar la toma de decisiones.

    .row.mb-5
        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta--boton.color-secundario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/tema1/37.png', alt='Texto que describa la imagen')

            h3.text-center Salud
            p.mb-0 Análisis de historial clínico, diagnóstico por medio de reconocimiento de imágenes, asistente clínico virtual.

        .col-sm-6.col-lg-3.mb-4.mb-lg-0
          .tarjeta--boton.color-secundario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/tema1/38.png', alt='Texto que describa la imagen')

            h3.text-center Finanzas
            p.mb-0 Chatbots bancarios, detección de fraude financiero, predicción de riesgos crediticios. 

        .col-sm-6.col-lg-3.mb-4.mb-sm-0
          .tarjeta--boton.color-secundario.h-100.p-4
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/tema1/39.png', alt='Texto que describa la imagen')

            h3.text-center Logística y transporte
            p.mb-0 Optimización de rutas de entrega, vehículos autónomos, gestión de inventario automático.

        .col-sm-6.col-lg-3
          .tarjeta--boton.color-secundario.p-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure
                  img(src='@/assets/curso/temas/tema1/40.png', alt='Texto que describa la imagen')

            h3.text-center Agricultura
            p.mb-0 Detección de enfermedades por reconocimiento de imágenes, predicción de cosechas, monitoreo de cultivos por drones.
    
    separador

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4	Papel en el desarrollo de software
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/temas/tema1/41.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-4.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Una de las áreas que ha sido impulsada significativamente por la inteligencia artificial es el desarrollo de software. Gracias a esta tecnología disruptiva, se han automatizado múltiples tareas, lo que ha permitido mejorar la productividad y elevar la calidad de los sistemas. La IA se está aplicando en distintos ámbitos dentro del desarrollo de software, tales como la detección de errores, las pruebas automatizadas, la gestión de proyectos, la documentación, la seguridad, el diseño de experiencia de usuario (UX) (Finio y Downie, 2024) y, de manera destacada en este curso, la generación de código.
        p(data-aos="fade-left") Mediante herramientas avanzadas, la inteligencia artificial contribuye a acelerar procesos técnicos y a respaldar una toma de decisiones más precisa y oportuna. A continuación, se describen las principales áreas de aplicación de la inteligencia artificial en el desarrollo de software, con ejemplos específicos que ilustran cada uso.
    
    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-5.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema1/42.png")
            .col-lg-7
              h5 Generación de código
              p Herramientas que generan código automáticamente. 
              p.mb-0 <b>Ejemplo:</b> Síntesis de código, donde se crea una función completa a partir de una solicitud en lenguaje natural del usuario.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema1/43.png")
            .col-lg-7
              h5 Detección y corrección de errores
              p Identificación anticipada de errores y corrección en tiempo real.
              p.mb-0 <b>Ejemplo:</b> Predicción de errores, mediante el análisis de patrones para anticipar fallos futuros y sugerir ajustes mientras se escribe el código. 
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema1/44.png")
            .col-lg-7
              h5 Automatización de pruebas
              p Creación automática de casos de prueba y priorización de pruebas críticas.
              p.mb-0 <b>Ejemplo:</b> Optimización de pruebas, donde se generan pruebas automatizadas y se priorizan las más relevantes, reduciendo tiempos y recursos. 
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema1/45.png")
            .col-lg-7
              h5 Gestión de proyectos
              p Automatización de tareas administrativas y estimación de tiempos basada en datos históricos. 
              p.mb-0 <b>Ejemplo:</b> Estimación de tiempo, en la que se analiza el historial de proyectos anteriores para crear cronogramas precisos y asignar mejor los recursos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema1/46.png")
            .col-lg-7
              h5 Documentación
              p Generación automática de documentación técnica del código y traducción de documentos. 
              p.mb-0 <b>Ejemplo:</b> Traducción, en la que los documentos técnicos se traducen a varios idiomas para facilitar el acceso global a proyectos de código abierto.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema1/47.png")
            .col-lg-7
              h5 Refactorización y optimización
              p Mejora de la estructura del código para aumentar su legibilidad y eficiencia. 
              p.mb-0 <b>Ejemplo:</b> Revisión de código, que detecta malas prácticas y sugiere mejores soluciones según estándares de calidad.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema1/48.png")
            .col-lg-7
              h5 Mejora de la seguridad
              p Identificación de vulnerabilidades en el código y propuesta de medidas correctivas. 
              p.mb-0 <b>Ejemplo:</b> Detección de amenazas, como el reconocimiento de una inyección SQL y la recomendación de una solución para mitigar el riesgo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema1/49.png")
            .col-lg-7
              h5 Diseño de UX
              p Generación automática de interfaces y ejecución de pruebas A/B para evaluar su eficacia.  
              p.mb-0 <b>Ejemplo:</b> Generación de IU, donde la IA crea una interfaz de usuario personalizada a partir de los patrones de comportamiento recopilados.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema1/50.png")
            .col-lg-7
              h5 Diseño arquitectónico
              p Creación de arquitecturas de software eficientes y escalables, alineadas con buenas prácticas. 
              p.mb-0 <b>Ejemplo:</b> Arquitectura de la solución, donde se automatiza el diseño técnico del sistema e infraestructura necesaria para un despliegue eficiente.  
    
    .bg-full-width.bg-color-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/temas/tema1/51.png", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white Actualmente la IA ha transformado considerablemente el desarrollo de software, automatizando tareas repetitivas, mejorando la productividad, optimizando la toma de decisiones, facilitando las pruebas y las depuraciones, permitiendo la personalización de las experiencias de usuarios y prediciendo las tendencias del mercado. Con el desarrollo de estas capacidades de la IA, se ha impulsado la eficiencia, la calidad y se sigue innovando en la programación moderna (Sancho, 2023).
    
        

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
    datosLineaTiempoB: [
      {
        titulo: '01 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/curso/temas/tema1/3.png'),
      },
      {
        titulo: '02 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/curso/temas/tema1/3.png'),
      },
      {
        titulo: '03 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/curso/temas/tema1/3.png'),
      },
      {
        titulo: '04 de marzo',
        texto:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus augue, pulvinar ac auctor at, pellentesque id diam. Praesent maximus, felis sollicitudin pharetra vestibulum, turpis tortor tincidunt augue, in efficitur urna diam eleifend magna.',
        icono: require('@/assets/curso/temas/tema1/3.png'),
      },
    ],
    datosLineaTiempoA: [
      {
        ano: '100.000 - 10.000 A.C.',
        titulo: 'Período Paleolítico',
        texto: 'Pieles, pelo de animales, hojas, huesos y conchas.',
      },
      {
        ano: '10.000 - 5.000 A.C.',
        titulo: 'Periodo Mesolítico',
        texto:
          'Broches hechos con hueso, abrigos, gorros, botas y zapatillas de cuero.',
      },
      {
        ano: '10.000 - 5.000 A.C.',
        titulo: 'Periodo Neolítico',
        texto: 'Vestimenta de fibras animales y vegetales, pulseras de marfil.',
      },
    ],
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
