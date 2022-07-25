<template>
  <div class="container nav_content">
    <nav class="navbar navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand">
            <router-link to="/"><img src='~@/assets/img_2/favicon.jpg' alt="HTML5 Icon" width='80px'></router-link>
          </a>
            <ul class="nav justify-content-center">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Schedule
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                    <li><a class="dropdown-item" href="#">Speak with a specialized coach</a></li>
                    <li><a class="dropdown-item" href="#">Book a free 15 minutes call</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Coaches</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Resources
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                    <li><a class="dropdown-item" href="#">Events</a></li>
                    <li><a class="dropdown-item" href="#">Podcasts</a></li>
                    <li><a class="dropdown-item" href="#">Videos</a></li>
                    <li><a class="dropdown-item" href="#">ebooks</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Blog</a>
                </li>
          </ul>
            <form class="d-flex">
              <button class="btn btn-outline-success" type="submit">Donate</button>
            </form>
          </div>
        </nav>
    </div>
</template>

<script>


export default {
  name: 'Navbar',
  components: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav_content{
  padding-bottom: 0rem;
}
a{
  color: black;
}
  .btn {
  /* background-color: #4CAF50;  */
  border: none;
  color: #DE08B3;
  padding: 0.5rem 3rem;
  text-align: center;
  font-weight:bold;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
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
  /* box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19); */
}
</style>
