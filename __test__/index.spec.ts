import test from 'ava'
import cities from 'cities.json'

import { getTz } from '../index'

test('sync getTz', (t) => {
  const result = getTz(116.407394, 39.904211)
  t.is(result, 'Asia/Shanghai')
})

test('run all cities', (t) => {
  for (const city of cities) {
    const result = getTz(parseFloat(city.lng), parseFloat(city.lat))
    t.not(result, undefined)
  }
})
