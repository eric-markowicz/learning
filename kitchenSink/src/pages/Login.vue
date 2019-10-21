<template>
 <div>
   <q-form ref="login" class="login" @submit.prevent="login">
     <h1>Log in</h1>
     <label>Email</label>
     <q-input required v-model="email" type="email" filled outlined placeholder="example@email.com"/>
     <label>Password</label>
     <q-input v-model="password" type="password" :rules="[
            val => !!val || '* Required',
            val => val.length > 6 || 'Password needs to be longer than 6 characters',
          ]"
        lazy-rules filled outlined placeholder="Password"/>
     <hr/>
     <q-btn type="submit" label="Login" color="blue"></q-btn>
   </q-form>
 </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''

    }
  },

  methods: {
    login () {
      let email = this.email
      let password = this.password
      this.$store.dispatch('login', { email, password })
        .then(() => this.$router.push('Secured'))
        .catch(err => console.log(err))
      // .catch(this.$router.push('Secured'))
    }
  }
}
</script>
