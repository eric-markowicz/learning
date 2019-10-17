<template>
  <q-page padding>
   <div id="tui-image-editor" style="height: 800px">
     <canvas></canvas>
   </div>
  </q-page>
</template>

<script>
var ImageEditor = require('tui-image-editor')
var instance = new ImageEditor(document.querySelector('#tui-image-editor'), {
  cssMaxWidth: 700,
  cssMaxHeight: 500,
  selectionStyle: {
    cornerSize: 20,
    rotatingPointOffset: 70
  }
})
// Create image editor
var imageEditor = new ImageEditor('#my-image-editor canvas', {
  cssMaxWidth: 1000, // Component default value: 1000
  cssMaxHeight: 800// Component default value: 800
})

// Load image
imageEditor.loadImageFromURL('img/sampleImage.jpg', 'My sample image')
export default {
  instance
  // name: 'PageName',
}
</script>
