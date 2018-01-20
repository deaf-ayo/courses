let arr = [
  1,
  false,
  {
    name: 'Mike',
    address: '111 Main St'
  },
  function(name) {
    let greeting = 'Hello';
    console.log(`${greeting} ${name}`);
  },
  'Bye'
];

console.log(arr);
arr[3](arr[2].name);