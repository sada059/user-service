class AbstractRoutes {
    constructor() {
    //   if (this.constructor.name === 'DefaultRoutes') {
    //     if (!resource) {
    //       throw new Error('It is mandatory to pass resource to DefaultRoutes');
    //     }
    //   }
  
      const router = require('express').Router();
      this.router = router;
    }
  }
  
  module.exports = AbstractRoutes;
  