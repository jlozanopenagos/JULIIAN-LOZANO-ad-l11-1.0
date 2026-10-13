const UserController = require("./user-controller");
const User = require("./user");

let userController;

beforeEach(() => {
  userController = new UserController();
});

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
});

test('verify user that is not in userController users list', () => {
    let user = new User(5678, "Julian", "julian@generation.org");
    expect(userController.getUsers()).not.toContain(user);
});

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
});

test('remove user that is not in userController', () => {
    let user = new User(5678, "Julian", "julian@generation.org");
    userController.remove(user);
    expect(userController.getUsers()).not.toContain(user);
});

test('findByEmail returns user when user exists', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    expect(userController.findByEmail("santiago@generation.org")).toEqual(user);
});

test('findByEmail returns undefined when user does not exist', () => {
    expect(userController.findByEmail("nonexistent@generation.org")).toBeUndefined();
});

test('findById returns user when user exists', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    expect(userController.findById(1234)).toEqual(user);
});

test('findById returns undefined when user does not exist', () => {
    expect(userController.findById(9999)).toBeUndefined();
});

