/*
export function someMutation (state) {
}
*/

export function initialiseStore (state) {
  if(localStorage.getItem('store')) {
    this.replaceState(Object.assign(state, JSON.parse(localStorage.getItem('store'))))
  }
}