<template>
  <div id="location">
  <img id="backgroundimage" src="../assets/location/bg.png" width=100% height=100%>
    <div class="col-md-6 col-md-offset-1 col-sm-8 col-sm-offset-2 col-xs-12">
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12 hidden-xs">
                <h1 class="text1">CLUB</h1>
                <h1 class="text2">LOCATIONS</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12 hidden-sm hidden-md hidden-lg">
                <h1 class="text1xs">CLUB</h1>
                <h1 class="text2xs">LOCATIONS</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 col-sm-4 colxs-12">
                <router-link to="/Dubai"><button class="btn btn-lg btn-block locationBtnSpace btn-primary" >Dubai</button></router-link>
            </div>
            <div class="col-md-4 col-sm-4 colxs-12">
                <router-link to="/AbuDhabi"><button class="btn btn-lg btn-block locationBtnSpace btn-primary" >ABU DHABI</button></router-link>
            </div>
            <div class="col-md-4 col-sm-4 colxs-12">
                <router-link to="/Fujairah"><button class="btn btn-lg btn-block locationBtnSpace btn-primary" >Fujairah</button></router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 col-sm-4 col-xs-12">
                <router-link to="/AlAin"><button class="btn btn-lg btn-block locationBtnSpace btn-primary" >AL AIN</button></router-link>
            </div>
            <div class="col-md-4 col-sm-4 col-xs-12">
                <router-link to="/RAK"><button class="btn btn-lg btn-block locationBtnSpace btn-primary" >RAK</button></router-link>
            </div>
            <div class="col-md-4 col-sm-4 col-xs-12">
                <router-link to="/Oman"><button class="btn btn-lg btn-block locationBtnSpace btn-primary" >OMAN</button></router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-sm-6 col-xs-6">
                <button class="btn btn-lg btn-blue btn-block btn-primary" >MIXED CLUB</button>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6">
                <button class="btn btn-lg btn-blue btn-block btn-primary">LADIES ONLY</button>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'Locations',
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
   height: auto;
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

#location .btn-blue {
  background-color: #21ade7 !important;
  color: #ffffff !important;
  font-weight: bold !important;
    border: #21ade7 !important;
    padding: 1.5em;
    text-align: center;
    margin: 0.2em 0 0.2em 0;
}

#location .locationBtnSpace {
  background-color: #fee300 !important;
  color: #333333 !important;
  font-weight: bold !important;
    border: #fee300 !important;
    padding: 0.7em;
    text-align: center;
    margin: 0.2em 0 0.2em 0;
}


#location .text1 {
  color: #333333;
  font-size: 5em;
}

#location .text2 {
  font-weight: bold;
  font-size: 5em;
  color: #21ade7;
}

#location .text1xs {
    color: #333333;
}

#location .text2xs {
    font-weight: bold;
    color: #21ade7;
}

#location .info-text {
    font-size: 1.7em;
    color: #636364;
}

#location .info-text-bold {
    font-size: 2em;
    font-weight: bold;
}

#location .space {
    margin: 1.5em 0 1.5em 0;
}


</style>
