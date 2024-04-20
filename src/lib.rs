#![deny(clippy::all)]

use lazy_static::lazy_static;
use napi_derive::napi;
use tzf_rs::DefaultFinder;

lazy_static! {
  static ref FINDER: DefaultFinder = DefaultFinder::default();
}

// #[napi]
// pub fn plus_100(input: u32) -> u32 {
//   input + 100
// }

#[napi]
pub fn get_tz(lng: f64, lat: f64) -> String {
  FINDER.get_tz_name(lng, lat).to_string()
}
