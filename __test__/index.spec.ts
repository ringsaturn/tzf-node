import test from 'ava'
import cities from 'cities.json'

import { getTz } from '../index'

test('sync getTz', (t) => {
  const testCases = [
    { lng: 116.407394, lat: 39.904211, expected: 'Asia/Shanghai' },
    { lng: 139.6917, lat: 35.6895, expected: 'Asia/Tokyo' },
    { lng: 2.3522, lat: 48.8566, expected: 'Europe/Paris' },
    { lng: -0.1276, lat: 51.5072, expected: 'Europe/London' },
  ]

  for (const testCase of testCases) {
    const result = getTz(testCase.lng, testCase.lat)
    t.is(result, testCase.expected)
  }
})

test('run all cities', (t) => {
  for (const city of cities) {
    const result = getTz(parseFloat(city.lng), parseFloat(city.lat))
    t.not(result, undefined)
    t.not(result, '')
  }
})
