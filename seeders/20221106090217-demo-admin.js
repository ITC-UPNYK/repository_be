"use strict";
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require('uuid');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("users", [
      {
        id: 1,
        uuid: uuidv4(),
        username: "adminitc",
        fullName: "Faisal",
        email: "faisalreza@faisal.com",
        password: await bcrypt.hash("randomsecret", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
        verify: true,
        id_division: 3,
        id_role: 2,
      },
      {
        id: 2,
        uuid: uuidv4(),
        username: "faisal",
        fullName: "Faisal Reza Rahmat",
        email: "faisal@gmail.com",
        password: await bcrypt.hash("randomsecret", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
        verify: true,
        id_division: 3,
        id_role: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("users", null, [{}]);
  },
};
