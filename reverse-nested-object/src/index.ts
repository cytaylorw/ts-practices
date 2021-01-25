export type ValueOrObject<T> = T | {[key: string]: ValueOrObject<T> };
export type DeepObject<T> = {[key: string]: ValueOrObject<T> };

export const reverse = (input: DeepObject<String>): DeepObject<String> => {
    let [key, value] = Object.entries(input)[0];
    if(typeof value === 'string') return {[value]: key};
    return input;
}