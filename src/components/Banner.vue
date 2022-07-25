<template>
  <div class="banner"> 
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="~@/assets/img_1/banner_3.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption dispText">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <!-- <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="~@/assets/img_1/banner_3.jpg" class="d-block img-fluid" alt="...">
          <div class="bg-danger d-block">
            <h5 class=""> Healthy Minds, Shaping Lives</h5>
            <p>
              <span>We have mastered the art of helping leaders overcome obstacles on </span>
              <span>their path to achieving personal and professional success.</span>
            </p>
          </div>
        </div>
         <div class="carousel-item">
          <img src="~@/assets/img_1/banner_2.jpg" class="d-block img-fluid" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Healthy Minds, Shaping Lives</h5>
            <p>
              <span>We have mastered the art of helping leaders overcome obstacles on </span>
              <span>their path to achieving personal and professional success.</span>
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="~@/assets/img_1/banner_1.jpg" class="d-block img-fluid" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Healthy Minds, Shaping Lives</h5>
            <p>
              <span>We have mastered the art of helping leaders overcome obstacles on </span>
              <span>their path to achieving personal and professional success.</span>
            </p>
          </div>
          <button type="button" class="btn btn-danger">Danger</button>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div> -->
  </div>
</template>

<script>



export default {
  name: 'Banner',
  components: {
    
  }
}
</script>

<style scoped>
  .dispText{
    padding: 5rem;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .dispText h5{
    font-size: 5rem;
  }
  
  /* .homepage{
    background-color: aqua;
  } */
  /* .banner{
    padding-bottom: 10px;
  } */
  .carousel-item{
  height:600px;
}
  span{
    display: block;
  }
</style>