export type ValueOrObject<T> = T | {[key: string]: ValueOrObject<T> };
export type DeepObject<T> = {[key: string]: ValueOrObject<T> };

export const reverse = (input: DeepObject<String>) => {
    return input;
}