<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> fortalecer los conocimientos relacionados con inteligencia artificial generativa',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es la inteligencia artificial generativa?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una inteligencia artificial capaz de reconocer patrones en datos existentes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un tipo de IA que solo realiza tareas repetitivas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un tipo de IA que solo realiza tareas repetitivas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un tipo de IA utilizada solo en videojuegos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es el propósito principal de un "<em>Prompt</em>" en inteligencia artificial?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crear bases de datos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Dar instrucciones a la IA para obtener una respuesta específica.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Controlar la memoria de la IA.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incrementar la velocidad de procesamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué significa "contextualizar" en el contexto de los <em>Prompt</em>s?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Escribir mensajes largos sin especificar detalles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Proporcionar suficiente información relevante para guiar la IA.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cambiar el tipo de IA utilizada para la tarea.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Escribir un <em>Prompt</em> sin ejemplos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué es la "iteración" en el proceso de interacción con modelos de IA?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ajustar el <em>Prompt</em> o la solicitud para mejorar las respuestas generadas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Generar múltiples respuestas con el mismo <em>Prompt</em>.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Usar el mismo <em>Prompt</em> siempre.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Probar diferentes modelos de IA al mismo tiempo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cómo puede la IA generativa ser útil en la vida cotidiana?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Generando contenido como texto, imágenes y música.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Realizando tareas repetitivas únicamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Controlando dispositivos electrónicos sin interacción humana.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Solucionando problemas de <em>hardware</em> en computadoras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es el papel de la inteligencia artificial en el desarrollo de <em>software</em>?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo optimiza la velocidad de procesamiento de datos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ayuda a generar y mejorar código, aumentar la productividad y resolver problemas complejos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Realiza todas las tareas sin intervención humana.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo se utiliza para la depuración de código.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué caracteriza a la Inteligencia Artificial Generativa?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Su capacidad para reconocer patrones en grandes volúmenes de datos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Su capacidad para solo clasificar datos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Su capacidad para generar contenido original como texto, imágenes y música.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Su capacidad para almacenar grandes cantidades de información.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de los siguientes modelos es un ejemplo de inteligencia artificial generativa?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Naive Bayes',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'SVM (Máquinas de Soporte Vectorial)',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Árboles de decisión',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'GPT-4',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cómo ha evolucionado la inteligencia artificial generativa desde sus inicios?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ha avanzado desde sistemas de reglas simples hacia modelos complejos capaces de generar contenido creativo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Inicialmente, solo se usaba para tareas de clasificación de imágenes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Se ha centrado principalmente en mejorar el reconocimiento de voz.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Solo ha mejorado la eficiencia en el procesamiento de datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué distingue a la inteligencia artificial generativa de otros tipos de inteligencia artificial?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Su capacidad para ejecutar tareas físicas en el mundo real.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Su capacidad para procesar grandes volúmenes de datos en tiempo real.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Su capacidad para generar contenido nuevo a partir de ejemplos previos, como escribir textos o crear imágenes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Su capacidad para almacenar grandes cantidades de datos para la predicción futura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'La IA generativa se limita a tareas de análisis de datos ya existentes.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'ChatGPT es un ejemplo de herramienta de IA generativa que permite crear texto y código.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '<em>Prompt</em>Base y <em>Prompt</em> <em>Storm</em> son herramientas para generar imágenes realistas.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Las técnicas de <em>Prompt</em>ing ayudan a mejorar la interacción con modelos de IA generativa.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Un <em>Prompt</em> efectivo es siempre corto, sin contexto y sin instrucciones claras.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
