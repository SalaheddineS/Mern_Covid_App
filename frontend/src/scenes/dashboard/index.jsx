import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import FiberNewOutlinedIcon from "@mui/icons-material/FiberNewOutlined";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import NewReleasesRoundedIcon from "@mui/icons-material/NewReleasesRounded";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import { useEffect, useState } from "react";
import Loader from "../loader";
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

const Dashboard = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [donnee, setDonnee] = useState([]);
  const [africa, setAfrica] = useState([]);
  const [token, setToken] = useState(400);

  useEffect(() => {
    fetch(
      "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/africa",
      options
    )
      .then((response) => response.json())
      .then((response) => setAfrica(response))
      .catch((err) => console.error(err));

    fetch(
      "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world",
      options
    )
      .then((response) => response.json())
      .then((response) => setDonnee(response))
      .catch((err) => console.error(err));

    axios
      .get(`/api/welcome`)
      .then((response) => {
        setToken(response.status);
      });
  }, []);

  if (token===200) {
    return (
      <>
        
            <Box m="20px">
              {!africa.length > 0 || !donnee.length > 0 ? (
                <Loader />
              ) : (
                <>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Header
                      title="Covid DASHBOARD"
                      subtitle="Welcome to your Covid statistics dashboard"
                    />
                  </Box>
                  <Box
                    display="grid"
                    gridTemplateColumns="repeat(12, 1fr)"
                    gridAutoRows="140px"
                    gap="20px"
                  >
                    <Box
                      gridColumn="span 3"
                      backgroundColor={colors.primary[400]}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <StatBox
                        title={donnee.at(0).TotalCases}
                        subtitle="Cas Totaux Covid"
                        progress="0.75"
                        increase="+14%"
                        icon={
                          <CoronavirusIcon
                            sx={{
                              color: colors.greenAccent[600],
                              fontSize: "40px",
                            }}
                          />
                        }
                      />
                    </Box>

                    <Box
                      gridColumn="span 3"
                      backgroundColor={colors.primary[400]}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <StatBox
                        title={donnee.at(0).NewCases}
                        subtitle="Nouveaux cas Covid"
                        progress="0.50"
                        increase="+21%"
                        icon={
                          <FiberNewOutlinedIcon
                            sx={{
                              color: colors.greenAccent[600],
                              fontSize: "40px",
                            }}
                          />
                        }
                      />
                    </Box>
                    <Box
                      gridColumn="span 3"
                      backgroundColor={colors.primary[400]}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <StatBox
                        title={donnee.at(0).TotalDeaths}
                        subtitle="Cas Totaux Morts"
                        progress="0.30"
                        increase="+5%"
                        icon={
                          <VaccinesIcon
                            sx={{
                              color: colors.greenAccent[600],
                              fontSize: "26px",
                            }}
                          />
                        }
                      />
                    </Box>
                    <Box
                      gridColumn="span 3"
                      backgroundColor={colors.primary[400]}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <StatBox
                        title={donnee.at(0).NewDeaths}
                        subtitle="Nouveaux Morts Covid"
                        progress="0.80"
                        increase="+43%"
                        icon={
                          <NewReleasesRoundedIcon
                            sx={{
                              color: colors.greenAccent[600],
                              fontSize: "26px",
                            }}
                          />
                        }
                      />
                    </Box>

                    {/* ROW 2 */}
                    <Box
                      gridColumn="span 12"
                      gridRow="span 2"
                      backgroundColor={colors.primary[400]}
                    >
                      <Box
                        mt="25px"
                        p="0 30px"
                        display="flex "
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Box>
                          <Typography
                            variant="h5"
                            fontWeight="600"
                            color={colors.grey[100]}
                          >
                            TotalRecovered
                          </Typography>
                          <Typography
                            variant="h3"
                            fontWeight="bold"
                            color={colors.greenAccent[500]}
                          >
                            {donnee.at(0).TotalRecovered}
                          </Typography>
                        </Box>
                        <Box></Box>
                      </Box>
                      <Box height="250px" m="-20px 0 0 0">
                        <LineChart afrique={africa} isDashboard={true} />
                      </Box>
                    </Box>

                    {/* ROW 3 */}
                    <Box
                      gridColumn="span 8"
                      gridRow="span 2"
                      backgroundColor={colors.primary[400]}
                      p="30px"
                    >
                      <Typography variant="h5" fontWeight="600">
                        Ratio Infected to Recovered
                      </Typography>
                      <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        mt="25px"
                      >
                        <ProgressCircle size="125" />
                        <Typography
                          variant="h5"
                          color={colors.greenAccent[500]}
                          sx={{ mt: "15px" }}
                        >
                          {(
                            (donnee.at(0).TotalRecovered /
                              donnee.at(0).TotalCases) *
                            100
                          ).toFixed(2)}
                          % Des personnes infectées se sont rétablies
                        </Typography>
                        <Typography>
                          Inclus seulement les personnes cliniquement enregistré
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      gridColumn="span 4"
                      gridRow="span 2"
                      backgroundColor={colors.primary[400]}
                      overflow="auto"
                    >
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        colors={colors.grey[100]}
                        p="15px"
                      >
                        <Typography
                          color={colors.grey[100]}
                          variant="h5"
                          fontWeight="600"
                        >
                          Transactions recentes
                        </Typography>
                      </Box>
                      {africa.map((africa, i) => (
                        <Box
                          key={`${africa.Country}-${i}`}
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                          borderBottom={`4px solid ${colors.primary[500]}`}
                          p="15px"
                        >
                          <Box>
                            <Typography
                              color={colors.greenAccent[500]}
                              variant="h5"
                              fontWeight="600"
                            >
                              {africa.Infection_Risk}
                            </Typography>
                            <Typography color={colors.grey[100]}>
                              Infection Risk
                            </Typography>
                          </Box>
                          <Box color={colors.grey[100]}>
                            {africa.ActiveCases}
                            <Typography
                              color={colors.greenAccent[500]}
                              variant="h5"
                              fontWeight="600"
                            >
                              ActiveCases
                            </Typography>
                          </Box>
                          <Box
                            backgroundColor={colors.greenAccent[500]}
                            p="5px 10px"
                            borderRadius="4px"
                          >
                            {africa.Country}
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </Box>{" "}
                </>
              )}
            </Box>
         
      </>
    );
  }
};

export default Dashboard;
