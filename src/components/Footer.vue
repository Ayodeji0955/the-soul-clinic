<template>
  <div class="footer">
    <div class="container">
        <div class="row main_content">
            <div class="col-md-3 main_img">
                <img src='~@/assets/img_5/favicon2.png' class="img-fluid rounded-start" alt="">
            </div>
            <div class="col-md-2">
                <h1>RESOURCES</h1>
                <p>Videos</p>
                <p>Webinars</p>
                <p>Podcasts</p>
                <p>ebooks</p>
            </div>
            <div class="col-md-2">
                <h1>THE SOUL CLINIC</h1>
                <p>About</p>
                <p>Blog</p>
            </div>
            <div class="col-md-2">
                <h1>SUPPORT</h1>
                <p>Quick Scan</p>
                <p>Support Coach</p>
                <p>FAQs</p>
            </div>
            <div class="col-md-2">
                <h1>CONTACT US</h1>
                <p>
                   <span>Greensborough Village</span>
                   <span>Circle, Markham ON.</span>
                   <span>L6E1M4, Canada</span>
                </p>
            </div>
        </div>
        <div class="row justify-content-end sub_content">
            <div class="col-md-3">
                <p>Copyright 2021, Qeola Inc. Alrights reserved.</p>
            </div>
            <div class="col-md-3">
                <p>Data & Privacy Policy.</p>
            </div>
            <div class="col-md-3 sub_img">
                <img src='~@/assets/img_5/instagram.png' class="img-fluid rounded-start" alt="">
                <img src='~@/assets/img_5/tweeter.png' class="img-fluid rounded-start" alt="">
                <img src='~@/assets/img_5/facebook.png' class="img-fluid rounded-start" alt="">
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Footer',
  components: {
    
  }
}
</script>

<style scoped>
.footer{
   background-color: #190114;
   padding-top: 4rem;
  }
h1{
  font-size:15px;
  color:#DE08B3;
  font-family: Arial, Helvetica, sans-serif;
}
p{
  font-size: 15px;
  color:white;
  font-family: Arial, Helvetica, sans-serif;
}
.main_img img{
  width: 25%;
}
.sub_img img{
  width: 10%;
  margin-left:1rem;
}
.main_content{
  padding-bottom: 3rem;
}
.sub_content{
  padding-bottom: 4rem;
}
</style>