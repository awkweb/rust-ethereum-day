use wasm_bindgen::prelude::*;

#[wasm_bindgen(typescript_custom_section)]
const TYPES: &'static str = r#"
// wasm-bindgen doesn't work with generics so we'll put types in a different file
type Transaction = {}
type TypedData = {}
type FromMnemonicOptions = {}
"#;

#[wasm_bindgen]
extern "C" {
  #[wasm_bindgen(js_namespace = console)]
  fn log(s: &str);

  #[wasm_bindgen(typescript_type = "Transaction")]
  pub type JsTransaction;

  #[wasm_bindgen(typescript_type = "TypedData")]
  pub type JsTypedData;

  #[wasm_bindgen(typescript_type = "FromMnemonicOptions")]
  pub type JsFromMnemonicOptions;
}

#[wasm_bindgen]
pub fn console_log(s: &str) {
  log(s);
}