<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Herramientas de inteligencia artificial generativas
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/temas/tema2/1.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") La inteligencia artificial generativa (IA gen) es una de las ramas de la IA diseñada para crear contenido nuevo y original, a partir de datos previamente aprendidos. Tiene la capacidad de generar textos, música, imágenes y videos, entre otros formatos, simulando patrones propios del lenguaje, la ciencia, el arte o la programación. Gracias al aprendizaje profundo, estas tecnologías pueden comprender estructuras complejas y reutilizar ese conocimiento para resolver nuevos problemas. Por ejemplo, la IA gen puede sostener una conversación como si fuera un ser humano, escribir un poema o pintar un paisaje.
    
        .bg-color-1.p-4.mb-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/temas/tema2/2.png", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Su aplicación se extiende a diversos sectores, y no solo reproduce información, sino que también transforma la manera en que las personas se relacionan con la tecnología, potenciando la creatividad y la productividad.
        p(data-aos="fade-left") La IA gen funciona a partir de modelos de aprendizaje automático entrenados con grandes volúmenes de datos. Entre estos destacan los modelos fundacionales (FM), capaces de desempeñar múltiples tareas al identificar patrones y relaciones en datos no etiquetados. Dentro de los FM se encuentran los modelos de gran tamaño (LLM), como GPT, especializados en la generación de texto, conversación o resumen. Estos modelos manejan miles de millones de parámetros, lo que les permite generar contenido coherente a partir de poca información de entrada, utilizando conocimientos adquiridos en distintos contextos (AWS, 2023).
    
    separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1	Características
    
    p.mb-5 La IA gen simboliza la verdadera evolución en el área de la IA, donde se destaca por la capacidad que tiene no solo por el análisis de los datos, sino por la capacidad que tiene de crear contenido totalmente nuevo. Al mirar modelos avanzados como el GPT-4, se logra ver como a través de ellos la tecnología ha demostrado su verdadero potencial para la generación de textos, música, imágenes, incluso simulando el contexto y el estilo humano. Se comparten las principales características que la tienen hoy convertida en herramienta clave para diferentes industrias (Lalangui, 2024):

    .bg-full-width-2.bg-fondo-1.mb-5
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/temas/tema2/4.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Creatividad y originalidad
                p.text-center Posee la capacidad de generar contenido original combinando conocimientos de diversas fuentes. Gracias a sus algoritmos, puede crear textos como artículos o ensayos que, en muchos casos, resultan similares a los redactados por humanos.
              .bg-color-white.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/temas/tema2/5.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Adaptabilidad y personalización
                p.text-center Se ajusta a distintos contextos y públicos, permitiendo personalizar los contenidos de acuerdo con las necesidades del usuario. Es especialmente útil en marketing y publicidad, al facilitar la segmentación de mensajes.
              .bg-color-white.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/temas/tema2/6.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Automatización y eficiencia
                p.text-center Permite automatizar tareas tradicionalmente creativas, como la redacción, el diseño gráfico y la composición musical, lo que reduce la intervención humana, ahorra tiempo y disminuye costos operativos.
              .bg-color-white.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/temas/tema2/7.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Interacción natural
                p.text-center Hace posible que asistentes virtuales y <em>Chatbots</em> mantengan conversaciones coherentes y brinden asistencia en tiempo real, mejorando la experiencia del usuario y fortaleciendo la atención automatizada en empresas.
              .bg-color-white.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/temas/tema2/8.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Innovación en el arte y el entretenimiento
                p.text-center Transforma la creación y el consumo de contenidos mediante la generación de música, videos y arte digital, brindando nuevas herramientas a creadores y artistas..
              .bg-color-white.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/temas/tema2/9.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Desarrollo de productos y prototipos
                p.text-center Facilita la exploración de variaciones en el diseño de productos y prototipos, optimizando procesos de acuerdo con especificaciones técnicas, lo cual es esencial en campos como el diseño industrial y la ingeniería.
          .col-lg-4.order-1
            figure.position-relative
              img(src="@/assets/curso/temas/tema2/3.png", data-aos="zoom-in")
              img.pst-1(src="@/assets/curso/temas/tema1/30-2.png")
              img.pst-2(src="@/assets/curso/temas/tema1/30-1.png")

    separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Lista de Herramientas de IA Generativa

    p.mb-5 Las herramientas de IA gen, con la generación de contenido de forma automática, desde texto e imágenes hasta el audio y vídeo, están revolucionando diversas industrias. El campo tecnológico, a través de diferentes herramientas de IA gen, se ha hecho presente para seguir aportando a la sociedad, por ello se destacan sus aplicaciones y funcionalidades para que el hombre aproveche el potencial de la IA en tareas creativas y productivas. Entre las principales IA gen que se están destacando se tienen: 

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1
      span Herramientas de IA Generativa 
    .tabla-a.color-acento-botones
      table
        thead
          tr
            th.bg-color-6 IA Gen
            th.bg-color-6 Contenido generado
            th.bg-color-6 Descripción
            th.bg-color-6 Acceso
        tbody
          tr
            td ChatGPT
            td Texto y código
            td Asistente de texto para múltiples tareas.
              br
              | Genera y explica código en varios lenguajes.
            td Gratuito y pago
          tr
            td Claude
            td Texto natural
            td IA centrada en lenguaje claro y contextual.
              br
              | Genera y explica código en varios lenguajes.
            td Gratuito con límites / pago
          tr
            td Gemini
            td Texto y código
            td Generador de texto y respuestas basado en web.
              br
              | Genera y explica código en varios lenguajes.
            td Gratuito
          tr
            td Jasper
            td Marketing de contenidos
            td Textos optimizados para SEO y publicidad.
            td Pago
          tr
            td DALL·E
            td Imágenes
            td Genera imágenes desde descripciones de texto.
            td Gratuito y pago
          tr
            td Stable Diffusion
            td Imágenes
            td Modelo de código abierto para crear imágenes.
            td Gratuito (open source)
          tr
            td ElevenLabs
            td Voz realista
            td Conversión de texto a voz con tono humano.
            td Gratuito limitado / pago
          tr
            td Descript
            td Audio y video
            td Clonación de voz y edición multimedia.
            td Gratuito limitado / pago
          tr
            td Synthesia
            td Video con avatares
            td Crea videos con avatares a partir de texto.
            td Pago
          tr
            td Copilot
            td Texto y código
            td Asistente de texto para múltiples tareas.
            td Pago (gratuito para estudiantes)
          tr
            td DeepSeek
            td Texto, código e imagen
            td Asistente de texto para múltiples tareas.
              br
              | Genera y explica código en varios lenguajes.
            td Gratuito (open source)
          tr
            td GitHub Copilot
            td Código
            td Sugiere y completa código dentro del editor.
            td Pago (gratuito para estudiantes)
          tr
            td Amazon CodeWhisperer
            td Código y comentarios
            td Ayuda a escribir código optimizado, especialmente para AWS.
            td Gratuito limitado / pago
          tr
            td LLaMA
            td Texto y código
            td Modelo de lenguaje de Meta para generación de texto, asistencia en programación, investigación y creación de agentes inteligentes.
            td Gratuito (acceso abierto bajo licencia, uso más técnico)






</template>

<script>
export default {
  name: 'Tema2',
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
