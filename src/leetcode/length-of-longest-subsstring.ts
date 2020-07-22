export function bruteForce(s: string): number {
  const n = s.length;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      if (allUnique(s, i, j)) {
        ans = Math.max(ans, j - i);
      }
    }
  }

  return ans;
}

function allUnique(s: string, start: number, end: number): boolean {
  const set: Set<string> = new Set();

  for (let i = start; i < end; i++) {
    const ch = s.charAt(i);

    if (set.has(ch)) {
      return false;
    }

    set.add(ch);
  }

  return true;
}

export function slidingWindow(s: string): number {
  const n = s.length;

  const set: Set<String> = new Set();

  let ans = 0;
  let i = 0;
  let j = 0;

  while (i < n && j < n) {
    if (!set.has(s.charAt(j))) {
      set.add(s.charAt(j++));
      ans = Math.max(ans, j - i);
    } else {
      set.delete(s.charAt(i++));
    }
  }

  return ans;
}
