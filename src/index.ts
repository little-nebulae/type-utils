declare const __brand: unique symbol;
type Brand<B> = { [__brand]: B };
export type Branded<T, B> = Brand<B> & T;

export type OmitKnownKeys<T, K extends keyof T> = Omit<T, K>;
export type ValueOf<T extends object> = T[keyof T];

export type ExtractLiteral<T, U extends T> = Extract<T, U>;
export type ExcludeLiteral<T, U extends T> = Exclude<T, U>;
