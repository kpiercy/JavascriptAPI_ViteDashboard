import { Box, Button, IconButton, Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme.jsx'
import { useAuthContext } from '../../hooks/useAuthContext.jsx'
import Header from '../../components/ui/global/Header.jsx'
import { useEffect, useState } from 'react'
import { useProfileContext } from '../../hooks/useProfileContext.jsx'
import ProfileDetails from '../../components/Profiles/ProfileDetails.jsx'
//import WorkoutForm from "../components/WorkoutForm";
// import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
// import EmailIcon from "@mui/icons-material/Email";
// import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import TrafficIcon from "@mui/icons-material/Traffic";
// import LineChart from "../../components/LineChart";
// import GeographyChart from "../../components/GeographyChart";
// import BarChart from "../../components/BarChart";
// import StatBox from "../../components/StatBox";
// import ProgressCircle from "../../components/ProgressCircle";

const Profile = () => {
  const [profiles, setProfile] = useState(null)
  const { dispatch } = useProfileContext()
  const { user } = useAuthContext()

  useEffect(() => {
    const fetchProfile = async () => {

      const response = await fetch('http://localhost:5000/api/v1/clients/users/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        },
      })
      const json = await response.json()

      if (response.ok) {
        setProfile(json)
        //dispatch({ type: "SET_CLIENTS", payload: json });
      }
    }

    if (user) {
      fetchProfile()
    }
  }, [dispatch, user])

  return (
    <Box m="10px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Profile" />
      </Box>
      <div className="profiles">
        <div className="data-cards">
          {profiles &&
            profiles.Users.map((profile) => <ProfileDetails key={profile.ID} profile={profile} />)}
        </div>
      </div>
    </Box>
  )
}

export default Profile
