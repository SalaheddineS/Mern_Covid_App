import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import { useState } from "react";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Medecin from "./scenes/medecin";
import Bar from "./scenes/bar";
import AddMedecin from "./scenes/addmedecin";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar";
import Edit from "./scenes/edit";
import AddOutils from "./scenes/addoutils";
import EditProduct from "./scenes/editProduct";
import Loading from "./scenes/loading";
import Sidebar from "./scenes/global/Sidebar";
import Topbar from "./scenes/global/Topbar";
import Addadmin from "./scenes/addadmin";
import EditUser from "./scenes/editusers";
import Cookies from 'js-cookie';
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
        <div className="app">
        {(Cookies.get('token') != undefined) && <Sidebar  />}
          <main className="content">
          {(Cookies.get('token') != undefined) && <Topbar  />}
        <Routes>
          <Route path="/" element={<Loading />} />
          <Route path="/*" element={<Dashboard />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/medecin" element={<Medecin />} />
          <Route path="/AddMedecin" element={<AddMedecin />} />
          <Route path="/Addadmin" element={<Addadmin />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/pie" element={<Pie />} />
          <Route path="/line" element={<Line />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/geography" element={<Geography />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/editProduct/:id" element={<EditProduct />} />
          <Route path="/editusers/:id" element={<EditUser />} />
          <Route path="/addoutils" element={<AddOutils />} />
        </Routes>
        </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
