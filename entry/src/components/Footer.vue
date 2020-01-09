<template>
  <div class="footer">
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>🛰🌍 StarMesh</strong> source from <a href="https://github.com/starmesh/landing-page">starmesh/landing-page</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. Follow Us <a href="https://twitter/StarMesh1">twitter.com/StarMesh1</a>.
        </p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {}
</script>

<style scoped>
.footer {
  background-color: #252429;
}
</style>
