import { LinkStack } from '../src/chapter5/link-stack';

describe('Stack implemented in linked list', () => {
  it('push and pop', () => {
    const stack = new LinkStack();

    stack.push(2);
    stack.push(10);
    stack.push(30);
    stack.push(6);

    expect(stack.pop()).toBe(6);
    expect(stack.pop()).toBe(30);
    expect(stack.pop()).toBe(10);
    expect(stack.pop()).toBe(2);
  });
});
