const exampleUser = { id: 123, year: "FRESHMAN", interest_dept: ["GEN_ENG"], cart: [] };


module.exports = {
  Query: {
    me: async (_, __, { dataSources }) => {
      const allClasses = await dataSources.classAPI.getAllClasses();

      return allClasses;
    }
  }
};
