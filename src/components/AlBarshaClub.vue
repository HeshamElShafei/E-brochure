<template>
  
<div id="club">
<img id="backgroundimage" src="../assets/city_location/bg.png" width=100% height=100%>
  <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12">
    <div class="row space">
      <div class="col-md-6 col-sm-6 col-xs-12">
        <h1 class="club_name">AL BARSHA MALL</h1>
      </div>
      <div class="col-md-6 col-sm-6 col-xs-12">
        <div class="col-md-3 col-sm-12 col-xs-6">
          <img class="img-responsive visible-xs visible-sm" ng-click="clubGallery()" src="../assets/icons/images.png" />
          <img class="img-responsive gallery hidden-xs hidden-sm" ng-click="clubGallery()" src="../assets/icons/images.png" />
        </div>
        <div class="col-md-9 col-sm-12 col-xs-6">
          <router-link to="/Membership"> <button class="btn btn-primary btn-md btn-blue pull-right" ng-click="membership()"><b>START JOURNEY</b></button></router-link>
        </div>
      </div>
    </div>
    <div class="row space">
      <div class="col-md-12 col-sm-12 col-xs12">
        <p class="text-muted">Gold's Gym Al Barsha Mall is the first club to offer a cutting-edge, complete digital solutions 
        to its members. Powered by TechnoGym, our members will be able to leverage cloud technology to track thier progress,
        maximize workouts, book classes, and access a library of training programs.
        </p>
      </div>
    </div>
    <hr class="style" />
    <div class="row">
      <div class="col-md-12 col-sm-12 col-xs-12">
        <h2>FACILITIES FEATURES</h2>
      </div>
    </div>
    <div class="row space">
      <div class="col-md-12 col-sm-12 col-xs-12">
        <div uib-carousel class="carousel" active="featuresSlides.active" interval="myInterval" no-wrap="noWrapSlides">
          <div uib-slide index="0">
            <div class="col-md-3 col-sm-3 col-xs-3">
              <img class="img-responsive" src='../assets/icons/digital_solutions.png' style="margin:auto;">
              <p class="text-muted text-center">Complete Digital Fitness Solution</p> 
            </div>
            <div class="col-md-3 col-sm-3 col-xs-3">
              <img class="img-responsive" src='../assets/icons/mixed_gym.png' style="margin:auto;">
              <p class="text-muted text-center">Mixed Gym</p> 
            </div>
            <div class="col-md-3 col-sm-3 col-xs-3">
              <img class="img-responsive" src='../assets/icons/ladies_only.png' style="margin:auto;">
              <p class="text-muted text-center">Ladies only facility</p>  
            </div>
            <div class="col-md-3 col-sm-3 col-xs-3">
              <img class="img-responsive" src='../assets/icons/shower_room.png' style="margin:auto;">
              <p class="text-muted text-center">Shower Room</p> 
            </div>
          </div>
          <div uib-slide index="1">
            <div class="col-md-3 col-sm-3 col-xs-3">
              <img class="img-responsive" src='../assets/icons/locker_access.png' style="margin:auto;">
              <p class="text-muted text-center">Locker Access</p> 
            </div>
            <div class="col-md-3 col-sm-3 col-xs-3">
              <img class="img-responsive" src='../assets/icons/free_weights.png' style="margin:auto;">
              <p class="text-muted text-center">Free Weights</p>  
            </div>
            <div class="col-md-3 col-sm-3 col-xs-3">
              <img class="img-responsive" src='../assets/icons/cardio_area.png' style="margin:auto;">
              <p class="text-muted text-center">Cardio Area</p> 
            </div>
            <div class="col-md-3 col-sm-3 col-xs-3">
              <img class="img-responsive" src='../assets/icons/cycle_studio.png' style="margin:auto;">
              <p class="text-muted text-center">Cycle Studio</p>  
            </div>
          </div>
          <div uib-slide index="2">
            <div class="col-md-3 col-sm-3 col-xs-3">
              <img class="img-responsive" src='../assets/icons/group_exercise.png' style="margin:auto;">
              <p class="text-muted text-center">Group Exercise Studio</p> 
            </div>
            <div class="col-md-3 col-sm-3 col-xs-3">
              <img class="img-responsive" src='../assets/icons/boxing_mma.png' style="margin:auto;">
              <p class="text-muted text-center">Boxing / MMA</p>  
            </div>
            <div class="col-md-3 col-sm-3 col-xs-3">
              <img class="img-responsive" src='../assets/icons/sauna_room.png' style="margin:auto;">
              <p class="text-muted text-center">Sauna</p> 
            </div>
            <div class="col-md-3 col-sm-3 col-xs-3">
              <img class="img-responsive" src='../assets/icons/juice_bar.png' style="margin:auto;">
              <p class="text-muted text-center">Juice Bar</p> 
            </div>
          </div>
          <div uib-slide index="3">
            <div class="col-md-3 col-sm-3 col-xs-3">
              <img class="img-responsive" src='../assets/icons/unlimited_gx_classes.png' style="margin:auto;">
              <p class="text-muted text-center">Unlimited GX Classes</p>  
            </div>
            <div class="col-md-3 col-sm-3 col-xs-3">
              <img class="img-responsive" src='../assets/icons/personal_training.png' style="margin:auto;">
              <p class="text-muted text-center">Personal Training</p> 
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="style" />
    <div class="row space">
      <div class="col-md-12 col-sm-12 col-xs-12">
        <div uib-carousel class="carousel" active="membershipSlides.active" interval="myInterval" no-wrap="noWrapSlides">
          <div uib-slide class="cursor" ng-click="showContent(0)" index="0">
            <div class="col-md-3 col-sm-3 col-xs-3">
              <div class="round">
                <img class="img-responsive" src="../assets/icons/unlimited_gx_classes.png" />
              </div>
            </div>
            <div class="col-md-9 col-sm-9 col-xs-9">
              <div class="round-image-text">
                <h3 class="text-muted">UNLIMITIED GROUP EXERCISE CLASS</h3>
                <p class="text-muted">Choose from over 40 different Group Exercise Classes that includes, Zumba, Les Mills, RPM, yoga
                  , My Perfect Shape, Pilates and More. 
                </p>
                <p>&nbsp;</p>
              </div>
            </div>
          </div>
          <div uib-slide class="cursor" ng-click="showContent(1)" index="1">
            <div class="col-md-3 col-sm-3 col-xs-3">
              <div class="round">
                <img class="img-responsive" src="../assets/icons/backpack.png" />
              </div>
            </div>
            <div class="col-md-9 col-sm-9 col-xs-9">
              <div class="round-image-text">
                <h3 class="text-muted">GOLD'S GYM STARTER PACK</h3>
                <p class="text-muted">Start your fitness journey with complimentary gift and goodies from Gold's Gym.
                </p>
                <p>&nbsp;</p>
              </div>
            </div>
          </div>

          <div uib-slide class="cursor" ng-click="showContent(2)" index="2">
            <div class="col-md-4 col-sm-4 col-xs-4">
              <div class="round">
                <img class="img-responsive" src="../assets/icons/personal_training_program.png" />
              </div>
            </div>
            <div class="col-md-8 col-sm-8 col-xs-8">
              <div class="round-image-text">
                <h3 class="text-muted">PERSONAL TRAINING</h3>
                <p class="text-muted">Our team of professionally certified Personal Trainers will help you achieve the results you've always wanted in the gym
                </p>
                <p>&nbsp;</p>
              </div>
            </div>
          </div>


          <div uib-slide class="cursor" ng-click="showContent(3)" index="3">
            <div class="col-md-3 col-sm-3 col-xs-3">
              <div class="round">
                <img class="img-responsive" src="../assets/icons/members.png" />
              </div>
            </div>
            <div class="col-md-9 col-sm-9 col-xs-9">
              <div class="round-image-text">
                <h3 class="text-muted">MEMBER PRIVILEGE PROGRAM</h3>
                <p class="text-muted">Gold's Gym Member's get exclusive discount with partner resturant, shops, and stores.
                  just present your membership card and enjoy additional benefits.
                </p>
                <p>&nbsp;</p>
              </div>
            </div>
          </div>


          <div uib-slide class="cursor" ng-click="showContent(4)" index="4">
            <div class="col-md-3 col-sm-3 col-xs-3">
              <div class="round">
                <img class="img-responsive" src="../assets/icons/fitness.png" />
              </div>
            </div>
            <div class="col-md-9 col-sm-9 col-xs-9">
              <div class="round-image-text">
                <h3 class="text-muted">FITNESS CAMPAIGN</h3>
                <p class="text-muted">Are you raedy for a challenge? Gold's Gym Fitness Campaign rewards it's members for being active and achieving thier goals 
                </p>
                <p>&nbsp;</p>
              </div>
            </div>
          </div>

          <div uib-slide class="cursor" ng-click="showContent(5)" index="5">
            <div class="col-md-3 col-sm-3 col-xs-3">
              <div class="round">
                <img class="img-responsive" src="../assets/icons/calendar.png" />
              </div>
            </div>
            <div class="col-md-9 col-sm-9 col-xs-9">
              <div class="round-image-text">
                <h3 class="text-muted">IN-CLUB EVENTS AND ANNIVERSARY</h3>
                <p class="text-muted">Celebrate and embrace Fitness as your new lifestyle with our members-only and open to public events
                </p>
                <p>&nbsp;</p>
              </div>
            </div>
          </div>

          <div uib-slide class="cursor" ng-click="showContent(6)" index="6">
            <div class="col-md-3 col-sm-3 col-xs-3">
              <div class="round">
                <img class="img-responsive" src="../assets/icons/epp.png" />
              </div>
            </div>
            <div class="col-md-9 col-sm-9 col-xs-9">
              <div class="round-image-text">
                <h3 class="text-muted">EASY PAYMENT PLAN AND CORPORATE DISCOUNTS</h3>
                <p class="text-muted">Enjoy flexible payment options and exclusive rates for your Gold's Gym Membership
                </p>
                <p>&nbsp;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row space">
           <div class="col-md-12 col-sm-12 colxs-12 back-block">
                <div class="col-md-3 pull-right">
                    <span>Back</span><img ng-click="cityLocations()" class="img-responsive" src="../assets/club/back.png" />
                </div>
            </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'AlBarshaClub',
  data () {
    return {
      msg: 'AlBarshaClub'
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


#club .club_name {
  font-weight: bold;
}

#club .ggi-btn {
  background-color: #fee300 !important;
  color: #333333 !important;
  font-weight: bold !important;
  border: #fee300 !important;
}

