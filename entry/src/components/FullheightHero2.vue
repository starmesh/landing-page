<template>
  <div class="FullheightHero2">
    <section class="hero is-primary is-fullheight header-image">
        <div class="hero-body">
            <div class="container has-text-centered">
                <h1 class="title">
                    StarMesh
                </h1>
                <h2 class="subtitle">
                    Earth Observation data.
                </h2>
                <h2 class="subtitle">
                    Cryptographically verifiable and distributed.
                </h2>  
            </div>
        </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FullheightHero2 extends Vue {}
// background-image: url("../assets/img/esa/Baltic_blooms.jpg");
</script>

<style scoped>
/* https://www.esa.int/ESA_Multimedia/Images/2019/12/Baltic_blooms */
 .header-image {
    background-image: url("../assets/img/esa/Tromsoe_Norway.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-color: #999;
}

</style>