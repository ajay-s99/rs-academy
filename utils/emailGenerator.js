// Generates a unique Yopmail email for each test run.
module.exports = {
  generateUniqueEmail: ()=>{ 
    // Uses timestamp to ensure uniqueness.
    return `ajay${Date.now()}@yopmail.com`;
  }


 
};
