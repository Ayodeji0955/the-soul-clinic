<template>
  <div class="donate">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-4 content">
                <h1><span>Join Us in Giving</span>
                    <span>to this Cause</span> 
                </h1>
                <p>
                  <span>It breaks our hearts to see the statistics for various</span>
                  <span>soul and mental health issues, rise. We want to do all</span>
                  <span>we can to contribute to reducing these numbers. We</span>
                  <span>We provide a FREE 15 mins call to everyone, closing the</span>
                  <span>economic gap.</span>
                </p>
                <p>
                  <span>We request that you support this cause to ensure that</span>
                  <span>it remains constanly available to anyone in need</span>
                </p>
                <button type="button" class="btn btn-danger">DONATE</button>
            </div>
            <div class="col-md-4 content_img img-fluid">
                <img src='~@/assets/img_4/group3.jpg' class="img-fluid">
            </div> 
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Donate',
  components: {
    
  }
}
</script>

<style scoped>
.donate{
  background-color: #FFFFFF;
  padding-top:3rem;
  padding-bottom:3rem;
}
h1{
  font-size: 25px;
  font-weight: bold;
  padding-bottom:1rem; 
  font-family: Arial, Helvetica, sans-serif;
}
p{
  font-size: 15px;
  padding-bottom:1rem; 
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
.content {
  padding-top:2rem;
}
.content span{
  display: block;
}
</style>