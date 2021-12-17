export class Observable {
  observers = []

  attach(observer) {
    this.observers.push(observer);
  }

  detach(observerToRemove) {
    this.observers = this.observers.filter((observer) => observerToRemove !== observer);
  }

  notify(message) {
    this.observers.forEach((observer) => observer(message));
  }
}

const observable = new Observable();

export default observable;
