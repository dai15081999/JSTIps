const log = console.log;

let alex = {
  name: "Alex",
  id: 93,
  hello: function (a, b) {
    console.log(`Hello my name is ${this.name}. ${a} ${b}`);
  },
};
log(Reflect.ownKeys(alex));
log(Reflect.get(alex, 'id'))
log(Reflect.set(alex, 'id', 313))
log(Reflect.get(alex, 'id'))
log(Reflect.has(alex, 'id'))
Reflect.apply(alex.hello, alex, Reflect.ownKeys(alex))
Reflect.defineProperty(alex, 'age', { value: 30, enumerable: false });
log(Reflect.ownKeys(alex));