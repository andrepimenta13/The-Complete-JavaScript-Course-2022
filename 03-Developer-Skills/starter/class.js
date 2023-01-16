class Person {
  constructor(name, age) {
    let _name = name;
    let _age = age;

    this.getName = () => _name;

    this.setName = (name) => {
      if (typeof name !== 'string') {
        alert('You should put a string value!');
      } else {
        _name = name;
      }
    };

    this.getAge = () => _age;

    this.setAge = (age) => {
      _age = age;
    };
  }
}

let person = new Person('André', 32);

console.log(person);
console.log(person._name);
console.log(person.name);
console.log(person.age);
console.log(person._age);

console.log(person.getName());
console.log(person.getAge());
person.setName('Filipa');
person.setAge(29);
console.log(person.getName());
console.log(person.getAge());

class Student extends Person {
  constructor(name, age, course, birthyear, nameOfSchool) {
    super(name, age);
    this.course = course;
    this.birthyear = birthyear;
    this.nameOfSchool = nameOfSchool;
  }
}

let student = new Student('Andie', 19, 'Computer Science', 2003, 'ISEP');
console.log(student);

console.log(student.name);
console.log(student._name);
console.log(student.age);
console.log(student._age);
console.log(student.course);
console.log(student.birthyear);
console.log(student.nameOfSchool);
console.log(student.getName());
console.log(student.getAge());
student.setName('Pippa');
student.setAge(31);
console.log(student.getName());
console.log(student.getAge());
