/*
export function someAction (context) {
}
*/
import { axiosInstance } from 'plugins/axios'
import { LocalStorage } from 'quasar'
export const function login (commit, creds) {
  axiosInstance.post('/authentication', creds).then(res => {
    console.log(res.data.accessToken)
    LocalStorage.set('token', res.data.accessToken)
  })
}