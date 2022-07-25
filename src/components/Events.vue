<template>
  <div class="events">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <h3 class="event_header">
              <span>We have loads of virtual events that</span>
              <span>you can attend or watch replays.</span>
          </h3>
        </div>
      </div>
        <div class="row justify-content-center main_content">
            <div class="col-md-4 content">
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src='~@/assets/img_5/group7.jpg' class="img-fluid rounded-start" alt="">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Introduction to #SoulCoaching</h5>
                                <p class="card-text">
                                    <span>Lorem ipsum dolor sit amet,</span>
                                    <span>consectetur adipiscing elit,</span>
                                    <span>eiusmod tempor</span>
                                </p>
                                <p class="card-text text_mute">ATTEND &#8594;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 content">
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src='~@/assets/img_5/group8.jpg' class="img-fluid rounded-start" alt="">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body card_body">
                                <h5 class="card-title">Introduction to #SoulCoaching</h5>
                                <p class="card-text">
                                    <span>Lorem ipsum dolor sit amet,</span>
                                    <span>consectetur adipiscing elit,</span>
                                    <span>eiusmod tempor</span>
                                </p>
                                <p class="card-text text_mute">ATTEND &#8594;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="btn_events">
            <button type="button" class="btn btn-danger">SEE ALL EVENTS</button>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Events',
  components: {
    
  }
}
</script>

<style scoped>
.events{
   background-color:#FFFFFF;
   padding-top: 3rem;
  }
.text_mute{
  color: #DE08B3;
}
.btn {
  /* background-color: #4CAF50;  */
  border: none;
  color: #DE08B3;
  padding: 0.7rem 3rem;
  text-align: center;
  font-weight:bold;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  /* margin: 4px 2px; */
  transition-duration: 0.4s;
  cursor: pointer;
  margin:auto;
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
.btn_events{
  margin-top:0.9rem;
  display: flex;
  padding-top: 3rem;
  padding-bottom: 6rem;
}
.main_content{
  padding-bottom: 3rem;
}
.event_header{
  font-size:25px;
  padding-bottom: 3rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}
span{
  display: block;
}
</style>