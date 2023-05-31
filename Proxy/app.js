const legacyFontSizes = {
    extraLarge: {
        replacementName: 'gignatic',
        replacementValue: 'gignatic'
    },
    extraSmall: {
        replacementName: 'tiny',
        replacementValue: 'tiny'
    },
}

const fontSizes = {
    gigantic: 'gignatic',
    large: 'large',
    medium: 'medium',
    small: 'small',
    tiny: 'tiny',
}

const proxyOptions = {
    get: (target, propName, receiver) => {
        if(propName in legacyFontSizes) {
            const legacyProp = legacyFontSizes[propName]
            console.log(target);
            console.log(propName);
            return legacyProp.replacementValue
        }
        return Reflect.get(target, propName, receiver)
    }
}
const proxiedFontSizes = new Proxy(legacyFontSizes, proxyOptions)
console.log(proxiedFontSizes.extraSmall);

//Proxies
let objects = [
    { id: 123, name: 'Steve', age: 21 },
    { id: 456, name: 'Riley', age: -34 },
    { id: 789, name: 'Bree', age: 140 },
  ];
  objects = objects.map((person) => {
    return new Proxy(person, {
      get: function (target, prop, receiver) {
        if (prop in target) {
          if (prop === 'age') {
            if (target[prop] >= 0 && target[prop] <= 130) {
              return target[prop];
              return Reflect.get(...arguments);
              return Reflect.get(target, prop, receiver);
            } else {
              throw new RangeError('Age is too high or too low.');
            }
          }
        }
      },
      set: function (target, prop) {
        return true;
      },
    });
  });
  
  objects.forEach((person) => {
    try {
      console.log(person.age);
    } catch (err) {
      if(err instanceof RangeError) {
        console.log(err.name, err.message);
      }
    }
  });