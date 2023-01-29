import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import { useEffect, useState } from "react";
import Topbar from "../../scenes/global/Topbar";
import Sidebar from "../../scenes/global/Sidebar";
import axios from "axios";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1026242359msh47fbf5aab26c87ap16a49bjsn91438d5aab9e",
    "X-RapidAPI-Host":
      "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
  },
};

const Line = () => {
  const [africa, setAfrica] = useState([]);

  useEffect(() => {
    fetch(
      "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/africa",
      options
    )
      .then((response) => response.json())
      .then((response) => setAfrica(response))
      .catch((err) => console.error(err));
    axios.get(`/api/welcome/`).then((response) => {
      setToken(response.status);
    });
  });
  const [token, setToken] = useState(false);

  if (token === 200) {
    return (
      <>
        <>
         
              {africa.length > 0 && (
                <Box m="20px">
                  <Header title="Line Chart" subtitle="Simple Line Chart" />
                  <Box height="75vh">
                    <LineChart afrique={africa} />
                  </Box>
                </Box>
              )}
           
        </>
      </>
    );
  }
};

export default Line;
