module.exports = {
    validUser: {
        firstName: "Ajay",
        lastName: "Sutar",
        email: "ajay@yopmail.com",
        phone: "9876543210",
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
    redirectedUrl: {
        login: "/.*login/",
        register: "/.*register/"
    }
};
