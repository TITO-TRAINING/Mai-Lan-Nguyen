/* Iterable Groups
Make the Group class from the previous exercise iterable. Refer to the section
about the iterator interface earlier in the chapter if you aren’t clear on the
exact form of the interface anymore.
If you used an array to represent the group’s members, don’t just return
the iterator created by calling the Symbol.iterator method on the array. That
would work, but it defeats the purpose of this exercise.
It is okay if your iterator behaves strangely when the group is modified
during iteration. */

class Group {
  constructor() {
    this.members = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  delete(value) {
    this.members = this.members.filter((v) => v !== value);
  }

  has(value) {
    return this.members.includes(value);
  }

  static from(iterable) {
    const group = new Group();
    for (let value of iterable) {
      group.add(value);
    }
    return group;
  }

  [Symbol.iterator]() {
    let index = 0;
    let members = this.members;
    return {
      next() {
        if (index >= members.length) {
          return { done: true };
        } else {
          return { value: members[index++], done: false };
        }
      },
    };
  }
}

let group = Group.from([10, 20, 30]);
for (let value of group) {
  console.log(value);
}
// → 10
// → 20
// → 30
