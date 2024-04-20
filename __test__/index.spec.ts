import test from "ava";

import cities from "cities.json";

import { getTz, plus100 } from "../index";

test("sync function from native code", (t) => {
  const fixture = 42;
  t.is(plus100(fixture), fixture + 100);
});

test("sync getTz", (t) => {
  const result = getTz(116.407394, 39.904211);
  t.is(result, "Asia/Shanghai");
});

test("async function from native code", async (t) => {
  const result = await getTz(116.407394, 39.904211);
  t.is(result, "Asia/Shanghai");
});

test("run all cities", (t) => {
  for (let i = 0; i < cities.length; i++) {
    const city = cities[i];
    const result = getTz(parseFloat(city.lng), parseFloat(city.lat));
    t.not(result, undefined);
  }
});
