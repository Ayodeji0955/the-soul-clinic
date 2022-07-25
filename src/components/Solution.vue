<template>
  <div class="solution">
    <div class="container container_content">
        <div class="row justify-content-between">
            <div class="col-md-6">
                <h1>Your Solution for Mental and Emotional Healing</h1>
                <p>
                  <span>Using a unique mix of mild-therapy, coaching, and counseling, with a biblical</span>
                  <span>foundation and virtual means, we provide;</span>
                </p>
            </div>
            <div class="col-md-2">
                <button type="button" class="btn btn-danger">SEE ALL</button>
            </div>
        </div>
    </div>
    <div class="container ">
    <div class="row  row-cols-md-3">
        <div class="col-2-md col_content">
            <div class="card">
                    <img src="~@/assets/img_3/solution1.jpg" class="card-img-top" alt="...">
            <div class="card-body main_text">
                <h2 class="card-title">One-Off Coaching Sessions</h2>
                <p class="card-text">
                    <span>Our 1-hour virtual coaching will help you get rid of the</span>
                    <span>overwhelm in your relationships, career, and family life.</span>
                </p>
                <h3 class="card-title">Yes! Schedule A Call &#8594;</h3>
            </div>
            </div>
        </div>
        <div class="col-2-md col_content">
            <div class="card">
                    <img src="~@/assets/img_3/solution2.jpg" class="card-img-top" alt="...">
            <div class="card-body mid_text">
                <h2 class="card-title">Free 15mins #SoulCoaching</h2>
                <p class="card-text">
                    <span>This virtual session allows you tounburden to a support</span>
                    <span>coach, and get first-aid solutions and recommendations at absolutely no cost!</span>
                </p>
                <h3 class="card-title">Book A Free Call &#8594;</h3>
            </div>
            </div>
        </div>
        <div class="col-2-md col_content">
            <div class="card">
                    <img src="~@/assets/img_3/solution3.jpg" class="card-img-top" alt="...">
            <div class="card-body sub_text">
                <h2 class="card-title">
                    <span>Soul Transformation</span>
                    <span>with the Lead Coach</span>
                </h2>
                <p class="card-text">
                    <span>Get the chance to speak with The Soul Coach herself. Each</span>
                    <span>moment promises to be transformational.</span>
                </p>
                <h3 class="card-title">Schedule A Session &#8594;</h3>
            </div>
            </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Solution',
  components: {
    
  }
}
</script>

<style scoped>
.solution{
  background-color: #F5FAFD;
  padding-top: 4rem;
  padding-bottom: 4rem;
}
h1{
  font-size:25px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}
p{
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
}
.btn {
  border: none;
  color: #DE08B3;
  padding: 0.7rem 3rem;
  text-align: center;
  font-weight:bold;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
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
.sol_card{
  padding-top: 4rem;
  padding-bottom: 4rem;
}
.main_text span, .mid_text span, .sub_text span{
  display: block;
 } 
.main_text h2, .mid_text h2, .sub_text h2{
  font-size:20px;
  padding-left:15px;
  padding-right:15px;
}
.main_text h3, .mid_text h3, .sub_text h3{
  font-size:20px;
  padding-left:15px;
  padding-right:15px;
  color:#DE08B3;
}
.main_text p, .mid_text p, .sub_text p{
  font-size: 13px;
  padding-left:15px;
  padding-right:15px;
}
.main_text h3{
  padding-top:45px;
}
.mid_text h3{
  padding-top:25px;
}
.sub_text h3{
  padding-top:20px;
}
img{
  border-radius: 0.1rem;
}
.container_content{
  padding-bottom: 3rem;
}
span{
  display: block;
}
/* .col_content{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
} */
</style>