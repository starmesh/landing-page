<template>
  <div class="moosend-email-wrapper">
    <form action="https://app.moosend.com/subscribe/87930c03-8f8b-4964-97a9-4dbd38a7ab13" 
      method="post" id="ms-sub-form" target="_blank">
    <div>
      <b-field 
        label-position="on-border"
        label="Email" >
        <b-input type="email" name="ms-email" id="email" maxlength="64" required placeholder="example@yourcompany.com">
        </b-input>
      </b-field>
      <b-button native-type="submit" class="button is-primary">Subscribe</b-button>
    </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MooSend extends Vue {}
</script>

<style scoped>
input#email.input {
  background-color: #000000;
  color: white;
}

.moosend-email-wrapper {
  background-color: #fafafa;
  padding: 1em;
}
/* .label {
  color: #ffffff;
  background-color: #252429;
*/
</style>
