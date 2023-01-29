import { Box, useTheme } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import Topbar from "../../scenes/global/Topbar";
import Sidebar from "../../scenes/global/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [token, setToken] = useState(false);
  useEffect( ()=>{axios.get(`/api/welcome`)
  .then((response) => {setToken(response.status)})},[])
  if(token===200){
  return (
    <>
   
   
    <Box m="20px">
      <Header title="Geography" subtitle="Simple Geography Chart" />

      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeographyChart />
      </Box>
    </Box>
</>);}
};

export default Geography;