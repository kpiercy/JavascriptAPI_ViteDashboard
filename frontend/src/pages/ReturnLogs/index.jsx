import { Box, Button, IconButton, Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme.jsx'
import { useAuthContext } from '../../hooks/useAuthContext.jsx'
import Header from '../../components/ui/global/Header.jsx'
import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useReturnLogContext } from '../../hooks/useReturnLogContext.jsx'
import ReturnLogList from '../../components/Returns/ReturnLogList.jsx'
import AddIcon from '@mui/icons-material/Add'

const ReturnLogs = () => {
    const [logs, setLogs] = useState(null)
    const { dispatch } = useReturnLogContext()
    const { user } = useAuthContext()
    const { clientid, jobid } = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        const fetchReturnLogs = async () => {
            const response = await fetch(
                'http://localhost:5000/api/v1/clients/' +
                    clientid +
                    '/jobs/' +
                    jobid +
                    '/returns/logs',
                {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                        'Content-Type': 'application/json',
                    },
                }
            )
            const json = await response.json()

            if (response.ok) {
                setLogs(json)
                console.log(json)
                //dispatch({ type: "SET_RETURNS", payload: json });
            }
        }

        if (user) {
            fetchReturnLogs()
        }
    }, [dispatch, user]) //

    const routeChange = () => {
        let path = `/clients/${clientid}/jobs/${jobid}/returns`
        navigate(path)
    }

    return (
        <Box m="20px">
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Header title="Returns Logs" />
                <Box display="flex" justifyContent="end" mt="20px">
                    <Button
                        onClick={routeChange}
                        color="secondary"
                        variant="contained"
                    >
                        Return Settings
                    </Button>
                </Box>
            </Box>
            <div className="row data-col-header">
                <div className="col-lg-1">ID</div>
                <div className="col-lg-1">RunSeq</div>
                <div className="col-lg-1">Status</div>
                <div className="col-lg-1">Type</div>
                <div className="col-lg-1">TriggeredAt</div>
                <div className="col-lg-2">RptUploaded</div>
                <div className="col-lg-1">RemoteDir</div>
                <div className="col-lg-1">UploadedAt</div>
                <div className="col-lg-1">Links</div>
                <div className="col-lg-1">
                    <Link to="/returns/create" className="data-add-item">
                        <IconButton>
                            <AddIcon />
                        </IconButton>
                    </Link>
                </div>
            </div>
            <div className="clients">
                <div className="data-cards">
                    {logs &&
                        logs.Logs.map((log) => (
                            <ReturnLogList key={log.ID} log={log} />
                        ))}
                </div>
            </div>
        </Box>
    )
}

export default ReturnLogs
