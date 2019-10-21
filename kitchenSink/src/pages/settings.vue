<template>
  <q-page padding>
   <p>{{ count }}</p>
   <q-btn color="blue" @click='increment'>+</q-btn>
   <q-btn color="blue" @click='decrement'>-</q-btn>
   <br>
   <q-radio keep-color @input='colorSet' v-model="color" val="teal" label="Teal" color="teal" ></q-radio>
   <q-radio keep-color @input='colorSet' v-model="color" val="orange" label="Orange" color="orange" ></q-radio>
   <q-radio keep-color @input='colorSet' v-model="color" val="red" label="Red" color="red" ></q-radio>
   <q-radio keep-color @input='colorSet' v-model="color" val="cyan" label="Cyan" color="cyan" ></q-radio>
   <br>
   <p :class='textColor' style='font-size:26px'>This is a test</p>
   <br>
   <q-btn @click='save' color="blue">Save settings</q-btn>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      color: this.$store.state.textColor
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    },
    textColor () {
      return 'text-' + this.$store.state.textColor
    }
  },

  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    },
    colorSet () {
      this.$store.commit('colorSet', this.color)
    },
    save () {
      this.$store.commit('saveState')
    }

  },
  beforeCreate () {
    this.$store.commit('initialiseStore')
  }
}
</script>
