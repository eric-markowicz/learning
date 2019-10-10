<template>
    <div id="app">
        <div><video ref="video" id="video" width="640" height="480"></video></div>
        <div><q-btn @click="capture" icon="camera"></q-btn></div>
        <div><q-btn @click="activate" icon="camera">activate</q-btn></div>
        <div><q-btn @click="deactivate" icon="camera">deactivate</q-btn></div>
        <div><q-btn @click="savePhoto" icon="save">Save Photo</q-btn></div>
        <div><q-btn @click="clearPhoto" icon="delete">Delete Photo</q-btn></div>
        <div><q-img :src="url"></q-img></div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      video: {},
      canvas: {},
      captures: [],
      url: ''
    }
  },
  mounted () {
    this.video = this.$refs.video
  },
  methods: {
    capture () {
      try {
        const photoStream = this.video.srcObject.getVideoTracks()[0]
        const photo = new window.ImageCapture(photoStream)
        photo.takePhoto().then(blob => {
          console.log(blob)
          this.url = URL.createObjectURL(blob)
        })
      } catch (error) {
        this.$q.notify('Need to activate camera first')
      }
    },
    activate () {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          try {
            this.video.srcObject = stream
            this.video.play()
          } catch (error) {
            this.video.srcObject = URL.createObjectURL(stream)
          }
          console.log('DONE')
        })
        .catch(err => {
          console.log(err.name + ': ' + err.message)
        })
    },
    deactivate () {
      const tracks = this.video.srcObject.getTracks()
      tracks.map(track => track.stop())
      this.video.srcObject = null
    },
    savePhoto () {
      // Needs to be implemented
    },
    clearPhoto () {
      this.url = ''
    }
  },

  beforeDestroyed () {
    const tracks = this.video.getTracks()
    tracks.map(track => track.stop())
  }
}
</script>
