// apiController.js
const userValidation = require('../validation/user.js');

// Example controller object
const apiController = {
  // GET /api/users
  getUsers: (req, res) => {
    // Logic to fetch users from the data layer
    // Example response
    const users = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
    ];
    res.json(users);
  },

  // POST /api/users
  createUser: (req, res) => {
    // Logic to create a new user in the data layer
    // Example request body: { name: 'New User' }
    const newUser = req.body;


    // Validate the user input
    if (!userValidation.validateSex(newUser.sex)) {
      console.log(newUser)
      return res.status(400).json({ error: 'Invalid sex' });
    }
    
    // Example response
    const createdUser = { id: 3, name: newUser.name };
    res.status(201).json(createdUser);
  },

  // GET /api/users/:id
  getUserById: (req, res) => {
    // Logic to fetch a user by ID from the data layer
    // Example request parameter: { id: 1 }
    const userId = req.params.id;
    // Example response
    const user = { id: userId, name: 'John Doe' };
    res.json(user);
  },

  // PUT /api/users/:id
  updateUserById: (req, res) => {
    // Logic to update a user by ID in the data layer
    // Example request parameter: { id: 1 }
    // Example request body: { name: 'Updated User' }
    const userId = req.params.id;
    const updatedUser = req.body;
    // Example response
    const user = { id: userId, name: updatedUser.name };
    res.json(user);
  },

  // DELETE /api/users/:id
  deleteUserById: (req, res) => {
    // Logic to delete a user by ID from the data layer
    // Example request parameter: { id: 1 }
    const userId = req.params.id;
    // Example response
    const message = `User with ID ${userId} has been deleted`;
    res.json({ message });
  },
};

module.exports = apiController;