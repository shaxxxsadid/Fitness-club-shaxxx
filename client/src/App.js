import AppRouter from "./components/AppRouter";
import styles from "./App.module.css";
import NavBar from "./Assets/UI/navBar/NavBar";
import { useContext, useState } from "react";
import { Context } from ".";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { check, fetchPosition } from "./http query/UserApiQuery";
import Loader from "./Assets/UI/Loader/Loader";
import { fetchAllTrainigRooms, fetchAllWorkouts, fetchAllWorkoutSchedules } from "./http query/WorkoutApiQuery";
import LoaderDash from "./Assets/UI/Loader/LoaderDash";
import moduleL from "./Assets/UI/Loader/Loader.module.css";

const App = observer(() => {
  const { user } = useContext(Context)
  const { groupWorkout } = useContext(Context)
  const [isLoading, setLoading] = useState(true)
  const [isOnline, setOnline] = useState("online")
  
  useEffect(() => {

  }, [isOnline])

  useEffect(() => {
    fetchAllWorkouts().then(data => groupWorkout.setGroupWorkouts(data))
    fetchAllTrainigRooms().then(data => groupWorkout.setTrainingRooms(data))
    fetchAllWorkoutSchedules().then(data => groupWorkout.setWorkoutSchedules(data))
    fetchPosition().then(data => user.setPositions(data))
    check().then(data => {
      user.setUserToken(true)
      user.setIsAuth(true)
    }).finally(() => setLoading(false))
  }, [])

  const updateOnlineStatus = (event) => {
    setOnline(navigator.onLine ? "online" : "offline")

  }

  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);

  console.log(isOnline);

  if (isLoading) {
    return <LoaderDash style={{
      border: '5px black dashed ',
      margin: "25lvh auto",
    }} className={moduleL.black}/>
  }

  return (
    <div className="App">

      <NavBar />
      <AppRouter />

    </div>
  );
})

export default App;
