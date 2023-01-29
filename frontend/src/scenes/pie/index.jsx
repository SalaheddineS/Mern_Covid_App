import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";
import Topbar from "../../scenes/global/Topbar";
import Sidebar from "../../scenes/global/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
const Pie = () => {
  useEffect(() => {
    axios.get(`/api/welcome`).then((response) => {
      setToken(response.status);
    });
  }, []);
  const [token, setToken] = useState(false);
  if (token===200) {
    return (
      <>
        
            <Box m="20px">
              <Header title="Pie Chart" subtitle="Simple Pie Chart" />
              <Box height="75vh">
                <PieChart />
              </Box>
            </Box>
          
      </>
    );
  }
};

export default Pie;
