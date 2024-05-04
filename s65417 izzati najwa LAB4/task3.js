
// 1) Creating the product object
var product = {
    productName: "Example Product",
    quantity: 10,
    price: 50
  };
  
  // Accessing and displaying properties
  console.log("Product Name:", product.productName);
  console.log("Quantity:", product.quantity);
  console.log("Price:", product.price);


  // 2) Creating the book object
var book = {
    bookName: "Example Book",
    authorName: "Author Name"
  };
  
  // Adding prototype property price
  book.__proto__.price = 100;
  
  // Displaying all properties
  console.log("Book Name:", book.bookName);
  console.log("Author Name:", book.authorName);
  console.log("Price:", book.price);


  //  3) Creating the employee object
var employee = {
    employeeName: "John Doe",
    employeeId: 123,
    salary: 50000
  };
  
  // Creating the manager object inheriting from employee
  var manager = Object.create(employee);
  manager.managerName = "Manager Name";
  manager.branch = "Branch Name";
  
  // Displaying all properties
  console.log("Employee Name:", manager.employeeName);
  console.log("Employee ID:", manager.employeeId);
  console.log("Salary:", manager.salary);
  console.log("Manager Name:", manager.managerName);
  console.log("Branch:", manager.branch);
  