let people = [
  {
    // the 'John' object
    fName: 'John',
    lName: 'Doe',
    addresses: [
      '111 Main St.',
      '222 Third St.'
    ]
  },
  {
    // the 'Jane' object
    fName: 'Jane',
    lName: 'Doe',
    addresses: [
      '333 Main St.',
      '444 Fourth St.'
    ],
    greet: function() {
      return 'Hello!';
    }
  }
]

console.log(people);