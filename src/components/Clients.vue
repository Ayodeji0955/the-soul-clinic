<template>
  <div class="clients">
    <div class="container">
        <div class="row justify-content-between">
            <div class="col-md-6 ">
                <h1>How our clients’ lives are being changed</h1>
                <p>Hear from real people who have successfully navigated difficult times. </p>
            </div>
            <div class="col-md-2">
                <button type="button" class="btn btn-danger">SEE ALL</button>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row justify-content-between">
            <div class="col-sm-4">
                <div class="row main_text ife justify-content-center">
                    <div class="col-4 col-sm-3">
                        <img src='~@/assets/img_3/Ellipse_1st.jpg' class="img-fluid">
                    </div>
                    <div class="col-8 col-sm-8">
                        <h1>Ifeoluwanimi Olubodun</h1>
                        <p>Group #SoulCoaching Client</p>
                    </div>
                </div>
                <div class="row main_text abriana justify-content-center">
                    <div class="col-4 col-sm-3">
                        <img src='~@/assets/img_3/Ellipse_3rd.jpg' class="img-fluid">
                    </div>
                    <div class="col-8 col-sm-8">
                    <h1>Abrianna Bossman</h1>
                    <p>Group #SoulCoaching Client</p>
                    </div>
                </div>
                <div class="row main_text princess justify-content-center">
                    <div class="col-4 col-sm-3">
                        <img src='~@/assets/img_3/Ellipse_2nd.jpg' class="img-fluid">
                    </div>
                    <div class="col-8 col-sm-8">
                   <h1>Princess Okechukwu</h1>
                   <p>Group #SoulCoaching Client</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 sub_text">
                <h1>I’m Totally Different…</h1>
                <p> 
                    <span>The woman I am at the moment is different from the woman I </span>
                    <span>was at the start of the #Soul Coaching program. I’ll say I’ve </span>
                    <span>learned, unlearned, and relearned. It was learning made easy </span>
                    <span>because there were other folks too on their lows and it gave me </span>
                    <span>peace to realize that I wasn’t alone going through the worst in </span>
                    <span>life. Coach TFA is accommodating, attentive, kind, </span>
                    <span>sweet, diplomatic, and vulnerable.</span>
                </p>
                <p>
                    <span>She did not make us feel like outcasts, but rather shared her own</span>
                    <span>stories too. She was so in sync with everyone in the group.</span>
                    <span>Overall, I feel great, I have started saying my Affirmations and I </span>
                    <span>will always put to practice all I’ve learned from Coach TFA and </span>
                    <span>the friends I made during the program. Thank you for having us!</span>
                </p>
            </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
  name: 'Clients',
  components: {
    
  }
}
</script>

<style scoped>
.clients{
  background-color: #FFF7FDFC;
  padding-top: 4rem;
  padding-bottom: 4rem;
}
h1{
  font-size:30px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}
p{
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
}
.main_text h1{
  font-size: 20px; 
}
.main_text p{
  font-size: 15px; 
}
.ife{
  background-color: #FFFFFF;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
}
.ife h1{
  padding-top: 1rem;
}
.abriana{
  padding-top: 1rem;
  margin-top: 1rem;
  margin-right: 0rem;
}
.abriana h1{
  padding-top: 1rem;
}
.princess{
  padding-top: 1rem;
  margin-top: 1rem;
  margin-right: 0rem;
}
.princess h1{
  padding-top: 1rem;
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
  margin: 4px 2px;
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
img {
  border-radius: 50%;
  width:80%;
}
.sub_text{
  padding-top: 2rem;
}
.sub_text span{
  display: block;
}
.sub_text h1{
  font-size:20px;
}
.sub_text p{
  font-size:17px;
}
</style>