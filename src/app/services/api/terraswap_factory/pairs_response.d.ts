/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type AssetInfo =
  | {
      token: {
        contract_addr: HumanAddr;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | {
      native_token: {
        denom: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
export type HumanAddr = string;

export interface PairsResponse {
  pairs: PairInfo[];
  [k: string]: unknown;
}
export interface PairInfo {
  asset_infos: [AssetInfo, AssetInfo];
  contract_addr: HumanAddr;
  liquidity_token: HumanAddr;
  [k: string]: unknown;
}
