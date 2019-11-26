<template>
  <q-page>
    <input type="file" ref="fileInput" @change="setImg" hidden />
    <div @click="triggerImg" class="triggerImg">
      <q-btn label="Choose image to edit" icon="add" color="blue"></q-btn>
    </div>
    <q-btn-group edit>
      <div><q-btn edit color="blue" @click="draw" :hidden="noPhoto" icon="edit" :label="drawingStatus ? 'Disable Drawing' : 'Enable Drawing'"></q-btn></div>
      <div><q-btn edit color="blue" @click="circle" :hidden="noPhoto" icon="radio_button_unchecked">Add Circle</q-btn></div>
      <div><q-btn edit color="blue" @click="text" :hidden="noPhoto" icon="text_format">Add Text</q-btn></div>
      <div><q-btn edit color="blue" @click="savePhoto" :hidden="noPhoto" icon="save">Save Photo</q-btn></div>
      <div><q-btn edit color="blue" @click="clearPhoto" :hidden="noPhoto" icon="delete">Delete Photo</q-btn></div>
    </q-btn-group>
    <canvas id="myCanvas" width="0" height="0"></canvas>
  </q-page>
</template>

<script>
import { fabric } from 'fabric'
var FileSaver = require('file-saver')
export default {
  data () {
    return {
      c: {},
      noPhoto: true,
      drawingStatus: false
    }
  },
  mounted () {
    this.c = new fabric.Canvas('myCanvas')
    console.log(this.c)
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
    triggerImg () {
      this.$refs.fileInput.click()
      console.log(this.$refs.fileInput)
    },
    setImg (file) {
      var fileimg = file.target.files[0]
      console.log(fileimg)
      var reader = new FileReader()
      console.log(reader)
      reader.onload = f => {
        var imgPath = f.target.result
        fabric.Image.fromURL(imgPath, imgo => {
          imgo.scaleToHeight(500)
          imgo.scaleToWidth(500)
          this.c.setDimensions({ width: imgo.width, height: imgo.height })
          this.c.add(imgo.set({ selectable: false }))
          console.log(this.imgo)
        })
      }
      reader.readAsDataURL(fileimg)
      this.noPhoto = false
    },

    savePhoto () {
      this.drawingOff()
      if (window.device.platform === 'Android') {
        this.androidSave()
      } else {
        this.pwaSave()
      }
    },

    pwaSave () {
      FileSaver.saveAs(this.c.toDataURL(), 'test.jpg') // Save
    },

    androidSave () {
      window.canvas2ImagePlugin.saveImageDataToLibrary(
        function (msg) {
          console.log(msg)// msg is the filename path (for android and iOS)
        },
        function (err) {
          console.log(err)
        },
        document.getElementById('myCanvas'),
        '.jpg' // File extension. File name is save as current date time
      )
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
  }
}
</script>
