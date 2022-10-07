let cl= console.log;

//UserRole  RoleId   Rolename  canSeeCompanyJob  canSeeCandidate  canSeecandidateandCompany
//Candidate >> 1 'candidate' true  false  false 
//AdminHR >> 2  'adminHr' false true false
//SuperAdmin >> 3  'superAdmin' true true true

/* Enum >> is a special class that represents a group of constants */

enum Role {CANDIDATE ='c', ADMIN_HR='a', SUPER_ADMIN='sa'}
let person ={
    fname : 'Harry',
    lname : 'Potter',
    email : 'harry@gmail.com',
    token :'JWT',
    role :  'c'  //0 for candidate, 1 for Admin, 2 for superadmin
}

cl(Role.CANDIDATE);  // enums return numbers >>0
cl(Role.ADMIN_HR); //1
cl(Role.SUPER_ADMIN);  //2



if(person.role === Role.CANDIDATE){
    cl(`Candidate`)
}

if(person.role === Role.ADMIN_HR){
    cl(`AdminHR`)
}

if(person.role === Role.SUPER_ADMIN){
    cl(`Super Admin`)
}

/* ================================================================== */

/* numeric Enums */
enum Direction{North =1, East, South, West}
let currentDirection = Direction.North;
cl(currentDirection) //0


/* string Enums */
enum Direction{
    N = "North",
    E = "East",
    S = "South",
    W = "West"
}

cl(Direction.N)  //North
cl(Direction.E)  //South
cl(Direction.S)  //East
cl(Direction.W)  //West



/* ===================================================== */

enum ProfileRole {Admin=1, Read_only_User, Recruiter}
enum Color {Blue, Red, Green}

let candidate1 ={
    fname :'Harry',
    userType : ProfileRole.Admin,
    user_no : ProfileRole.Read_only_User,
    colorcode : Color.Blue

}
cl("UserType", candidate1.userType)
cl("UserNo", candidate1.user_no)
cl("ColorCode", candidate1.colorcode)

if(candidate1.userType === ProfileRole.Admin){
    cl('This is a valid User')
}

/* ===================================================== */

