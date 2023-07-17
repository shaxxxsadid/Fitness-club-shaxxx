import { $host } from ".";

export const fetchAllWorkouts = async () => {
    const response = await $host.get('api/group/get', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    return response.data
}

export const updateWorkouts = async (WorkoutId, WorkoutName, CommercialClass, Instructor, WorkoutDescription) => {
    const response = await $host.patch('api/group/update', { WorkoutId, WorkoutName, CommercialClass, Instructor, WorkoutDescription }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    return response.data
}

export const fetchAllWorkoutSchedules = async () => {
    const response = await $host.get('api/schedule/get', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    return response.data
}

export const createWorkoutSchedules = async (Day, Workout, Time, TrainingRoom) => {
    const response = await $host.post('api/schedule/create', { Day, Workout, Time, TrainingRoom }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    return response.data
}

export const deleteWorkoutSchedules = async (ScheduleId) => {
    const response = await $host.delete('api/schedule/delete', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        data: {
            ScheduleId
        }
    })
    return response.data
}

export const updateWorkoutSchedules = async (ScheduleId, Day, Workout, Time, TrainingRoom) => {
    const response = await $host.patch('api/schedule/update', { ScheduleId, Day, Workout, Time, TrainingRoom }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    return response.data
}

export const fetchAllTrainigRooms = async () => {
    const response = await $host.get('api/training/get', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    return response.data
}
export const deleteTrainigRooms = async (RoomId) => {
    const response = await $host.delete('api/training/delete', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        data: {
            RoomId
        }
    })
    return response.data
}
export const createTrainigRooms = async (RoomName) => {
    const response = await $host.post('api/training/create', { RoomName }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    return response.data
}
export const updateTrainigRooms = async (RoomId, RoomName) => {
    const response = await $host.patch('api/training/update', { RoomId, RoomName }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    return response.data
}