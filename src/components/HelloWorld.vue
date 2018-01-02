<template>
  <div id="home">
  <img id="backgroundimage" src="https://github.com/munzx/ggi/blob/master/src/img/home/bg.png?raw=true" width=100% height=100%>
  <div class="row">
    <div class="col-md-10 col-md-offset-2 col-sm-10 col-sm-offset-2 col-xs-12">
      <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="col-md-2 col-sm-2 col-xs-3">
          <img class= "img-responsive" src="https://www.celsius.com/wp-content/uploads/2017/05/GOLDS-GYM.png" width="450px" height="300px">
        </div>
      </div>
      <h1 class="text1">KNOW YOUR</h1>
      <h1 class="text2">OWN STRENGTH</h1>
     <router-link to="/Information"> <button class="btn btn-lg btn-primary">START JOURNEY</button></router-link>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#backgroundimage
{
   height: 10%;
   left: 0;
   margin: 0;
   min-height: 100%;
   min-width: 674px;
   padding: 0;
   position: fixed;
   top: 0;
   width: 100%;
   z-index: -1;
}

#home .btn {
  background-color: #fee300 !important;
  color: #333333 !important;
  font-weight: bold !important;
  border: #fee300 !important;
}

#home .text1 {
  color: #333333;
  font-size: 4em;
}

#home .text2 {
  font-weight: bold;
  font-size: 5em;
  color: #333333;
}

</style>
