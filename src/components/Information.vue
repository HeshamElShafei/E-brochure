<template>
 <div id="information">
 <img id="backgroundimage" src="../assets/information/bg.png" width=100% height=100%>
    <div class="col-md-9 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-12">
        <div class="row space">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <h1 class="text1">STRENGTH</h1>
                <h1 class="text2">IN NUMBERS</h1>
            </div>
        </div>
        <div class="row space">
            <div class="row space">
                <div class="col-md-4 col-sm-12 col-xs-12">
                    <div class="col-md-3 col-sm-8 col-xs-8">
                            <img src="../assets/icons/earth.png" />
                    </div>
                    <div class="col-md-9 col-sm-4 col-xs-4">
                        <h4 class="info-text-bold" align='center'> WORLDWIDE</h4>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12 col-xs-12">
                    <div class="col-md-3 col-sm-8 col-xs-8">
                            <img src="../assets/icons/uae.png" />
                    </div>
                    <div class="col-md-9 col-sm-4 col-xs-4">
                        <h4 class="info-text-bold" align='center'> UAE & OMAN</h4>
                    </div>
                </div>
            </div>
            <div class="row space">
                <div class="col-md-4 col-sm-12 col-xs-12">
                    <div class="col-md-3 col-sm-8 col-xs-8">
                            <img src="../assets/icons/location.png" />
                    </div>
                    <div class="col-md-9 col-sm-4 col-xs-4">
                        <h4 class="info-text" align='center'> 700+ LOCATIONS</h4>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12 col-xs-12">
                    <div class="col-md-3 col-sm-8 col-xs-8">
                            <img src="../assets/icons/location.png" />
                    </div>
                    <div class="col-md-9 col-sm-4 col-xs-4">
                        <h4 class="info-text" align='center'> 14+ LOCATIONS</h4>
                    </div>
                </div>
            </div>
            <div class="row space">
                <div class="col-md-4 col-sm-12 col-xs-12">
                    <div class="col-md-3 col-sm-8 col-xs-8">
                            <img src="../assets/icons/flag.png" />
                    </div>
                    <div class="col-md-9 col-sm-4 col-xs-4">
                        <h4 class="info-text" align='center'> 37+ COUNTRIES</h4>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12 col-xs-12">
                    <div class="col-md-3 col-sm-8 col-xs-8">
                            <img src="../assets/icons/weight.png" />
                    </div>
                    <div class="col-md-9 col-sm-4 col-xs-4">
                        <h4 class="info-text" align='center'> 22 CLUBS</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <router-link to="/locations"><button class="btn btn-lg btn-primary">Club Locations</button></router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Information',
  data () {
    return {
      msg: 'Information'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#backgroundimage
{
   height: 20%;
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
#information .btn {
  background-color: #fee300 !important;
  color: #333333 !important;
  font-weight: bold !important;
  border: #fee300 !important;
}

#information .text1 {
  color: #333333;
  font-size: 4em;
}

#information .text2 {
  font-weight: bold;
  font-size: 5em;
  color: #21ade7;
}

#information .info-text {
    font-size: 1.7em;
    color: #333333;
}

#information .info-text-bold {
    font-size: 2em;
    font-weight: bold;
}

#information .space {
    margin: 1.5em 0 1.5em 0;
}

#information .space {
    margin: 1.5em 0 1.5em 0;
}
</style>
