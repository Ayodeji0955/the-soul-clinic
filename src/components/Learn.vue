<template>
  <div class="learn">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-4 content_img img-fluid">
                <h3 class="event_header">Why The Soul Clinic is For You</h3>
                <div class="main_img"><img src='~@/assets/img_4/section5.jpg' class="img-fluid"></div>
            </div>
            <div class="col-md-4 content">
                <h1>Dear Soulful One,</h1>
                <p>
                  <span>You might have soul wounds caused by past or present</span>
                  <span>traumas, abuse, low-self-esteem, or self-hate. We are here to</span>
                  <span>deliver a healing experience through #soulcoaching to you,</span>
                  <span>virtually. Our experienced and sympathetic coaches are</span>
                  <span>available and accessible to you 24/7, anywhere you are in the world.</span>
                </p>
                <button type="button" class="btn btn-danger">LEARN MORE</button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Learn',
  components: {
    
  }
}
</script>

<style scoped>
.learn{
  background-color: #FFFFFF;
  padding-top: 4rem;
  padding-bottom: 2rem;
}
h1, h3{
  font-size: 25px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}
h3{
  padding-bottom: 1rem;
}
p{
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
}
.btn {
  /* background-color: #4CAF50;  */
  border: none;
  color: #DE08B3;
  padding: 0.7rem 2rem;
  text-align: center;
  font-weight:bold;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  /* margin: 4px 2px; */
  transition-duration: 0.4s;
  cursor: pointer;
}
.btn {
  background-color: #DE08B3; 
  color: white; 
  border: 2px solid #DE08B3;
  border-radius: 5rem;
}
.btn:hover {
  background-color: white;
  color: #DE08B3;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
.content {
  padding-top:5rem;
}
.content span{
  display: block;
} 
</style>