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
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item clickable tag="a" href="http://localhost:8080/#/">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="http://localhost:8080/#/editor">
          <q-item-section avatar>
            <q-icon name="edit" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Editor</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="http://localhost:8080/#/bluetooth">
          <q-item-section avatar>
            <q-icon name="bluetooth" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Bluetooth</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="http://localhost:8080/#/connection">
          <q-item-section avatar>
            <q-icon name="wifi" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Connection</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="http://localhost:8080/#/fileUpload">
          <q-item-section avatar>
            <q-icon name="cloud_upload" />
          </q-item-section>
          <q-item-section>
            <q-item-label>File Upload</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="http://localhost:8080/#/Login">
          <q-item-section avatar>
            <q-icon name="work" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Login</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="http://localhost:8080/#/Register">
          <q-item-section avatar>
            <q-icon name="notes" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Register</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="http://localhost:8080/#/Settings">
          <q-item-section avatar>
            <q-icon name="settings_applications" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Settings</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="http://localhost:8080/#/camera">
          <q-item-section avatar>
            <q-icon name="camera" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Camera</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="http://localhost:8080/#/dateTime">
          <q-item-section avatar>
            <q-icon name="calendar_today" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Calendar</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="http://localhost:8080/#/map">
          <q-item-section avatar>
            <q-icon name="map" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Map</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
<!-- target=_blank causes the page to open in a new tab -->
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
