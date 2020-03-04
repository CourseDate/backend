const { DataSource } = require('apollo-datasource');

class classAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  /**
   * This is a function that gets called by ApolloServer when being setup.
   * This function gets called with the datasource config including things
   * like caches and context. We'll assign this.context to the request context
   * here, so we can know about the user making requests
   */
  initialize(config) {
    this.context = config.context;
  }

  // leaving this inside the class to make the class easier to test
  classReducer(class_obj) {
    return class_obj['id'];
  }

  async getAllClasses() {
    const response = await this.store.classes.findAll();

    console.log(response.map(l => l.dataValues));

    // transform the raw classes to a more friendly
    return response && response.length
      ? response.map(l => l.dataValues)
      : [];
  }

  // async getClassById({ classId }) {
  //   const res = await this.get('classes', { flight_number: classId });
  //   return this.classReducer(res[0]);
  // }

  // async getClassesByIds({ classIds }) {
  //   return Promise.all(
  //     classIds.map(classId => this.getClassById({ classId })),
  //   );
  // }
}

module.exports = classAPI;
