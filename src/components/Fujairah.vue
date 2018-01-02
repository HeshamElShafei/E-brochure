<template>
  <div id="city-location">
    <div class="col-md-10 col-md-offset-2 col-sm-10 col-sm-offset-2 col-xs-12">
        <div class="col-md-12">
            <h1 class="text1">Fujairah</h1>
            <h1 class="text2">Locations</h1>
        </div>
        <div class="row">
            <div class="col-md-8 col-sm-8 col-xs-12">
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <table class="table">
                        <tbody>
                            <tr ng-click="club()" class="cursor">
                                <td><h3 class="text-muted">Ibn Battuta Gate - Mixed Club</h3></td>
                                <td><img class="img-responsive arrow hidden-xs" ng-src="../../img/city_location/arrow.png" /></td>
                                <td><img class="img-responsive visible-xs" ng-src="../../img/city_location/arrow.png" /></td>
                            </tr>
                            <tr ng-click="club()" class="cursor">
                                <td><h3 class="text-muted">Reef Mall - Mixed Club</h3></td>
                                <td><img class="img-responsive arrow hidden-xs" ng-src="../assets/city_location/arrow.png" /></td>
                                <td><img class="img-responsive visible-xs" ng-src="../../img/city_location/arrow.png" /></td>
                            </tr>
                            <tr ng-click="club()" class="cursor">
                                <td><h3 class="text-muted">Business Village Deira - Mixed Club</h3></td>
                                <td><img class="img-responsive arrow hidden-xs" ng-src="../../img/city_location/arrow.png" /></td>
                                <td><img class="img-responsive visible-xs" ng-src="../../img/city_location/arrow.png" /></td>
                            </tr>
                            <tr ng-click="club()" class="cursor">
                                <td><h3 class="text-muted">Business Village Deira - Ladies Club</h3></td>
                                <td><img class="img-responsive arrow hidden-xs" ng-src="../../img/city_location/arrow.png" /></td>
                                <td><img class="img-responsive visible-xs" ng-src="../../img/city_location/arrow.png" /></td>
                            </tr>
                            <tr ng-click="club()" class="cursor">
                                <td><h3 class="text-muted">Al Barsha - Mixed Club</h3></td>
                                <td><img class="img-responsive arrow hidden-xs" ng-src="../../img/city_location/arrow.png" /></td>
                                <td><img class="img-responsive visible-xs" ng-src="../../img/city_location/arrow.png" /></td>
                            </tr>
                            <tr ng-click="club()" class="cursor">
                                <td><h3 class="text-muted">Al Barsha - Ladies Club</h3></td>
                                <td><img class="img-responsive arrow hidden-xs" ng-src="../../img/city_location/arrow.png" /></td>
                                <td><img class="img-responsive visible-xs" ng-src="../../img/city_location/arrow.png" /></td>
                            </tr>
                        </tbody>
                    </table> 
                </div>
               <div class="col-md-12 back-block">
                    <div class="col-md-3 col-sm-3 col-xs-12 pull-right">
                        <span>Back</span><img ng-click="locations()" class="img-responsive" ng-src="../../img/city_location/back.png" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'Fujairah',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#city-location {
  padding-top: 2em;
    width: 100%;
    height: 100%;
    display: block;
    background: url('../assets/city_location/bg.png') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

#city-location .btn {
  background-color: #fee300 !important;
  color: #333333 !important;
  font-weight: bold !important;
  border: #fee300 !important;
}

#city-location .arrow {
    cursor: pointer;
    padding-top: 0.9em;
    width: 35%;
    vertical-align: bottom;
    float: right;
}

#city-location .text1 {
    color: #21ade7;
    font-weight: bold;
  font-size: 4em;
}

#city-location .text2 {
  font-weight: bold;
  font-size: 4em;
  color: #333333;
}

#city-location .back-block span {
    float: right;
    vertical-align: middle;
    display: inline-block;
    font: 2.5em bold;
}

#city-location .back-block img {
    float: right;
    display: inline-block;
    width: 2.9em;
    cursor: pointer;
}

#city-location .cursor {
    cursor: pointer !important;
}

</style>
