import { Box, Button, IconButton, Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme.jsx'
import { Link, Navigate } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext.jsx'
import Header from '../../components/ui/global/Header.jsx'
import { useEffect, useState } from 'react'
import { useUserContext } from '../../hooks/useUsersContext.jsx'
import UserDetails from '../../components/Users/UserDetails.jsx'
import AddIcon from '@mui/icons-material/Add'
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

const User = () => {
  const [users, setUsers] = useState(null)
  const { dispatch } = useUserContext()
  const { user } = useAuthContext()

  function handleCreate() {
    <Navigate to="/users/create" />
    }

  var clientid;

  useEffect(() => {
    const fetchUsers = async () => {
      if (user.permissions.toLowerCase() === 'standard') {
        clientid = user.client.toLowerCase()
      } else if (user.permissions.toLowerCase() === 'parent') {
        clientid = user.parent.toLowerCase()
      } else if (user.permissions.toLowerCase() === 'admin') {
        clientid = '4'
      } else {
        clientid = null
      }

      const response = await fetch('http://localhost:5000/api/v1/clients/' + clientid +  '/users', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        },
      })
      const json = await response.json()

      if (response.ok) {
        setUsers(json)
        //dispatch({ type: "SET_CLIENTS", payload: json });
      }
    }

    if (user) {
      fetchUsers()
    }
  }, [dispatch, user])

  return (
    <Box m="10px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Users" />
      </Box>
      <div className="row data-col-header">
        <div className="col-lg-2">Username</div>
        <div className="col-lg-2">ID</div>
        <div className="col-lg-2">ClientID</div>
        <div className="col-lg-2">Active</div>
        <div className="col-lg-2">PermissionLvl</div>
        <div className="col-lg-2">
          <Link to="/users/create" className="data-add-item">
            <IconButton>
              <AddIcon />
            </IconButton>
          </Link>
        </div>
      </div>
      <div className="users">
        <div className="data-cards">
          {users && users.Users.map((auser) => <UserDetails key={auser.GUID} auser={auser} />)}
        </div>
      </div>
    </Box>
  )
}

export default User
