module.exports = {
  Query: {
    me: () => {
      console.log("resolver called");
      return { id: 123, year: 1, interest_dept: ["GEN_ENG"], cart: [] };
    }
  }
};
