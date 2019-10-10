<template>
  <q-uploader
    url=""
    multiple
    batch
    :filter="checkFile"
    label="Image Upload"
    formfields
    ></q-uploader>
</template>

<script>
export default {
  methods: {
    checkFile (files) {
      const MAX_FILE_SIZE = 1e6
      return files.filter(file => file.size < MAX_FILE_SIZE && (file.type === 'image/png' || file.type === 'image/jpg'))
    }
  }
}
</script>
