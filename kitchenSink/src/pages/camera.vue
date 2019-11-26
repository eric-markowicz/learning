<template>
    <div id="app">
        <div><video ref="video" id="video" width="640" height="480"></video></div>
        <q-btn-group camera>
          <div><q-btn camera color="blue" @click="capture" :disable="!isActive" icon="camera">Capture</q-btn></div>
          <div><q-btn camera color="blue" @click="activate" :disable="isActive" icon="camera">Activate Camera</q-btn></div>
          <div><q-btn camera color="blue" @click="deactivate" :disable="!isActive" icon="camera">Deactivate Camera</q-btn></div>
          <div><q-btn camera color="blue" @click="savePhoto" :hidden="noPhoto" icon="save">Save Photo</q-btn></div>
          <div><q-btn camera color="blue" @click="clearPhoto" :hidden="noPhoto" icon="delete">Delete Photo</q-btn></div>
        </q-btn-group>
        <br>
        <br>
        <q-btn-group edit>
          <div><q-btn edit color="blue" @click="draw" :hidden="noPhoto" icon="edit" :label="drawingStatus ? 'Disable Drawing' : 'Enable Drawing'"></q-btn></div>
          <div><q-btn edit color="blue" @click="circle" :hidden="noPhoto" icon="radio_button_unchecked">Add Circle</q-btn></div>
          <div><q-btn edit color="blue" @click="text" :hidden="noPhoto" icon="text_format">Add Text</q-btn></div>
        </q-btn-group>
        <canvas id="myCanvas" width="0" height="0"></canvas>
    </div>
</template>

<script>
import { fabric } from 'fabric'
var FileSaver = require('file-saver')
export default {
  data () {
    return {
      video: {},
      url: '',
      c: {},
      isActive: false,
      noPhoto: true,
      drawingStatus: false
    }
  },
  mounted () {
    this.video = this.$refs.video
    this.c = new fabric.Canvas('myCanvas')
    console.log(this.video)
  },
  methods: {
    drawingOff () {
      this.c.isDrawingMode = false
      this.drawingStatus = this.c.isDrawingMode
      return this.c.isDrawingMode
    },
    drawingOn () {
      this.c.isDrawingMode = true
      this.drawingStatus = this.c.isDrawingMode
      return this.c.isDrawingMode
    },
    capture () {
      try {
        const photoStream = this.video.srcObject.getVideoTracks()[0]
        const photo = new window.ImageCapture(photoStream)
        photo.takePhoto().then(blob => {
          this.url = URL.createObjectURL(blob)
          fabric.Image.fromURL(this.url, img => {
            this.c.setDimensions({ width: img.width, height: img.height })
            this.c.add(img.set({ selectable: false }))
            this.noPhoto = false
          })
        })
      } catch (error) {
        console.log(error)
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
        }).catch(err => {
          console.log(err.name + ': ' + err.message)
        })
      this.isActive = true
    },
    deactivate () {
      const tracks = this.video.srcObject.getTracks()
      tracks.map(track => track.stop())
      this.video.srcObject = null
      this.isActive = false
    },
    savePhoto () {
      this.drawingOff()
      FileSaver.saveAs(this.c.toDataURL(), 'test.jpg')
    },
    clearPhoto () {
      this.drawingOff()
      this.c.clear()
      this.noPhoto = true
    },
    draw () {
      if (this.drawingStatus) {
        this.drawingOff()
      } else {
        this.drawingOn()
      }
    },
    text () {
      this.drawingOff()
      var string = new fabric.IText('', { left: 100, top: 100 })
      this.c.add(string.enterEditing())
      this.c.setActiveObject(string)
    },
    circle () {
      this.drawingOff()
      var circle = new fabric.Circle({
        radius: 20,
        fill: 'transparent',
        stroke: 'red',
        strokeWidth: 2
      })
      this.c.add(circle)
    }
  },

  beforeDestroyed () {
    const tracks = this.video.getTracks()
    tracks.map(track => track.stop())
  }
}
</script>
