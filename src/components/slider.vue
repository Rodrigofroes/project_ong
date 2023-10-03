<template>
  <div class="conteudo">
    <div class="container-separador">
      <span id="separador-frase">"AJUDAR O PRÓXIMO É A MELHOR MANEIRA DE AJUDAR A SI MESMO"</span>
    </div>
    <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/banner-marca.png" class="d-block w-100" alt="Brand Banner">
        </div>
        <div class="carousel-item">
          <img src="../assets/banner-principal.png" class="d-block w-100" alt="Main Banner">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slider'
}
</script>

<style>
.container-separador {
  display: flex;
  justify-content: center;
  background-color: darkturquoise;
  color: rgb(255, 255, 255);
  font-weight: 500;
  letter-spacing: 0.1px;
  border-top: 1px solid #5B1072;
}
.carousel{
  border-bottom: 1px solid #5B1072;
}


.conteudo {
  width: 100%;
  height: 100%;
}


.carousel-item img {
  width: 100%; 
  height: 100%;
  object-fit: cover; 
}

@media screen and (max-width: 768px) {
  .container-separador{
    font-size: 11px;
  }
  .conteudo {
    width: 100%;
    height: auto; 
  }
  .carousel-item{
    width: 100%;
    height: 260px;
  }
  .carousel-item img{
    width: 100%;
    object-fit: fill;
  }

  .carousel-inner {
    height: auto; 
  }
}
</style>