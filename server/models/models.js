const sequelize = require('../db')
const { DataTypes, QueryInterface } = require('sequelize')

const User = sequelize.define('user', {
    UserId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Name: { type: DataTypes.STRING(50), allowNull: false },
    LastName: { type: DataTypes.STRING(50), allowNull: false },
    Surname: { type: DataTypes.STRING(50), allowNull: false },
    Phone: { type: DataTypes.STRING(50), unique: false },
    Email: { type: DataTypes.STRING(50), unique: false, allowNull: false },
    Password: { type: DataTypes.STRING, allowNull: false },
    Login: { type: DataTypes.STRING(50), unique: true, allowNull: false },
    ClubCard: { type: DataTypes.INTEGER },
    Level_security: { type: DataTypes.INTEGER, allowNull: false, unique: false },
    Date_of_birth: { type: DataTypes.DATE }
})
const Employees = sequelize.define('employees', {
    EmployeesId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Position: { type: DataTypes.INTEGER, allowNull: false },
    Education: { type: DataTypes.STRING(50) },
    Specialization: { type: DataTypes.STRING(50) },
    EmployeeAccount: { type: DataTypes.INTEGER, unique: true, allowNull: false },
    PlaceOfResidence: { type: DataTypes.STRING(50), }
})
const Products = sequelize.define('products', {
    ProductId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    ProductName: { type: DataTypes.STRING(50), allowNull: false },
    BrandName: { type: DataTypes.INTEGER, allowNull: false },
    Cost: { type: DataTypes.FLOAT, allowNull: false },
    Description: { type: DataTypes.STRING},
    Supplier: { type: DataTypes.INTEGER, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: false }
})
const GroupWorkouts = sequelize.define('group_workouts', {
    WorkoutId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    WorkoutName: { type: DataTypes.STRING(50), allowNull: false },
    Instructor: { type: DataTypes.INTEGER, allowNull: false },
    CommercialClass: { type: DataTypes.BOOLEAN, allowNull: false },
    WorkoutDescription: { type: DataTypes.STRING}
})
const WorkoutSchedule = sequelize.define('workout_schedule', {
    ScheduleId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Day: { type: DataTypes.INTEGER, allowNull: false },
    Workout: { type: DataTypes.INTEGER, allowNull: false },
    Time: { type: DataTypes.STRING(5), allowNull: false },
    TrainingRoom: { type: DataTypes.INTEGER }
})
const Services = sequelize.define('services', {
    ServicesId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    ServicesName: { type: DataTypes.STRING(50), allowNull: false },
    ServicesPrice: { type: DataTypes.FLOAT, allowNull: false },
    Instructor: { type: DataTypes.INTEGER, allowNull: false }
})
const TrainingRoom = sequelize.define('training_room', {
    RoomId: { type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true },
    RoomName: { type: DataTypes.STRING(50), allowNull: false }
})
const AccessLevels = sequelize.define('access_levels', {
    AccessLevelId: { type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true },
    AccessLevelName: { type: DataTypes.STRING(50), allowNull: false }
})
const Brands = sequelize.define('brands', {
    BrandId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    BrandName: { type: DataTypes.STRING(50), allowNull: false }
})
const ClubCards = sequelize.define('club_cards', {
    NumberCard: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    CardTariff: { type: DataTypes.INTEGER, allowNull: false },
    CardExpirationDate: { type: DataTypes.DATE, allowNull: false }
})
const CardTariffs = sequelize.define('card_tariffs', {
    TariffId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    TariffName: { type: DataTypes.STRING(50), allowNull: false },
    TariffCost: { type: DataTypes.FLOAT(50), allowNull: false }
})
const PositionsEmployees = sequelize.define('positions_employees', {
    PositionId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    PositionName: { type: DataTypes.STRING(50), allowNull: false },
    Salary: { type: DataTypes.FLOAT, allowNull: false }
})
const Suppliers = sequelize.define('suppliers', {
    SupplierId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Name: { type: DataTypes.STRING(50), allowNull: false },
    LastName: { type: DataTypes.STRING(50), allowNull: false },
    OrganizationName: { type: DataTypes.STRING(50), allowNull: false }
})

module.exports = {
    Employees,
    User,
    Products,
    GroupWorkouts,
    WorkoutSchedule,
    Suppliers,
    PositionsEmployees,
    CardTariffs,
    ClubCards,
    Brands,
    AccessLevels,
    TrainingRoom,
    Services
}