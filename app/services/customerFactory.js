App.factory('CustomerFactory', function () {
  var factory = {};
  var customers = [
    { name : 'Steve Jobs', city : 'San Francisco' },
    { name : 'Bill Gates', city : 'Medina' },
    { name : 'Mark Zuckerberg', city : 'Palo Alto' },
    { name : 'Maya the Samoyed', city : 'Malaysia' },
    { name : 'Zubin Paymaster', city : 'Bengaluru' },
    { name : 'Kayannush Paymaster', city : 'Bengaluru' }
  ];

  factory.getCustomers = function () {
    return customers;
  }
  return factory;
});
