<template>
  <div class="soulful">
      <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-4 content_img img-fluid">
                <img src='~@/assets/img_1/banner_4.jpg' class="img-fluid">
            </div>
            <div class="col-md-4 content">
                <h1>Dear Soulful One,</h1>
                <p>
                <span>Have you gone through trauma, abuse, or a bad</span>
                <span>breakup? Or do you struggle with self-hate or low</span>
                <span>self-esteem and you desperately need a hand?</span>
                </p>
                <p>
                <span>In case you are wondering if what you need is a </span>
                <span>therapist, a counselor, a coach, or just simply a shoulder</span>
                <span>to cry on. We recommend The Soul Health Quick Scan,</span>
                <span>which will help you check your emotional ‘vital signs’, as  </span>
                <span>a great place to start.</span>
                </p>
                <button type="button" class="btn btn-danger">CHECK MY SOUL HEALTH</button>
            </div>
       </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Soulful',
  components: {
    
  }
}
</script>

<style scoped>
.soulful{
  background-color: #F5FAFD;
  padding-top: 4rem;
  padding-bottom: 4rem;
  }
p span{
  display:block;
}
.content h1{
  padding-bottom: 0.3rem;
  padding-top: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}
.content p{
  padding-bottom: 0.5rem;
  font-size:15px;
  font-family: Arial, Helvetica, sans-serif;
}
.btn {
  border: none;
  color: #DE08B3;
  padding: 0.7rem 2rem;
  text-align: center;
  font-weight:bold;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
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


</style>

