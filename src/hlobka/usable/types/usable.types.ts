export type ReplaceKey<
    Type,
    oldKey extends keyof Type,
    newKey extends string,
> = Omit<Type, oldKey> & {
    [Property in newKey]: Type[oldKey];
};
export type LowerFlags<Type> = {
    [Property in keyof Type as `${Lowercase<string & Property>}`]: Type[Property];
};
type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean;
};
type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};
