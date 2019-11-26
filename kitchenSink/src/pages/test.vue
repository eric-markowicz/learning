<template>
  <q-page padding>
    <p>{{ dev }}</p>
    <p>{{ dev2 }}</p>
    <q-btn @click="save" label="Save"></q-btn>
  </q-page>
</template>

<script>
// Need to prefix cordova calls with window or navigator
// var x = navigator.device.model
export default {
  data () {
    return {
      dev: window.device.platform,
      dev2: window.cordova.file
    }
  },
  mounted () {
    // this.dev = cordova.device.model
    // console.log(this.dev)
  },
  methods:
  {
    save () {
      window.resolveLocalFileSystemURL(
        // Path for save loc
        'file:///storage/emulated/0/DCIM/Camera',
        // window.cordova.file.externalDataDirectory,
        function (dir) {
          dir.getFile(
            // File name
            'test2.txt',
            {
              create: true
            },
            function (file) {
              file.createWriter(
                function (fileWriter) {
                  // What is written inside the file
                  // this.dev2 = 'test'
                  fileWriter.write('test gndfsibvisvijdnvnnvnrtnbanbiuniubiuniu')
                }
              )
            }
          )
        }
      )
    }
  }
}
</script>
