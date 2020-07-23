export class Link {
  readonly id: number;
  next: Link | null = null;
  previous: Link | null = null;

  constructor(id: number) {
    this.id = id;
  }

  displayLink() {
    console.log('%d ', this.id);
  }
}

// Display a link from first to last.
export function displayLink(l: Link | null) {
  if (l == null) {
    return;
  }

  l.displayLink();

  displayLink(l.next);
}

// Display a link from last to first.
export function displayLinkReversed(l: Link | null) {
  if (l == null) {
    return;
  }

  displayLinkReversed(l.next);

  l.displayLink();
}
