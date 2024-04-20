import b from 'benny'
import cities from 'cities.json'

import { getTz } from '../index'

async function run() {
  await b.suite(
    'Random Cities',
    b.add('Random getTz', () => {
      const city = cities[Math.floor(Math.random() * cities.length)]
      getTz(parseFloat(city.lng), parseFloat(city.lat))
    }),
    b.cycle(),
    b.complete(),
  )
}

run().catch((e) => {
  console.error(e)
})
