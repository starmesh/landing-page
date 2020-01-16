<template>
  <div class="FullheightHero">
    <section
      :style="{'background-image': 'url(' + bg + ')'}"
      class="hero is-primary is-fullheight header-image"
    >
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns" >
            <div class="column is-3">
              <div class="box">
                <article class="media">
                  <div class="media-content">
                    <div class="content">
                      <p v-for="(t, index) in text" :key="index">
                        <span v-html="t"></span>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FullheightHero extends Vue {
  @Prop(String) public img!: string;
  @Prop(Array) public text!: string;

  get bg () {
      return require(`../assets/img/esa/${this.img}.jpg`);
    }
}
// background-image: url("../assets/img/esa/Baltic_blooms.jpg");
</script>

<style>
/* https://www.esa.int/ESA_Multimedia/Images/2019/12/Baltic_blooms */
.header-image {
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #999;
}
.box {
    background-color: hsla(0, 0%, 10%, 0.55);
    color: #fff;
    text-shadow: 1px 1px 0px #1a1a1a;
}

.content h3 {
    color: aliceblue;
} 
</style>