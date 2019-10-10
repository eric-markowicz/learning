import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue')
      },
      {
        path: '/login',
        component: () => import('pages/Login')
      },
      {
        path: '/register',
        component: () => import('pages/Register')
      },
      {
        path: '/secured',
        component: () => import('pages/Secured'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/bluetooth',
        component: () => import('pages/bluetooth')
      },
      {
        path: '/settings',
        component: () => import('pages/settings')
      },
      {
        path: '/connection',
        component: () => import('pages/connection')
      }
    ]
  },
  {
    path: '/editor',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Editor.vue') }
    ]
  },
  {
    path: '/fileUpload',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/fileUpload.vue') }
    ]
  },
  {
    path: '/takePic',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/takePic.vue') }
    ]
  },
  {
    path: '/Login',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') }
    ]
  },
  {
    path: '/gps',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/gps.vue') }
    ]
  },
  {
    path: '/dateTime',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dateTime.vue') }
    ]
  },
  {
    path: '/camera',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/camera.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
