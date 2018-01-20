function a() {
  console.log(this);
  this.newVariable = 'hello';
}

let b = function() {
  console.log(this);
}

a();
console.log(newVariable);
b();

let c = {
  name: 'The c object',
  log: function() {
    let self = this;

    self.name = 'Updated c object';
    console.log(self);

    let setname = function(newName) {
      self.name = newName;
    }
    setname('Updated again!');
    console.log(self);
  }
}

c.log();