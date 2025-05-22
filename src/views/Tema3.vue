<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Prompt
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/temas/tema3/1.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-2.p-4.mb-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/temas/tema3/2.png", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Cuando se hace referencia a un prompt en inteligencia artificial, se habla de la instrucción que se le proporciona a la IA gen para que, con base en ella, genere una respuesta precisa según la tarea solicitada. Esta respuesta puede estar en formato de texto, traducción, imagen, video, audio u otro tipo de contenido que la herramienta esté diseñada para producir. La calidad del prompt influye directamente en la precisión de la respuesta: un prompt bien formulado permite obtener resultados útiles, mientras que uno confuso o incompleto puede generar errores o respuestas poco relevantes.

        p(data-aos="fade-left") Herramientas como Prompt Storm y PromptBase son de gran utilidad para mejorar la redacción de prompts y optimizar la interacción con la IA gen (PBS, 2024). Parte del éxito en el aprovechamiento de las capacidades de una IA gen radica en la redacción de un buen prompt. Una instrucción clara y bien estructurada permite delegar efectivamente la tarea a la herramienta, mientras que una formulación deficiente traslada la carga de responsabilidad al usuario.  Un prompt puede estar compuesto por uno o varios elementos, entre los cuales se encuentran:
    
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Contexto" :icono="require('@/assets/bullets/1.svg')")
        .row.align-items-center
          .col-md-7.mb-4.mb-md-0.order-lg-2
            h4 Contexto
            p.mb-0 Le da un direccionamiento al prompt, eso quiere decir que entre más claridad y detalle se tenga sobre el contexto, más precisa será la respuesta generada. Dar información como el estilo, el tono, el lugar, el propósito, los requisitos, el lenguaje o cualquier otro dato adicional ayudarán a dirigir el modelo hacía lo que realmente se necesita y se espera de la IA gen.
        
          .col-md-5.order-lg-1
            figure
              img(src='@/assets/curso/temas/tema3/3.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Datos de entrada" :icono="require('@/assets/bullets/2.svg')")
        .row.align-items-center
          .col-md-7.mb-4.mb-md-0.order-lg-2
            h4 Datos de entrada
            p.mb-0 Hace referencia a la información o pregunta específica que se le da al modelo, para que este genere la respuesta esperada o realice la acción solicitada. Hay que tener claro que tipos de datos o preguntas se le están dando al modelo, porque de esto también depende la precisión y relevancia de la respuesta que la IA gen de al usuario.
        
          .col-md-5.order-lg-1
            figure
              img(src='@/assets/curso/temas/tema3/4.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Indicador de salida" :icono="require('@/assets/bullets/3.svg')")
        .row.align-items-center
          .col-md-7.mb-4.mb-md-0.order-lg-2
            h4 Indicador de salida
            p.mb-0 Hace referencia al tipo o formato de la salida que se requiere; por ejemplo, si se solicita un ensayo o una imagen publicitaria.
        
          .col-md-5.order-lg-1
            figure
              img(src='@/assets/curso/temas/tema3/5.png', alt='Texto que describa la imagen')

   
    .row.align-items-center.bg-color-5.p-4
      .col-lg-auto
        img(src="@/assets/curso/temas/tema3/6.png", style="max-width: 90px").mx-auto
      .col-lg.text-white
        p.mb-0 Es importante tener en cuenta que no todos los componentes de un prompt serán necesarios en cada caso. Sin embargo, cuanto más compleja sea la tarea asignada a la IA gen, más detallada y completa deberá ser la redacción del prompt, especialmente si se espera obtener una respuesta clara, coherente y ajustada a lo solicitado.

    separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Principios de prompting  
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/temas/tema3/7.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-4.p-4.mb-5(data-aos="fade-left")
          p.mb-0 La calidad de los resultados generados por un modelo de lenguaje grande (LLM) depende en gran medida de cómo se formulan las instrucciones, o prompts, que se le proporcionan. Factores como la especificidad, la claridad y el contexto son fundamentales para que el modelo comprenda correctamente la tarea asignada y genere respuestas relevantes y precisas.
        p(data-aos="fade-left") Con el fin de mejorar la interacción entre los usuarios y los modelos de IA gen, el artículo “<em>Principled Instructions Are All You Need for Questioning LLaMA-1/2, GPT-3.5/4</em>” presenta 26 principios de incitación, diseñados para guiar la redacción de instrucciones más efectivas. Estos principios proponen un enfoque estructurado que contribuye a aumentar la precisión y pertinencia de las respuestas generadas.
        p A continuación, se comparten los principios más relevantes, acompañados de ejemplos que facilitan su comprensión y aplicación práctica.
    
    .row.mb-5.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema3/8.png", data-aos="zoom-in")
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-7")
          div(titulo="Vaya directo al grano")
            p Si se quieren respuestas concisas, no es necesario ser educado con la IA, así que las palabras (gracias, por favor, si no te importa, me gustaría, etc.) están sobrando, así que el usuario debe ir directo al grano. 
            p.mb-0 <b>Ejemplo:</b> ¿Cuál es la capital de Colombia?
          div(titulo="Definir la audiencia")
            p Hay que tener identificado el público al cual va dirigido el prompt, para poder darle un contexto, y así especificárselo a la IA. 
            p.mb-0 <b>Ejemplo:</b> Explica el concepto de programación estructurada a un experto en desarrollo de software.
          div(titulo="Divida las tareas complejas")
            p Cuando la tarea a solicitar es compleja, lo mejor es dividir el prompt en una serie de tareas más simples. 
            p.mb-0 <b>Ejemplo:</b> Primero, explica qué es un algoritmo, luego cómo está conformado y por último cuál es su importancia en el desarrollo de software.
          div(titulo="Utilice directivas afirmativas")
            p Utiliza directrices afirmativas como “haz esto” mientras evitas lenguaje negativo como “no lo hagas”. 
            p.mb-0 <b>Ejemplo:</b> Dime la lista de los municipios que conforman al departamento de La Guajira.
          div(titulo="Solicitar claridad")
            pdo se desee comprender un tema de la mejor manera, formula la pregunta de forma simple y pídele a la IA que también te responda en una forma simple y sencilla, sin complicar la explicación. 
            p.mb-0 <b>Ejemplo:</b> Explícale cómo funciona un teléfono móvil a un niño de 5 años.
    
    .row.mb-5.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/temas/tema3/9.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-7")
          div(titulo="Utilice indicaciones basadas en ejemplos")
            p Proporciona un ejemplo de lo que solicita, junto con la instrucción solicitada. 
            p.mb-0 <b>Ejemplo:</b> Escribe una poesía sobre la tierra. Tienes de guía este ejemplo: “La arena que piso, delimita el camino que busco recorrer”.
          div(titulo="Aclarar las tareas")
            p Para mayor claridad del prompt, puede especificarle la misión, diciéndole: “Su tarea es” y “Usted debe”. 
            p.mb-0 <b>Ejemplo:</b> Su tarea es hablar sobre los lenguajes de programación. Debe incluir un listado de los 10 lenguajes más populares en los años 2022, 2023 y 2024.
          div(titulo="Solicita respuesta similares a las de un humano")
            p Dentro del prompt, incluye la frase: “Responde la pregunta de manera natural, como la de un humano”. 
            p.mb-0 <b>Ejemplo:</b> ¿Explica el procesamiento de datos en informática? Responde como un humano.
          div(titulo="Fomentar el pensamiento paso a paso")
            p Al darle el prompt, incluir frases como “piensa paso a paso”. 
            p.mb-0 <b>Ejemplo:</b> Piensa paso a paso y explícame cómo desarrollar un algoritmo que sume dos números.
          div(titulo="Promover respuestas imparciales")
            p Incluye en el prompt frases como: “Asegúrate de que la respuesta sea imparcial y no esté basada en estereotipos”. 
            p.mb-0 <b>Ejemplo:</b> Háblame sobre la política en los últimos 20 años en Colombia. Asegúrate de que la respuesta sea imparcial y no esté basada en estereotipos.
    
    p.mb-5 Algunas estrategias adicionales que enriquecen la formulación de prompts, favorecen el diálogo continuo y mejoran la calidad de las respuestas generadas son: 

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-5.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema3/10.png")
            .col-lg-7
              h5 Facilitar el diálogo
              p Mientras se interactúa con la IA, permite que esta recolecte datos precisos, haciéndole preguntas, hasta que tenga la información necesaria para proporcionar la mejor respuesta a la necesidad generada. 
              p.mb-0 <b>Ejemplo:</b> Necesito que me ayudes a hacer un proyecto, me gustaría que me hicieras preguntas para que conozcas mis necesidades, antes de darte una respuesta sobre lo que deseo de mi proyecto.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema3/11.png")
            .col-lg-7
              h5 Enseñar con exámenes
              p Cuando se quiere utilizar la IA para estudiar, o se desea profundizar en un tema en particular, plantee el prompt con frases como “Enséñame sobre el tema X e incluye un examen al final sin las respuestas”. 
              p.mb-0 <b>Ejemplo:</b> Enséñame sobre pseudocódigos e incluye un examen al final sin las respuestas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema3/12.png")
            .col-lg-7
              h5 Asignar roles
              p Para que la IA actúe con mayor conocimiento o experiencia en un contexto en específico, asígnele un rol. 
              p.mb-0 <b>Ejemplo:</b> Como experto en Ingeniería de Software, necesito que me expliques el marco de trabajo SCRUM.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema3/13.png")
            .col-lg-7
              h5 Utilice delimitadores
              p Los delimitadores (###_____###) pueden darle a la IA diferentes ideas de las divisiones o secciones que contiene el prompt. 
              p.mb-0 <b>Ejemplo:</b> ###Tarea### Escribe un resumen de la novela Cien años de soledad. ###Detalles### Céntrate en el personaje de Aureliano Buendía y sus motivaciones políticas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema3/14.png")
            .col-lg-7
              h5 Repetir términos clave
              p Repetir palabras o frases en varias ocasiones dentro del mensaje que comprende el prompt, con el fin de darles relevancia. 
              p.mb-0 <b>Ejemplo:</b> Escribe un algoritmo que calcule si un número es par. El algoritmo debe verificar si el número es par, es decir, si es divisible por 2. 
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema3/15.png")
            .col-lg-7
              h5 Combinar técnicas
              p Cuando se necesitan respuestas más elaboradas o profundas, se recomienda combinar el razonamiento paso a paso (cadena de pensamiento - CoT) con instrucciones claras. 
              p.mb-0 <b>Ejemplo:</b> Piensa paso a paso en cómo escribir un algoritmo para ordenar una lista de números en orden ascendente. Aquí te dejo un ejemplo de lo que debes incluir: inicializar la lista, comparar los elementos, intercambiarlos si es necesario y mostrar la lista ordenada.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema3/16.png")
            .col-lg-7
              h5 Revisar sin cambiar el estilo
              p Cuando se desea mejorar un texto existente, manteniendo el tono y el estilo original, se le puede solicitar a la IA que revise cada párrafo, mejorando únicamente la gramática y el vocabulario. 
              p.mb-0 <b>Ejemplo:</b> Revisa el siguiente texto, corrige ortografía y gramática sin cambiar su estilo: “XXXXXXXXXXXXX”.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema3/17.png")
            .col-lg-7
              h5 Gestionar indicaciones de código complejas
              p Cuando se trata de tareas de codificación que incluyan varios archivos, proporcione instrucciones claras e identifique lo que debe hacer la IA. 
              p.mb-0 <b>Ejemplo:</b> Escribe un script en Python que lea dos archivos CSV, combine sus datos en uno solo y guarde el archivo resultante en un nuevo archivo CSV.  
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Interacción continua	
    
    p.mb-5 Cuando se desea perfeccionar una tarea como un proyecto, se puede continuar el proceso pidiendo ajustes. Ejemplo:

    .row.mb-5
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/18.png', alt='Texto que describa la imagen')
          h3.text-center Interacción inicial
          p.mb-0 Escribe un resumen ejecutivo para un plan de negocios de una empresa de tecnología.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/19.png', alt='Texto que describa la imagen')
          h3.text-center Profundización
          p.mb-0 Expande el resumen ejecutivo, profundiza en los objetivos a largo plazo de la empresa.
      .col-sm-6.col-lg-3.mb-4.mb-sm-0
        .tarjeta--boton.color-secundario.h-100.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/20.png', alt='Texto que describa la imagen')
          h3.text-center Más detalles
          p.mb-0 Profundiza en las proyecciones financieras, da detalles de estimados de ingresos y costos
      .col-sm-6.col-lg-3
        .tarjeta--boton.color-secundario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/21.png', alt='Texto que describa la imagen')
          h3.text-center Finalización
          p.mb-0 Organízame toda la información proporcionada y dámela en un documento en Word para descargar.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema3/22.png", data-aos="zoom-in")
      .col-lg-8
        
        p(data-aos="fade-left") Aunque se han compartido diversos principios de prompting, es importante aclarar que no son los únicos existentes. A medida que los usuarios interactúan con la IA gen, pueden ir adquiriendo experiencia y descubriendo las formas que mejores resultados les ofrecen, lo que les permitirá optimizar su trabajo. Esta práctica continua también puede facilitar la creación de plantillas personalizadas de prompts, que podrán guardar y reutilizar según la temática, el contexto, el formato o la necesidad específica.
        .bg-color-8.px-4.py-5(data-aos="fade-left")
          p.mb-0 En conjunto, los principios de prompting se consolidan como estrategias fundamentales para que los usuarios interactúen de manera precisa con los distintos modelos de inteligencia artificial generativa. Aplicarlos permite obtener resultados más relevantes, coherentes y ajustados a los objetivos planteados.

    separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Técnicas de mejora de la interacción con modelos de inteligencia artificial
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/temas/tema3/23.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-8.p-4.mb-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/temas/tema3/24.png", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Quienes deseen aprovechar al máximo las capacidades que ofrecen tecnologías avanzadas como la IA gen, deben desarrollar habilidades que les permitan interactuar con ellas de manera eficaz. Una de las formas más efectivas de lograrlo es mediante el uso de prompts bien estructurados, los cuales permiten obtener respuestas precisas y coherentes, mejorando la experiencia del usuario y los resultados obtenidos.

        p(data-aos="fade-left") A continuación, se presentan algunas técnicas de mejora que pueden aplicarse en la interacción con modelos de IA gen, con el propósito de optimizar la calidad de las respuestas y, en consecuencia, maximizar la productividad en las tareas asignadas.
        
    .row.mb-5.align-items-center.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema3/25.png", data-aos="zoom-in")
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-7")
          div(titulo="Diseño de prompts eficientes")
            p Para el diseño de un prompt eficiente, para una interacción óptima se pueden seguir estos principios fundamentales: 
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-9
                p.mb-0 <b>Claridad y concisión:</b> hay que ser claro en lo que se pide, evitando ambigüedades, utilizando un lenguaje preciso para que la IA gen pueda entender exactamente lo que se está necesitando. Evite caer en preguntas vagas o demasiado generales. Especifique la tarea, el contexto, el formato, etc. 
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-9
                p.mb-0 <b>Contextualización:</b> proporciona suficiente información sobre el contexto, para que la IA gen entienda el propósito y el ambiente en donde se desarrolla la tarea y el público objetivo. Específica el estilo, ya sea formal, técnico o conversacional.
          div(titulo="Uso de ejemplos para mejorar respuestas")
            p Una técnica efectiva consiste en proporcionar ejemplos determinados (cuando se tienen) a la IA, para que tenga un modelo concreto de lo que se espera. Con los ejemplos el modelo puede ser guiado en la generación de las respuestas más apegada a lo que se espera de ellas.
          div(titulo="Iteración y refinamiento")
            p Muchas veces la primera respuesta que se obtiene de la IA gen no es la perfecta, especialmente cuando se trata de tareas complejas; por ello, el iterar o ir ajustando el prompt, se convierte en una técnica fundamental para ir perfeccionado los resultados. De ahí, que la importancia de esta técnica radica en ir evaluando la respuesta generada, para ver si satisface las necesidades del prompt asignado y del problema del usuario. Cuando se considera que la respuesta generada se puede seguir mejorando, se va ajustando el prompt, para ello se le puede ir anexando contexto, detalles o aclaraciones, o cualquier información adicional que lleve a la IA gen a entender mucho mejor. Esta técnica se puede ir usando continuamente, hasta que logre la generación de la respuesta que le satisfaga.
          
    
    .row.mb-5.align-items-center.mb-5
      .col-lg-3.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/temas/tema3/26.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-7")
          div(titulo="Comandos específicos y tareas definidas")
            p Cuando se trata de tareas técnicas, tales como desarrollo de software, optimización de procesos o alguna tarea especializada, es de vital importancia especificar el tipo de resultado que se espera; como por ejemplo, especificarle si desea que la IA gen escriba un código, depure, genere una documentación, aplique una técnica o procedimiento en especial, se apoye en una metodología o un marco de trabajo determinado, etc.
          div(titulo="Comprensión de las limitaciones")
            p Para nadie es un secreto el poder y la fortaleza de la que goza la IA, pero aun así tiene sus limitaciones, por lo tanto, es primordial tener en cuenta que estos modelos pueden generar respuestas erróneas o inconsistentes; sobre todo cuando el prompt implementado es ambiguo o la tarea asignada a la IA gen se encuentra fuera del alcance de su entrenamiento. Para ello, cada vez que sea posible, se recomienda validar la respuesta generada, especialmente cuando se trabaja en contextos críticos, entre las que se pueden mencionar las áreas médicas, legales o financieras.
    

    separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Ejemplos de prompts efectivos y no efectivos
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/temas/tema3/27.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Dado que los prompts son instrucciones clave para interactuar con una IA gen, es fundamental comprender que la calidad de su redacción influye directamente en los resultados obtenidos. Un prompt efectivo debe ser claro, específico y detallado, de modo que el modelo entienda correctamente la tarea y pueda generar una respuesta precisa y relevante.
        .bg-color-2.p-4.mb-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/temas/tema3/28.png", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Por el contrario, un prompt vago, ambiguo o impreciso, que carece de información o contexto suficiente, se considera inefectivo, ya que produce respuestas confusas, incorrectas o fuera de lugar. Esto entorpece el proceso, obliga al usuario a rehacer sus instrucciones y demanda más tiempo para alcanzar un resultado útil. Por ello, aprender a formular prompts adecuados es clave para optimizar el trabajo con inteligencia artificial y garantizar que las tareas se resuelvan de manera ágil y acertada.
        p A continuación, se presenta un listado de ejemplos de prompts efectivos y no efectivos, aplicados a diferentes áreas o temáticas:
        
        
    .row.mb-5.align-items-center.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema3/29.png", data-aos="zoom-in")
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-7")
          div(titulo="Asistentes virtuales en atención al cliente")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-9
                p.mb-0 <b>Prompt no efectivo:</b> Responde a las preguntas de los clientes. 
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-9
                p.mb-0 <b>Prompt efectivo:</b> Responde a las preguntas frecuentes sobre el horario de atención, el estado de los pedidos y las políticas de devoluciones de un ecommerce.
          div(titulo="Generación automática de reportes financieros")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-9
                p.mb-0 <b>Prompt no efectivo:</b> Haz un reporte financiero.  
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-9
                p.mb-0 <b>Prompt efectivo:</b> Genera un reporte financiero trimestral que incluya un análisis de ingresos, gastos, márgenes de ganancia y recomendaciones de optimización basadas en los datos históricos proporcionados.
          div(titulo="Generación de contenido para marketing digital")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-9
                p.mb-0 <b>Prompt no efectivo:</b> Escribe un post para redes sociales.
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-9
                p.mb-0 <b>Prompt efectivo:</b> Escribe un post para redes sociales sobre el lanzamiento de un nuevo producto en el sector tecnológico, utilizando un tono informal, con un llamado a la acción para visitar nuestra página web.
          div(titulo="Traducción automática de textos técnicos")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-9
                p.mb-0 <b>Prompt no efectivo:</b> Traduce este documento.  
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-9
                p.mb-0 <b>Prompt efectivo:</b> Traduce este manual técnico de instalación de software del inglés al español, manteniendo la precisión técnica y terminología especializada.
          div(titulo="Generación de diseño de productos")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-9
                p.mb-0 <b>Prompt no efectivo:</b> Diseña un producto. 
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-9
                p.mb-0 <b>Prompt efectivo:</b> Diseña un prototipo de una lámpara inteligente que pueda ajustarse a la temperatura ambiente, controlada por voz, y que tenga un estilo moderno.
          
    
    .row.mb-5.align-items-center.mb-5
      .col-lg-3.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/temas/tema3/30.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-7")
          div(titulo="Asistentes de programación automática (programación estructurada)")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-9
                p.mb-0 <b>Prompt no efectivo:</b> Escribe un código. 
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-9
                p.mb-0 <b>Prompt efectivo:</b> Escribe un código en Python para una aplicación que calcule el área de un triángulo con base en la fórmula de altura y base proporcionada por el usuario.
          div(titulo="Predicción de tendencias del mercado")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-9
                p.mb-0 <b>Prompt no efectivo:</b> Predice el futuro del mercado. 
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-9
                p.mb-0 <b>Prompt efectivo:</b> Usa análisis de series temporales para predecir las tendencias de ventas de productos electrónicos para el próximo trimestre, basándote en los datos históricos de ventas y factores económicos.
          div(titulo="Optimización de procesos de producción")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-9
                p.mb-0 <b>Prompt no efectivo:</b> Mejora la producción. 
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-9
                p.mb-0 <b>Prompt efectivo:</b> Optimiza el proceso de producción en una planta de ensamblaje, identificando los cuellos de botella y sugiriendo mejoras para reducir el tiempo de producción y aumentar la eficiencia en un 20 %.
          div(titulo="Generación de contenido académico")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-9
                p.mb-0 <b>Prompt no efectivo:</b> Escribe un artículo sobre la teoría de la relatividad 
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-9
                p.mb-0 <b>Prompt efectivo:</b> Escribe un artículo académico de 1.500 palabras sobre la teoría de la relatividad de Einstein, enfocándote en su impacto en la física moderna. Incluye explicaciones sobre la relatividad especial y general, citas clave y referencias bibliográficas en formato APA.
    
    p.mb-5 Otros ejemplos que ilustran cómo transformar indicaciones imprecisas en instrucciones detalladas, aplicadas a áreas como programación, análisis de datos, traducción técnica y generación de contenido visual o académico, para obtener respuestas más precisas y útiles por parte de la inteligencia artificial.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-5.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema3/31.png")
            .col-lg-7
              h5 Traducción automática avanzada
              p <b>Prompt no efectivo:</b> Traduce este texto al inglés. 
              p <b>Prompt efectivo:</b> Traduce este texto técnico sobre la teoría cuántica del español al inglés, manteniendo el tono formal y utilizando terminología científica precisa. Asegúrate de que las traducciones sean claras para un público especializado en física.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema3/32.png")
            .col-lg-7
              h5 Análisis de sentimientos en redes sociales
              p <b>Prompt no efectivo:</b> Analiza los sentimientos en estos tweets. 
              p <b>Prompt efectivo:</b> Realiza un análisis de sentimientos en los 100 tweets recientes sobre el tema “cambio climático”. Clasifica las opiniones en positivas, negativas y neutrales, y proporciona un análisis breve sobre las tendencias predominantes en la conversación.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema3/33.png")
            .col-lg-7
              h5 Creación de contenido visual (diseño gráfico)
              p <b>Prompt no efectivo:</b> Diseña un logo. 
              p <b>Prompt efectivo:</b> Diseña un logo moderno para una startup tecnológica que ofrece soluciones de inteligencia artificial. El logo debe reflejar innovación, tecnología y simplicidad. Usa una paleta de colores minimalista con azul y blanco.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema3/34.png")
            .col-lg-7
              h5 Predicción de tendencias en el mercado financiero
              p <b>Prompt no efectivo:</b> Haz una predicción sobre el mercado financiero. 
              p <b>Prompt efectivo:</b> Usa un modelo de regresión lineal múltiple para predecir la evolución de las acciones de Tesla en los próximos 3 meses, basándote en datos históricos de precios, volumen de transacciones y factores económicos globales.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema3/35.png")
            .col-lg-7
              h5 Generación de documentación
              p <b>Prompt no efectivo:</b> Escribe documentación para el código. 
              p <b>Prompt efectivo:</b> Escribe documentación para la función en Python que calcula el promedio de una lista de números, incluyendo ejemplo de uso y explicación de los parámetros. 
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema3/36.png")
            .col-lg-7
              h5 Asistentes de programación automática (algoritmo)
              p <b>Prompt no efectivo:</b> Haz un algoritmo que calcule el promedio de un grupo de estudiantes. 
              p <b>Prompt efectivo:</b> Escribe un algoritmo que reciba las notas de 10 estudiantes, calcule el promedio general del grupo y determine cuántos estudiantes aprobaron (nota >= 3).

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema3/37.png")
            .col-lg-7
              h5 Asistentes de programación automática (algoritmo)
              p <b>Prompt no efectivo:</b> Haz un algoritmo que haga algo si se cumple una condición. 
              p <b>Prompt efectivo:</b> Escribe un algoritmo que verifique si un número es mayor que 10 y, si lo es, imprima “El número es mayor que 10”.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema3/38.png")
            .col-lg-7
              h5 Asistentes de programación automática (programación estructurada)
              p <b>Prompt no efectivo:</b> Escribe un programa que calcule el área de un círculo. 
              p <b>Prompt efectivo:</b> Escribe un programa en C que calcule el área de un círculo, pidiendo al usuario el radio, y asegúrate de verificar que el valor ingresado sea válido (mayor que cero).
  
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema3/39.png")
            .col-lg-7
              h5 Asistentes de programación automática (programación estructurada)
              p <b>Prompt no efectivo:</b> Haz un código que haga una suma. 
              p <b>Prompt efectivo:</b> Escribe un código en Python que reciba una lista de números enteros, calcule su promedio y determine si el promedio es mayor que 10 utilizando una estructura de control if/else.
    
    p.mb-5 Para profundizar en el uso de una IA generativa y aprovechar sus beneficios, se invita a revisar el videotutorial titulado Uso de prompt, en el cual se comparten ejemplos prácticos, recomendaciones e instrucciones para facilitar el uso de estas herramientas:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    separador

    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Casos de usos en entornos reales
    
    p.mb-5 A continuación se comparten una serie de ejemplos que dan muestra del aprovechamiento que se les puede dar a la IA gen en diferentes entornos reales, en donde el hombre se desempeña a nivel académico, laboral o empresarial:

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-5.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/temas/tema3/40.png")
            .col-lg-7.order-1
              h5 Asistentes virtuales en atención al cliente
              p Las empresas utilizan IA generativa en plataformas como chatbots para responder preguntas comunes de los clientes de manera inmediata, reduciendo la carga de trabajo del personal. 
              p <b>Industria:</b> comercio electrónico, atención al cliente.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/temas/tema3/41.png")
            .col-lg-7.order-1
              h5 Generación automática de reportes financieros
              p Profesionales de la contabilidad y las finanzas emplean herramientas de IA generativa como GPT-3 para elaborar informes financieros detallados a partir de grandes volúmenes de datos. 
              p <b>Industria:</b> finanzas, auditoría.


          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/temas/tema3/42.png")
            .col-lg-7.order-1
              h5 Generación de contenido para marketing digital
              p Las empresas crean publicaciones para redes sociales, anuncios y entradas de blog mediante IA generativa, agilizando la producción de contenido personalizado. 
              p <b>Industria:</b> marketing digital, comercio electrónico.


          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/temas/tema3/43.png")
            .col-lg-7.order-1
              h5 Traducción automática de textos técnicos
              p Compañías internacionales usan IA generativa para traducir documentación técnica, contratos y manuales en varios idiomas, ampliando su presencia global. 
              p <b>Industria:</b> software, manufactura.


          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/temas/tema3/44.png")
            .col-lg-7.order-1
              h5 Generación de diseño de productos
              p Empresas de diseño utilizan IA generativa para desarrollar ideas de productos, prototipos y visualizaciones, acelerando el desarrollo. 
              p <b>Industria:</b> desarrollo de productos, tecnología.
 
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/temas/tema3/45.png")
            .col-lg-7.order-1
              h5 Asistentes de programación automática
              p Herramientas como GitHub Copilot o Tabnine sugieren código o generan funciones completas a partir de comentarios, facilitando el trabajo del programador. 
              p <b>Industria:</b> desarrollo de software.


          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/temas/tema3/46.png")
            .col-lg-7.order-1
              h5 Predicción de tendencias del mercado
              p En el ámbito financiero, se aplica IA generativa para analizar fluctuaciones bursátiles, identificar oportunidades de inversión y estudiar patrones de consumo. 
              p <b>Industria:</b> finanzas, comercio.


          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/temas/tema3/47.png")
            .col-lg-7.order-1
              h5 Optimización de procesos de producción
              p La IA generativa contribuye a mejorar procesos industriales como el manejo de inventarios y la logística, reduciendo costos operativos. 
              p <b>Industria:</b> manufactura, cadena de suministro.
    
    .bg-full-width.bg-color-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/temas/tema3/48.png", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white Los casos de uso reales de la IA gen son diversos, amplios y variados, demostrando que pueden darse desde la automatización de tareas repetitivas hasta el mejoramiento de la calidad y la eficiencia en procesos más complejos, lo que da muestras de la revolución que se está dando al interior de muchas empresas.

  
         



</template>

<script>
export default {
  name: 'Tema3',
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
