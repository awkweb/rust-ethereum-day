import type {
  Address,
  TypedData,
  TypedDataDomain,
  TypedDataToPrimitiveTypes,
} from 'abitype'

export class Account {
  free(): void
  getAddress(): Address
  signMessage(message: string): string
  signTypedData<
    const types extends
      | TypedData
      | Record<string, Record<string, { name: string; type: string }[]>>,
    primaryType extends keyof types,
  >(parameters: SignTypedDataParameters<types, primaryType>): Promise<string>

  static generateRandom(): Account
  static fromPrivateKey(private_key: string): Account
  static fromMnemonic(
    mnemonic: string,
    opts?: FromMnemonicOptions | undefined,
  ): Account
}

type SignTypedDataParameters<
  types extends
    | TypedData
    | Record<string, Record<string, { name: string; type: string }[]>>,
  primaryType extends keyof types,
  ///
  schema extends Record<string, unknown> = types extends TypedData
    ? TypedDataToPrimitiveTypes<types>
    : Record<string, unknown>,
  message = schema[primaryType extends keyof schema
    ? primaryType
    : keyof schema],
> = {
  types: types
  domain?:
    | (schema extends { EIP712Domain: infer domain } // if `EIP712Domain` exists in `schema` use its type
        ? domain
        : Evaluate<TypedDataDomain>)
    | undefined
  primaryType:
    | keyof types // Show all values
    | (primaryType extends keyof types ? primaryType : never) // Infer value if it exists in `types`
  message: { [_: string]: any } extends message // Check if message is inferrable
    ? Record<string, unknown>
    : message
}

type FromMnemonicOptions = {
  index?: number | undefined
  password?: string | undefined
}

type Evaluate<type> = { [key in keyof type]: type[key] } & unknown

export function console_log(s: string): void
