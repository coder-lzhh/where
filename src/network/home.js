import {
  required
} from './axios'

export function gethomedata(city) {
  return required({
    url: `/api/home?city=${city}`
  })
}