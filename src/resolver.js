const exampleUser = { id: 123, year: "FRESHMAN", interest_dept: ["GEN_ENG"], cart: [] };


module.exports = {
  Query: {
    me: () => {
      console.log("resolver called");
      return { id: 123, year: "FRESHMAN", interest_dept: ["GEN_ENG"], cart: [] };
    }

  }
};
