import { slidingWindow, bruteForce } from '../src/leetcode/length-of-longest-subsstring';

const s1 = 'abcabcbb';
const s2 = 'bbbbb';
const s3 = 'pwwkew';

describe('Length of longest subsstring', () => {
  it('using brute force', () => {
    expect(bruteForce(s1)).toEqual(3);
    expect(bruteForce(s2)).toEqual(1);
    expect(bruteForce(s3)).toEqual(3);
  });

  it('using sliding window', () => {
    expect(slidingWindow(s1)).toEqual(3);
    expect(slidingWindow(s2)).toEqual(1);
    expect(slidingWindow(s3)).toEqual(3);
  });
});
