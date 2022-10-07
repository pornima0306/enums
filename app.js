var cl = console.log;
// UserRole  RoleId   Rolename  canSeeCompanyJob  canSeeCandidate  canSeecandidateandCompany
//Candidate >> 1 'candidate' true  false  false 
//AdminHR >> 2  'adminHr' false true false
//SuperAdmin >> 3  'superAdmin' true true true
/* Enum >> is a special class that represents a group of constants */
var Role;
(function (Role) {
    Role["CANDIDATE"] = "c";
    Role["ADMIN_HR"] = "a";
    Role["SUPER_ADMIN"] = "sa";
})(Role || (Role = {}));
var person = {
    fname: 'Harry',
    lname: 'Potter',
    email: 'harry@gmail.com',
    token: 'JWT',
    role: 'c' //0 for candidate, 1 for Admin, 2 for superadmin
};
cl(Role.CANDIDATE); // enums return numbers >>0
cl(Role.ADMIN_HR); //1
cl(Role.SUPER_ADMIN); //2
if (person.role === Role.CANDIDATE) {
    cl("Candidate");
}
if (person.role === Role.ADMIN_HR) {
    cl("AdminHR");
}
if (person.role === Role.SUPER_ADMIN) {
    cl("Super Admin");
}
/* ================================================================== */
/* numeric Enums */
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 1] = "North";
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["South"] = 3] = "South";
    Direction[Direction["West"] = 4] = "West";
})(Direction || (Direction = {}));
var currentDirection = Direction.North;
cl(currentDirection); //0
/* string Enums */
(function (Direction) {
    Direction["N"] = "North";
    Direction["E"] = "East";
    Direction["S"] = "South";
    Direction["W"] = "West";
})(Direction || (Direction = {}));
cl(Direction.N); //North
cl(Direction.E); //South
cl(Direction.S); //East
cl(Direction.W); //West
/* ===================================================== */
var ProfileRole;
(function (ProfileRole) {
    ProfileRole[ProfileRole["Admin"] = 1] = "Admin";
    ProfileRole[ProfileRole["Read_only_User"] = 2] = "Read_only_User";
    ProfileRole[ProfileRole["Recruiter"] = 3] = "Recruiter";
})(ProfileRole || (ProfileRole = {}));
var Color;
(function (Color) {
    Color[Color["Blue"] = 0] = "Blue";
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
var candidate1 = {
    fname: 'Harry',
    userType: ProfileRole.Admin,
    user_no: ProfileRole.Read_only_User,
    colorcode: Color.Blue
};
cl("UserType", candidate1.userType);
cl("UserNo", candidate1.user_no);
cl("ColorCode", candidate1.colorcode);
if (candidate1.userType === ProfileRole.Admin) {
    cl('This is a valid User');
}
/* ===================================================== */
