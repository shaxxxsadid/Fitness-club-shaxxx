import { makeAutoObservable } from "mobx";
export default class GroupWorkoutStore {
    constructor() {
        this._groupWorkouts = []
        this._workoutSchedules = []
        this._trainingRooms = []
        makeAutoObservable(this)
    }

    setGroupWorkouts(groupWorkouts) {
        this._groupWorkouts = groupWorkouts
    }

    setWorkoutSchedules(workoutSchedules) {
        this._workoutSchedules = workoutSchedules
    }
    
    setTrainingRooms(trainingRooms) {
        this._trainingRooms = trainingRooms
    }

    get groupWorkouts() {
        return this._groupWorkouts
    }
    
    get workoutSchedules() {
        return this._workoutSchedules
    }

    get trainingRooms() {
        return this._trainingRooms
    }

}