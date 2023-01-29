import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import {Link} from "react-router-dom"; 
import { useEffect, useState } from "react";
import Loader from "../loader";
import axios from "axios";
import Topbar from "../../scenes/global/Topbar";
import Sidebar from "../../scenes/global/Sidebar";



const Invoices = () => {

  const [donne, setDonne] = useState([]);

  const handledelete = (id) => {
    axios.delete(`/api/DeleteMedecin/${id}`)
    window.location.reload(false);
  };



  useEffect( ()=>{
  fetch(`/api/Medecin`)
  .then(response => response.json())
  .then(response=>setDonne(response))
  .catch(err => console.error(err));
  axios.get(`/api/welcome`)
  .then((response) => {setToken(response.status)})
  },[])
  
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "_id",
      headerName: "Id",
      flex:1,
    },
    {
      field: "firstName",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "lastName",
      headerName: "lastName",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "contact",
      headerName: "contact",
      flex: 1,
    },
    {
      field: "address1",
      headerName: "address1",
      flex: 1,
    },
    {
      field: "address2",
      headerName: "address2",
      flex: 1,
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
            backgroundColor={
              
                 colors.greenAccent[600]
                
            }
            borderRadius="4px"
          >
            
            <Link to="/AddMedecin" style={{ textDecoration: 'none' }} >
            <Typography color={colors.grey[100]} sx={{ ml: "5px" ,textDecoration:"none" }}>
            
              Ajouter
            </Typography>
            </Link >
            
          </Box>
        );
      },
    },{
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
            backgroundColor={
              
                 colors.blueAccent[600]
                
            }
            borderRadius="4px"
          >
            
            <Link to={`/edit/${params.row._id}`} style={{ textDecoration: 'none' }} >
            <Typography color={colors.grey[100]} sx={{ ml: "5px" ,textDecoration:"none" }}>
            
              Modifier
            </Typography>
            </Link>
            
          </Box>
        );
      },
    },{
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
            backgroundColor={
              
                 colors.redAccent[600]
                
            }
            borderRadius="4px"
          >
            
            <Typography color={colors.grey[100]} sx={{ ml: "5px" ,textDecoration:"none" }} onClick={()=>handledelete(params.row._id)}>
              Supprimer
            </Typography>
            
            
          </Box>
        );
      },
    },
  ];


  const [token, setToken] = useState(400);

  if(token===200){
  return (<>
   
  
    <Box m="20px">
      
       {donne.length<=0 ? <Loader/> : (<> 
        <Header title="INVOICES" subtitle="List of Invoice Balances" />
        <Box m="20px">
    </Box>
     
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
        <DataGrid  checkboxSelection getRowId={(row) => row._id} rows={donne.meds} columns={columns} />
      </Box></>)}
    </Box>
  </> );}
};

export default Invoices;