<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title class="text-center">
          KitchenSink
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item clickable tag="a" target="_blank" href="http://10.40.63.203:8080/#">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
            <q-item-label caption>http://10.40.63.203:8080/#</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="http://10.40.63.203:8080/#/editor">
          <q-item-section avatar>
            <q-icon name="page" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Editor</q-item-label>
            <q-item-label caption>http://10.40.63.203:8080/#/editor</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="http://10.40.63.203:8080/#/bluetooth">
          <q-item-section avatar>
            <q-icon name="bluetooth" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Bluetooth</q-item-label>
            <q-item-label caption>http://10.40.63.203:8080/#/bluetooth</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="http://10.40.63.203:8080/#/connection">
          <q-item-section avatar>
            <q-icon name="connection" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Connection</q-item-label>
            <q-item-label caption>http://10.40.63.203:8080/#/connection</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="http://10.40.63.203:8080/#/fileUpload">
          <q-item-section avatar>
            <q-icon name="file" />
          </q-item-section>
          <q-item-section>
            <q-item-label>File Upload</q-item-label>
            <q-item-label caption>http://10.40.63.203:8080/#/fileUpload</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="http://10.40.63.203:8080/#/Login">
          <q-item-section avatar>
            <q-icon name="Login" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Login</q-item-label>
            <q-item-label caption>http://10.40.63.203:8080/#/Login</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="http://10.40.63.203:8080/#/Register">
          <q-item-section avatar>
            <q-icon name="Register" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Register</q-item-label>
            <q-item-label caption>http://10.40.63.203:8080/#/Register</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="http://10.40.63.203:8080/#/Settings">
          <q-item-section avatar>
            <q-icon name="Settings" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Settings</q-item-label>
            <q-item-label caption>http://10.40.63.203:8080/#/Settings</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="http://10.40.63.203:8080/#/takePic">
          <q-item-section avatar>
            <q-icon name="camera" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Camera</q-item-label>
            <q-item-label caption>http://10.40.63.203:8080/#/takePic</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
