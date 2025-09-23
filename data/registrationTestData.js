// Centralized test data module - keeps test logic separate from data.
module.exports = {
    validUser: {
        firstName: "Ajay",
        lastName: "Smith",
        email: "ajg78y@yopmail.com",
        phone: "9876556765",
        profession: "Engineer",
        gender: "Male",
        password: "Test@123",
        confirmPassword: "Test@123"
    },
    invalidUser: {
        firstName: "Ajay",
        lastName: "J",
        email: "t",
        phone: "54",
        profession: "Engineer",
        gender: "Female",
        password: "a",
        confirmPassword: "a",
        checkError: ["*Enter Valid Email", "*Phone Number must be 10 digit"]
    },
   
};
