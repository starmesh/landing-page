<template>
  <div :id="id" class="FullheightHero">
    <section
      :style="{'background-image': 'url(' + bg + ')'}"
      class="hero is-primary is-fullheight header-image"
    >
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns" >
            <div class="column is-4">
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
    <div v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }" :id="id"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FullheightHero extends Vue {
  @Prop(String) public img!: string;
  @Prop(Array) public text!: string;
  @Prop(String) public id!: string;

  isSafari() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }

  get bg () {
    return this.isSafari() ? `./img/esa/${this.img}.jpg` : `./img/esa/${this.img}.webp`;
  }
  
  public intersectionOptions: any = {
    root: null,
    rootMargin: '0px',
    threshold: [1, 0] // [0.25, 0.75] if you want a 25% offset!
  }

  private onWaypoint ({ el, going, direction }: object): void {
      // going: in, out
      // direction: top, right, bottom, left
      if (going === this.$waypointMap.GOING_IN 
        && direction === this.$waypointMap.DIRECTION_TOP) {
        this.$router.push({ name: 'blockchain', hash: `#${el.getAttribute('id')}` })
      }
    }
}
</script>

<style scoped>
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

.content >>> h3 {
    color: aliceblue;
} 
</style>