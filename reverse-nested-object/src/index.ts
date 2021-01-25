export type ValueOrObject<T> = T | {[key: string]: ValueOrObject<T> };
export type DeepObject<T> = {[key: string]: ValueOrObject<T> };

export const reverse = (input: DeepObject<String>): DeepObject<String> => {
    let [key, value] = Object.entries(input)[0];
    let output: DeepObject<String> | undefined;

    while(typeof value === 'object'){
        let [nextKey, nextValue] = Object.entries(value)[0];
        output = output ? {[nextKey]: output} : {[nextKey]: key};
        value = nextValue;
    }
    output = output ? {[value]: output} : {[value]: key};
    return output;
}