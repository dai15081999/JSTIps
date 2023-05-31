const people = ['Sally', 'Kyle', 'John']
const newArr = people.with(2, 'New')
const newArr2 = people.toSorted()
const newArr3 = people.toReversed()
const newArr4 = people.toSpliced(0, 2, 'New') // Xoa 2 phan tu tu phn tu 0 va them New
console.log(people);
console.log(newArr4);


// const peopleCp = [...people]
// peopleCp[1] = 'New'
// console.log(people);
// console.log(peopleCp);

