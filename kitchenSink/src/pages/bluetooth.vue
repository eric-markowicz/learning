<template>
  <q-page class="container">
    <div class="row items-center justify-center" style="height: 80vh">
      <div class="col-10 text-center">
        <div class="text-h6 text-negative" v-if="!enableBluetooth">Your browser does not support the bluetooth API</div>
        <q-btn
          :color="enableBluetooth ? 'primary' : 'grey-6'"
          icon="bluetooth"
          label="Test Blueetooth"
          class="full-width"
          size="lg"
          @click="bluetooth()"
          :disable="!enableBluetooth" />
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      enableBluetooth: true
    }
  },
  mounted () {
    if (navigator.bluetooth) {
      this.enableBluetooth = true
    } else {
      console.log(navigator.bluetooth)
    }
  },
  methods: {
    bluetooth () {
      navigator.bluetooth.requestDevice({
        acceptAllDevices: true
      })
        .then((test) => {
          console.log(test)
        }).catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
</style>
