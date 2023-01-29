import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import Topbar from "../../scenes/global/Topbar";
import Sidebar from "../../scenes/global/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
const Bar = () => {
  const [token, setToken] = useState(false);
  useEffect( ()=>{axios.get(`/api/welcome`)
  .then((response) => {setToken(response.status)})},[])
  if(token){
  return (<>
 
    
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
 </>);}
};

export default Bar;