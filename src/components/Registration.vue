<template>
 <div id="registration">
 <img id="backgroundimage" src="../assets/membership/bg.png" width=100% height=100%>
  <div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-12">
    <div class="row">
      <div class="col-md-10 col-sm-12 col-xs-12">
        <h1 class="text1">REGISTER</h1>
        <h2 class="text2">YOU ARE ONE STEP CLOSER TO BECOMING STRONGER</h2> 
      </div>
    </div>

    <div class="row">
      <div class="col-md-10 col-sm-12 col-xs-12">
        <form class="form">
          <input class="form" type="text" name="fullname" model="client.fullname" placeholder="FULL NAME">
          <input class="form" type="number" name="phoneNumber" model="client.phoneNumber" placeholder="PHONE NUMBER">
          <div class="select">
            <select class="form-control">
              <option>DUBAI BARSHA MALL</option>
              <option>Reef Mall</option>
              <option>Business Village Deira</option>
            </select>
          </div>
        </form>
      </div>
    </div>

    <div class="row space">
           <div class="col-md-6 col-sm-12 col-xs-12">
              <router-link to="/"><button class="btn btn-block btn-lg" ng-click="end()">SUBMIT</button></router-link>
            </div>
    </div>
    <div class="row space">
           <div class="col-md-12 col-sm-12 col-xs-12 back-block">
                <div class="col-md-8 pull-right">
                    <span>Back</span><router-link to="/Options"><img click="membershipPeriod()" class="img-responsive" src="../assets/membership/back.png" /></router-link>
                </div>
            </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'Registration',
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

#registration .btn {
    background-color: #fee300 !important;
    color: #333333 !important;
    font-weight: bold !important;
    border: #fee300 !important;
    border-radius: 1em !important;
    font-weight: bold;
    padding: 1em;
}

#registration .btn-blue {
  background-color: #21ade7 !important;
  color: #ffffff !important;
  font-weight: bold !important;
    border: #21ade7 !important;
    text-align: center;
    padding: 0.9em;
}

#registration .membership-periodBtnSpace {
  background-color: #fee300 !important;
  color: #333333 !important;
  font-weight: bold !important;
    border: #fee300 !important;
    padding: 0.7em;
    text-align: center;
    margin: 0.2em 0 0.2em 0;
}


#registration .text1 {
    font-weight: bold;
  color: #21ade7;
    font-size: 3em;
}

#registration .text2 {
    font-size: 1.5em;
  font-weight: bold;
    color: #333333;
}

#registration .info-text {
    font-size: 1.7em;
    color: #636364;
}

#registration .info-text-bold {
    font-size: 2em;
    font-weight: bold;
}

#registration .space {
    padding-bottom: 1.5em;
}

#registration .back-block span {
    float: right;
    vertical-align: middle;
    display: inline-block;
    font: 2.5em bold;
}

#registration input {
    width: 330px;
    padding: 1.8em !important;
    font-weight: bold !important;
    border-radius: 4em !important;
    border: #21ade7 solid 0.2em !important;
    margin-bottom: 0.5em !important;
}

#registration .select {
    width: 330px;
    height: 40px;
    font-weight: bold !important;
    border-radius: 4em !important;
    border: #21ade7 solid 0.2em !important;
    margin-bottom: 0.5em !important;
    background-color: #fff;
}

#registration select {
    border: none !important;
    margin: 0 !important;
    padding: 1em !important;
}

#registration .back-block img {
    float: right;
    vertical-align: middle;
    display: inline-block;
    width: 2.9em;
    cursor: pointer;
}
.btn-radio {
  width: 100%;
}
.img-radio {
  opacity: 0.5;
  margin-bottom: 5px;
}

.space-20 {
    margin-top: 20px;
}
#workout{
  margin: left;
}
</style>