#club .btn-blue {
  background-color: #21ade7 !important;
  color: #ffffff !important;
  font-weight: bold !important;
    border: #21ade7 !important;
    border-radius:2em !important;
    padding: 1.5em;
    text-align: center;
    margin: 0.2em 0 0.2em 0;
}

#club .text1 {
  color: #333333;
  font-size: 4em;
}

#club .text2 {
  font-weight: bold;
  font-size: 5em;
  color: #333333;
}

#club hr.style {
  border-top: 2px solid #969595;
}

#club .gallery {
  padding-top: 0.5em;
    cursor: pointer;
}

#club .ggi-icons {
   display: block;
    margin-left: auto;
    margin-right: auto;
}

#club .responsive-img .ggi-icons {
  margin: 0 auto !important;
}

#club .ggi-icons.equipment {
  width: 50%;
}

#club .ggi-icons.unisex {
  width: 45%;
}

#club .ggi-icons.shower {
  width: 45%;
}

#club .ggi-icons.locker {
  width: 60%;
}

#club .space {
  margin-bottom: 1em !important;
}

#club .round {
  padding: 1em;
  width: 9em;
    border: 0.3em solid #21ade7 !important;
    border-radius: 10em !important;
    -webkit-border-radius: 10em !important;
    -moz-border-radius: 10em !important;
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
}

#club .round-image-text {
    display: block;
    margin-left: 1px;
    padding: 1em;
}

#club .back-block span {
    float: right;
    vertical-align: middle;
    display: inline-block;
    font: 2.5em bold;
}

#club .back-block img {
    float: right;
    display: inline-block;
    width: 2.9em;
    cursor: pointer;
}

#club .slide-inline {
    display: inline-block !important;
}

#club a {
    color: #FFE900 !important;
    background-color: none !important;
}

#club .carousel {
    min-height: 14em !important;
}

#club .cursor {
    cursor: pointer !important;
}



</style>