class Sorter {
  constructor() {
    this.arr = new Array();
    this.compareFunction = (a,b) => a - b;
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    var temp = [];

    for(var i = 0; i < indices.length; i++) {
      temp[i] = this.arr[indices[i]];
    }

    temp.sort(this.compareFunction);
    indices.sort();

    for(var i = 0; i < indices.length; i++) {
      this.arr[indices[i]] = temp[i];
    }
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;
