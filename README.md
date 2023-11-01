# usable-types

## Examples:
```typescript
type A = { a: number; c: number };
type B = ReplaceKey<A, 'a', 'b'>;
const a: A = { a: 1, c: 2 };
const b: B = {
    b: a.a,
    c: a.c,
};
```
