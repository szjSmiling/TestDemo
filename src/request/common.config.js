// import { getJsonUtil } from "../models/utils/getJsonUtil.js";

const IS_PROD = process.env.NODE_ENV === 'production' ? 'PROD' : 'TEST';

// getJsonUtil.domainJson().then(
//   res => {
//     let session = sessionStorage;
//     domainJson = res;
//     let resStr = JSON.stringify(res);

//     sessionStorage.domainJsonStre = resStr;
//   },
//   error => {
//     console.error(error);
//   }
// );

// export var domainJson;
//mode  PROD || TEST
export class CashfreeConfig {
  static setConfig() {
    var config = {};
    config.layout = { view: "popup", width: "500" };
    config.mode = IS_PROD;
    return config;
  }
}

// child dir has "/"
export const API_ROOT = process.env.NODE_ENV === 'production' ? '' : '';
