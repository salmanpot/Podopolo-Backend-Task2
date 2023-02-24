const roles = ["user", "admin"];

const roleRights = new Map();

roleRights.set(roles[0], ["logout", "market"]);
roleRights.set(roles[1], []);

export { roles, roleRights };
