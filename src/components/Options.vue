<template>
 <div id="membership-period">
 <img id="backgroundimage" src="../assets/membership/bg.png" width=100% height=100%>
  <div class="col-md-4 col-md-offset-4 col-sm-4 col-sm-offset-4 col-xs-12">
    <div class="row">
      <div class="col-md-12 col-sm-12 col-xs-12">
        <h1 class="text1">MEMBERSHIP</h1>
        <h1 class="text2">OPTIONS</h1>  
      </div>
    </div>
    <div class="row space">
      <div class="col-md-12 col-sm-12 col-xs-12">
        <button class="btn btn-lg">HOME CLUB MEMBERSHIP</button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-sm-12 col-xs-12">
        <router-link to="/Registration"><button ng-click="registration()" class="btn btn-block btn-md btn-blue">MONTHLY</button></router-link>
        <router-link to="/Registration"><button ng-click="registration()" class="btn btn-block btn-md btn-blue">4 MONTH</button></router-link>
        <router-link to="/Registration"><button ng-click="registration()" class="btn btn-block btn-md btn-blue">12 MONTH</button></router-link>
      </div>
    </div>
    <div class="row space">
           <div class="col-md-12 col-md-12 col-xs-12 back-block">
                <div class="col-md-8 pull-right">
                    <span>Back</span><router-link to="/Membership"><img ng-click="membership()" class="img-responsive" src="../assets/membership/back.png" /></router-link>
                </div>
            </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'Options',
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

#membership-period .btn {
    margin: 13px 12px 12px 10px;
    background-color: #fee300 !important;
    color: #333333 !important;
    font-weight: bold !important;
    border: #fee300 !important;
    border-radius: 1em !important;
    font-weight: bold;
    padding: 1em;
}

#membership-period .btn-blue {
  background-color: #21ade7 !important;
  color: #ffffff !important;
  font-weight: bold !important;
    border: #21ade7 !important;
    text-align: center;
    padding: 0.9em;
}

#membership-period .membership-periodBtnSpace {
  background-color: #fee300 !important;
  color: #333333 !important;
  font-weight: bold !important;
    border: #fee300 !important;
    padding: 0.7em;
    text-align: center;
    margin: 0.2em 0 0.2em 0;
}


#membership-period .text1 {
    font-weight: bold;
  color: #21ade7;
    font-size: 3em;
}

#membership-period .text2 {
    font-size: 3em;
  font-weight: bold;
    color: #333333;
}

#membership-period .info-text {
    font-size: 1.7em;
    color: #636364;
}

#membership-period .info-text-bold {
    font-size: 2em;
    font-weight: bold;
}

#membership-period .space {
    padding-bottom: 1.5em;
}

#membership-period .back-block span {
    float: right;
    vertical-align: middle;
    display: inline-block;
    font: 2.5em bold;
}

#membership-period .back-block img {
    float: right;
    vertical-align: middle;
    display: inline-block;
    width: 2.9em;
    cursor: pointer;
}

</style>
