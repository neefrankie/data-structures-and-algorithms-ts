export class Link {
  readonly id: number;
  next: Link | null = null;

  constructor(id: number) {
    this.id = id;
  }

  displayLink() {
    console.log('%d ', this.id);
  }
}

export function displayLink(l: Link | null) {
  if (l == null) {
    return;
  }

  console.log('Links in ascending order: ');
  l.displayLink();

  displayLink(l.next);
}

export function displayLinkReversed(l: Link | null) {
  if (l == null) {
    return;
  }

  console.log('Links in descending order: ');

  displayLink(l.next);

  l.displayLink();
}
