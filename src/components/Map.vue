<template>
  <div class="map-block">
    <div class="row no-gutters">
      <div class="col-12 col-md-6 map-info block-container">
        <h2>Our Offices</h2>
        <ul class="tabs-list-group">
          <li
            class="tabs-list"
            v-for="(city, index) in cities" 
            @click= "selectCity (index)"
            :class= "{'active': selectedCityIndex === index}"
          >
          {{city.name}}
          </li>
        </ul>
        <div>
          <p class="tab-title">{{city.title}}</p>
          <div>
            <p class="tab-detailed-info">{{city.addres}}</p>
            <p class="tab-detailed-info">{{city.postIndex}}</p>
            <p class="tab-detailed-info">{{city.country}}</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 no-gutters">
        <div id="map">
        </div>
      </div>
    </div>

   

  </div>
</template>

<script>

const getCity = (name, title, addres, postIndex, country, coordinates) => ({name, title, addres, postIndex, country, coordinates})

const cities = [
  getCity ('Kyiv', 'Global Message Services Ukraine LLC', 'Kuiv, Stepan Bandera, 33', '02066', 'Ukraine', {lat: 50.438496, lng: 30.523223}),
  getCity ('New York', 'Global Message Services USA LLC', 'New York, Stepan Bandera, 33', '02066', 'USA', {lat: 40.657327, lng:  -73.940843}),
  getCity ('Guangzhou', 'Global Message Services China LLC', 'Guangzhou, Stepan Bandera, 33', '02066', 'China', {lat: 23.137254, lng: 113.259642}),
  getCity ('Barcelona', 'Global Message Services Spain LLC', 'Barcelona, Stepan Bandera, 33', '02066', 'Spain', {lat: 41.396419, lng: 2.182776}),
]
// import GoogleMapsLoader from 'google-maps'
// import { createClient } from "@google/maps"
// const googleMaps = createClient({
//   key: "AIzaSyA3NeKg-a8Zp8Ax215RcXHmGlo2n-NqIl4"
// })
import jsonMap from '../assets/map/googleMapStyle.json'

export default {
  name: 'Map',
  data () {
    return {
      selectedCityIndex: 0,
      cities: cities,
      city: cities[0],
      map: null,
      mapOptions: {
        scrollwheel: true,
        center: cities[0].coordinates,
        disableDefaultUI: true,
        zoom: 12,
        styles: jsonMap,
      },
      circleOptions: {
        strokeWeight:30,
        strokeColor: '#54B565',
        radius: 0,
      },
    };
  },  
  props: {
  },

  methods: {
    selectCity (index) {
      this.city = cities[index];
      this.selectedCityIndex = index;
      this.map.setCenter(this.city.coordinates); 
      this.showMarker();
    },
    initMap() {
      let el = document.getElementById('map')
      this.map = new google.maps.Map(el, this.mapOptions);
      this.showMarker();
    },
    showMarker() {
      this.circleOptions.center = this.city.coordinates;
      let circle = new google.maps.Circle(this.circleOptions);
      circle.setMap(this.map);
    }
  },
  mounted: function () {
    setTimeout(this.initMap, 0);
  }
}
</script>

<style lang='scss' scoped>
  .map-block {
    $darkBg: #272727;
    background-color: $darkBg;
    color: white;
    font-family: "Suisse Intl";
    padding: 0!important;
    .map-info {
      .tabs-list-group {
        display: flex;
        padding: 0;
        .tabs-list {
          display: flex;
          justify-content: center;
          align-items: center;
          list-style-type: none;
          margin-right: 30px;
          margin-bottom: 20px;
          margin-top: 25px;
          font-size: 11px;
          letter-spacing: 2px;
          line-height: 22px;
          text-transform: uppercase;
          font-weight: bold;
          cursor: pointer;          
          &:hover {
            color: #3db565;
          }
          &:last-child {
            margin-right: 0;
          }
          @media(max-width: 400px) {
            margin-right: 10px;
          }
        }
        .active {
          color: #3db565;
        }
      }
      .tab-title {
        font-size: 26px;
        letter-spacing: 1px;
        line-height: 30px;
        margin-bottom: 35px!important;
      }
      .tab-detailed-info {
        font-size: 11px;
        letter-spacing: 0px;
        line-height: 20px;
      }
    }
    #map {
      height: 100%;
      min-height: 300px;

    }


  }
</style>
