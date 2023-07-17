import jwtDecode from "jwt-decode";
import { $host } from ".";

export const registration = async (Login, Password, Name, LastName, Surname, Phone, Email, Date_of_birth, Level_security) => {
    const { data } = await $host.post('api/user/registration', { Name, LastName, Surname, Phone, Email, Password, Login, Level_security, Date_of_birth })
    return jwtDecode(data)
}

export const createUser = async (Login, Password, Name, LastName, Surname, Phone, Email, Date_of_birth, Level_security, ClubCard) => {
    const { data } = await $host.post('api/user/create', { Name, LastName, Surname, Phone, Email, Password, Login, ClubCard, Level_security, Date_of_birth }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })

    return data
}
export const updateUser = async (UserId, Login, Password, Name, LastName, Surname, Phone, Email, Date_of_birth, ClubCard) => {
    const { data } = await $host.patch('api/user/update', { UserId, Name, LastName, Surname, Phone, Email, Password, Login, ClubCard, Date_of_birth }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })

    return data
}

export const createEmployee = async (Position, Education, Specialization, EmployeeAccount, PlaceOfResidence) => {
    const { data } = await $host.post('api/employees/create', { Position, Education, Specialization, EmployeeAccount, PlaceOfResidence }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })

    return data
}

export const updateEmployee = async (EmployeesId, Position, Education, Specialization, EmployeeAccount, PlaceOfResidence) => {
    const { data } = await $host.patch('api/employees/update', { EmployeesId, Position, Education, Specialization, EmployeeAccount, PlaceOfResidence }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })

    return data
}

export const createService = async (ServicesName, ServicesPrice, Instructor) => {
    const { data } = await $host.post('api/service/create', { ServicesName, ServicesPrice, Instructor }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })

    return data
}

export const updateService = async (ServicesId, ServicesName, ServicesPrice, Instructor) => {
    const { data } = await $host.patch('api/service/update', { ServicesId, ServicesName, ServicesPrice, Instructor }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })

    return data
}

export const createGroupWorkout = async (WorkoutName, CommercialClass, Instructor, WorkoutDescription) => {
    const { data } = await $host.post('api/group/create', { WorkoutName, Instructor, CommercialClass, WorkoutDescription }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })

    return data
}



export const login = async (Login, Password) => {
    const response = await $host.post('api/user/login', { Password, Login })
    localStorage.setItem("token", response.data)
    return response.data
}

export const fetchUser = async () => {
    const response = await $host.get('api/user/users', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    return response.data
}


export const fetchPosition = async () => {
    const response = await $host.get('api/position/get', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })

    return response.data
}

export const fetchEmployee = async () => {
    const response = await $host.get('api/employees/get', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    return response.data
}

export const fetchOneUser = async (UserId) => {
    const response = await $host.get(`api/user/getUser/${UserId}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    return response.data
}

export const deleteUser = async (UserId) => {
    const { data } = await $host.delete('api/user/delete', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        data: {
            UserId
        }
    })

    return data
}

export const deleteEmployees = async (EmployeesId) => {
    const { data } = await $host.delete('api/employees/delete', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        data: {
            EmployeesId
        }
    })

    return data
}

export const deleteServices = async (ServicesId) => {
    const { data } = await $host.delete('api/service/delete', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        data: {
            ServicesId
        }
    })

    return data
}

export const deleteGroupWorkout = async (WorkoutId) => {
    const { data } = await $host.delete('api/group/delete', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        data: {
            WorkoutId
        }
    })

    return data
}

export const check = async () => {
    const { data } = await $host.get('api/user/auth', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    return jwtDecode(data.token)
}

export const fetchAllCards = async () => {
    const response = await $host.get('api/clubCrads/get', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })

    return response.data
}