export const zip = <A>(az: A[]) => <B>(bs: B[]): [A, B][] => {
  if (az.length < bs.length) {
    console.log('zhs')
    return az.map((a, i) => [a, bs[i]])
  }
  return bs.map((b, i) => [az[i], b])
}
