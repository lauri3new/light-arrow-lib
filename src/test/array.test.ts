import { zip } from '../array/index'

it('zip should zip', () => {
  expect(zip([])([])).toEqual([])
  expect(zip([1, 2])(['a'])).toEqual([[1, 'a']])
  expect(zip([1, 2])(['a', 'b'])).toEqual([[1, 'a'], [2, 'b']])
})
