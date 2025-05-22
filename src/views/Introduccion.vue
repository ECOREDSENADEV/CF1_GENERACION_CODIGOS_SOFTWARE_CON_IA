<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p La inteligencia artificial (IA) ha generado un impacto profundo y creciente en los distintos ámbitos de la vida humana, abarcando desde lo cotidiano hasta los sectores más especializados de la industria. Desde su origen, la IA ha evolucionado rápidamente, ofreciendo soluciones que permiten optimizar procesos y mejorar la productividad.

    .bg-full-width-2.bg-fondo-1.mb-5
      .p-4.p-md-5
        .row.mb-5.justify-content-center
          .col-8.col-lg-3.order-2
            figure.position-relative
              img(src="@/assets/curso/intro/2.png", data-aos="zoom-in")
              img.pst-1(src="@/assets/curso/portada/banner-principal-decorativo-1.png")
              img.pst-2(src="@/assets/curso/portada/banner-principal-decorativo-2.png")
          .col-lg-9.order-1.mb-3.mb-lg-0(data-aos="fade-left")
            .bg-color-1.mb-3(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/intro/1.png', alt='')
                .col-lg
                  .p-4
                    p.mb-0(data-aos="fade-up") Dentro de sus diversas ramificaciones, la inteligencia artificial generativa (IA gen) ha cobrado especial relevancia al difundirse ampliamente en la sociedad. Esta tecnología permite, a través de máquinas y computadoras, no solo automatizar tareas, sino también crear contenido original como textos, imágenes, audios y videos, entre otros. Su incorporación ha transformado la forma en que las personas se relacionan con la tecnología, aprovechando sus herramientas para enfrentar desafíos cada vez más complejos.
            p.mb-0(data-aos="fade-up") Este componente formativo abordará conceptos clave para comprender y aprovechar los recursos que ofrece la IA gen, aplicándolos en diversas tareas tanto personales como empresariales. Se estudiarán sus principales aplicaciones y herramientas, así como los fundamentos del <em>Prompt</em>ing, técnica esencial para interactuar de forma precisa con los modelos de IA. Además, se presentarán ejemplos prácticos y casos de uso en entornos reales, con el fin de ofrecer una visión completa sobre la utilidad y aplicabilidad de la IA gen en distintos contextos.
    
    
              

</template>

<script>
export default {
  name: 'Introduccion',
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
