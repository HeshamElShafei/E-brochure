<template>
  
<div id="membership">
<img id="backgroundimage" src="../assets/membership/bg.png" width=100% height=100%>
  <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12">
    <div class="row">
      <div class="col-md-12 col-sm-12 col-xs-12">
        <h1 class="text1">MEMBERSHIP</h1>
        <h1 class="text2">OPTIONS</h1>  
      </div>
    </div>
    <div class="row">
      <div class="col-md-9 col-sm-9 col-xs-12">
        <router-link to="/Options"><button ng-click="membershipPeriod()" class="btn btn-block btn-lg">HOME CLUB MEMBERSHIP</button></router-link>
        <router-link to="/Options"><button ng-click="membershipPeriod()" class="btn btn-block btn-lg">CLUSTER MEMBERSHIP</button></router-link>
        <router-link to="/Options"><button ng-click="membershipPeriod()" class="btn btn-block btn-lg">PASSPORT MEMBERSHIP</button></router-link>
        <router-link to="/Options"><button ng-click="membershipPeriod()" class="btn btn-block btn-lg">SIGNATURE MEMBERSHIP</button></router-link>
      </div>
    </div>
    <div class="row space">
           <div class="col-md-12 col-sm-12 col-xs-12 back-block">
                <div class="col-md-8 pull-right">
                    <span>Back</span><router-link to="/AlBarshaClub"><img ng-click="club()" class="img-responsive" src="../assets/membership/back.png" /></router-link>
                </div>
            </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'Membership',
  data () {
    return {
      msg: 'Membership'
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


#membership .btn {
    margin: 13px 12px 12px 10px;
    background-color: #fee300 !important;
    color: #333333 !important;
    font-weight: bold !important;
    border: #fee300 !important;
    border-radius: 1em !important;
    font-weight: bold;
    padding: 0.5em;
}

#membership .btn-blue {
  background-color: #21ade7 !important;
  color: #ffffff !important;
  font-weight: bold !important;
    border: #21ade7 !important;
    padding: 1.5em;
    text-align: center;
    margin: 0.2em 0 0.2em 0;
}

#membership .membershipBtnSpace {
  background-color: #fee300 !important;
  color: #333333 !important;
  font-weight: bold !important;
    border: #fee300 !important;
    padding: 0.7em;
    text-align: center;
    margin: 0.2em 0 0.2em 0;
}


#membership .text1 {
    font-weight: bold;
  color: #21ade7;
    font-size: 3em;
}

#membership .text2 {
    font-size: 3em;
  font-weight: bold;
    color: #333333;
}

#membership .info-text {
    font-size: 1.7em;
    color: #636364;
}

#membership .info-text-bold {
    font-size: 2em;
    font-weight: bold;
}

#membership .space {
    margin: 1.5em 0 1.5em 0;
}

#membership .back-block span {
    float: right;
    vertical-align: middle;
    display: inline-block;
    font: 2.5em bold;
}

#membership .back-block img {
    float: right;
    vertical-align: middle;
    display: inline-block;
    width: 2.9em;
    cursor: pointer;
}


</style>