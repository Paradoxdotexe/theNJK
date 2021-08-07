/**
 * Special class used for promises that needed to be externally resolved or rejected.
 * For example:
 *    const callback = new PromiseCallback<boolean>();
 *    callback.promise.then(result => {
 *        console.log(result);
 *    });
 *    callback.resolve(true);
 */
export default class PromiseCallback<T> {
  public promise: Promise<T>;
  public resolveRaw: ((value: T | PromiseLike<T>) => void) | undefined;
  public rejectRaw: ((value: T | PromiseLike<T>) => void) | undefined;
  public resolve = (value: T | PromiseLike<T>) => (this.resolveRaw ? this.resolveRaw(value) : null);
  public reject = (value: T | PromiseLike<T>) => (this.rejectRaw ? this.rejectRaw(value) : null);

  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.resolveRaw = resolve;
      this.rejectRaw = reject;
    });
  }
}
