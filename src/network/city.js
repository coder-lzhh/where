import {
  required
} from './axios'

export function getCityList() {
  return required({
    url: '/api/city'
  })
}