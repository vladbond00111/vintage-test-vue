<template>
  <div class="contacts block-container">
    <h1>
      Contacts
    </h1>
    <div class="row">
      <div class="col-12 col-lg-6">
        <h2>
          <span class="green-color">GMS</span>  Headquarters
        </h2>
        <div class="row">
          <div class="col-12 col-sm-6">
            <p>
              Global Message Services Ukraine LLC
              <br>
              Bundesstrasse 5 | 3rd Floor
              <br>
              6300 Zug
              <br>
              Switzerland
            </p> 
            <p class="green-color phone-number">
              <a href="tel:+41415446200">+41 41 544 62 00</a>              
            </p>
          </div>
          <div class="col-12 col-sm-6">
            <p>
              Email
            </p>
            <p>
              <a class="green-color bold" href="mailto:nfo@gms-worldwide.com">nfo@gms-worldwide.com</a>
            </p>
            <p>
              Send message
            </p>
            <p>
              <a class="green-color bold" href="#">Viber us</a>
            </p>
            <p>
              Send form
            </p>
            <p>
              <a class="green-color bold" href="#form">Contact us</a>
            </p>
          </div>
        </div>        
      </div>
      <div class="col-12 col-lg-6">
        <h2>
          Technical support <span class="green-color">24/7</span> 
        </h2>
        <p>
          GMS understands that it can be hard to follow all new technologies. We regularly provide for all our clients educational trainings to make your operator`s business earn more and better though our best practices.
        </p>
        <p class="green-color phone-number">
          <a href="tel:+41415446206">+41 41 544 62 06</a>   
          
        </p>       
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contacts',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  .contacts {
    p {
      font-size: 15px;
      line-height: 28px;
    }
    .bold {
      font-weight: bold;
    }
    .phone-number {
      font-size: 26px;
      line-height: 36px;
    }
  }
</style>
