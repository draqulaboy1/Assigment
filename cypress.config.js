const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
   env:{
    json:[{"name" : "Bob", "age" : 20, "sex": "Male"},
    {"name": "George", "age" : 42, "sex": "Male"},
    {"name" : "Phil", "age" : 20, "sex": "Male"}, 
    {"name": "John", "age" : 35, "sex": "Female"},
    {"name" : "Jonathan", "age" : 25, "sex": "Female"}, 
    {"name": "Sandra", "age" : 23, "sex": "Female"},
    {"name" : "Jennifer", "age" : 20, "sex": "Male"},
    {"name" : "Jessica", "age" : 20, "sex": "Male"},
    {"name" : "Sara", "age" : 20, "sex": "Male"}]  
   },
    specPattern:'cypress/e2e/*.js',
    
  },
  
});
