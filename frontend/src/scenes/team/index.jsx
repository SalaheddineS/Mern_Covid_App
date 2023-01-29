import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";
const handleDelete = (id) => {
  axios.delete(`/api/deleteusers/${id}`, {
    })
    .then(function () {
    
    });
    window.location.reload(false);
};
const Team = () => {
  useEffect(() => {
    axios.get(`/api/welcome`).then((response) => {
      setToken(response.status);
      fetch(`/api/users`, {
        credentials: "include",
      })
        .then((response) => response.json())
        .then((response) => setDonne(response))
        .catch((err) => console.error(err));
    });
  }, []);

  const [token, setToken] = useState(false);
  const [Donne, setDonne] = useState();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "Image",
      headerName: "Profil",
      
      renderCell: (params) => {
        return (
          <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="The house from the offer."
          src={params.row.Image}
        />
          
        );
      },
    },
    {
      field: "Name",
      headerName: "Name",
     
      
    },
    {
      field: "Username",
      headerName: "Nom de Compte",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    
    {
      field: "RoleLevel",
      headerName: "Role Level",
      flex: 1,
      renderCell: ({ row: { Role } }) => {
        return (
          <Box
            width="60%"
            p="5px"
            display="flex"
            justifyContent="center"
            textAlign={"center"}
            backgroundColor={
              Role === "Admin"
                ? colors.greenAccent[600]
                : Role === "Stagiaire"
                ? colors.greenAccent[600]
                : colors.greenAccent[600]
            }
            borderRadius="4px"
          >
            {Role === "Admin" && <AdminPanelSettingsOutlinedIcon />}
            {Role === "manager" && <SecurityOutlinedIcon />}
            {Role === "Stagiaire" && <LockOpenOutlinedIcon />}
            <Typography style={{ textDecoration: "none" }} color={colors.grey[100]} sx={{ ml: "5px" }}>
              {Role}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "ajouter",
      headerName: "",

      renderCell: () => {
        return (
          <Box
            width="90%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={colors.greenAccent[600]}
            borderRadius="4px"
          >
            <Link to="/Addadmin" style={{ textDecoration: "none" }}>
              <Typography
                color={colors.grey[100]}
                sx={{ ml: "5px", textDecoration: "none" }}
              >
                Ajouter
              </Typography>
            </Link>
          </Box>
        );
      },
    },
    {
      field: "modifier",
      headerName: "",

      renderCell: (params) => {
        return (
          <Box
            width="90%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={colors.blueAccent[600]}
            borderRadius="4px"
          >
            <Link to={`/editusers/${params.row._id}`} style={{ textDecoration: 'none' }}>
              <Typography
                color={colors.grey[100]}
                sx={{ ml: "5px", textDecoration: "none" }}
              >
                Modifier
              </Typography>
            </Link>
          </Box>
        );
      },
    },
    {
      field: "Supprimer",
      headerName: "",

      renderCell: (params) => {
        return (
          <Box
            width="90%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={colors.redAccent[600]}
            borderRadius="4px"
          >
            <Link to="/edit" style={{ textDecoration: "none" }}>
            <Typography color={colors.grey[100]} sx={{ ml: "5px" ,textDecoration:"none" }} onClick={()=>handleDelete(params.row._id)}>
                Supprimer
              </Typography>
            </Link>
          </Box>
        );
      },
    },
  ];
  if (token === 200 && Donne)  {
    return (
      <>
        <Box m="20px">
          <Header title="Admins" subtitle="Gerer les administrateurs" />
          
          <Box
            m="40px 0 0 0"
            height="75vh"
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "none",
              },
              "& .name-column--cell": {
                color: colors.greenAccent[300],
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: colors.blueAccent[700],
                borderBottom: "none",
              },
              "& .MuiDataGrid-virtualScroller": {
                backgroundColor: colors.primary[400],
              },
              "& .MuiDataGrid-footerContainer": {
                borderTop: "none",
                backgroundColor: colors.blueAccent[700],
              },
              "& .MuiCheckbox-root": {
                color: `${colors.greenAccent[200]} !important`,
              },
            }}
          >
            <DataGrid checkboxSelection rows={Donne.ots} columns={columns} getRowId={(row) => row._id} />
          </Box>
        </Box>
      </>
    );
  }
};

export default Team;
