import {
  required
} from './axios'

export function gethomedata() {
  return required({
    url: '/api/home'
  })
}