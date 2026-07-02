// union |
type userRole = 'admin' | 'user' | 'guest'

const getDashboard = (role : userRole) => {
    if (role === 'admin')
    {
        return "Admin Dashboard"

    }
    else if (role === 'user')
    {
        return "User Dashboard"

    }
    else {
        return "Guest"
    }
}


getDashboard('admin');


// intersection &

type Employee = {
    id : number,
    name : string,
    phoneNo : number
}

type Manager = {
    designation : string,
    experience : string
}

type EmployeeManager = Employee & Manager;

const user1 : EmployeeManager = {
    id: 22,
    name: "Asad",
    phoneNo : 2241144121,
    designation: "EmployeeManager",
    experience: "5 years"
}