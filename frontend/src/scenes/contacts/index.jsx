import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../loader";
import axios from "axios";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [donne, setDonne] = useState([]);

  const handleDelete = (id) => {
    axios.delete(`/api/Deleteoutils/${id}`, {}).then(function (response) {});
    window.location.reload(false);
  };

  useEffect(() => {
    axios
      .get(`/api/outils?pageNumber=${pageNumber}&pageSize=${pageSize}`, {
        withCredentials: true,
      })
      .then((response) => setDonne(response.data));
    axios.get(`/api/welcome`).then((response) => {
      setToken(response.status);
    });
  }, [pageNumber, pageSize]);
  const columns = [
    {
      field: "url",
      headerName: "image",

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
            src={params.row.url}
          />
        );
      },
    },
    {
      field: "Nom",
      headerName: "Outil",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "Quantite",
      headerName: "Quantité",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "NumFournisseur",
      headerName: "Numero Fournisseur",
      flex: 1,
    },
    {
      field: "EmailFournisseur",
      headerName: "Email Fournisseur",
      flex: 1,
    },
    {
      field: "addresse",
      headerName: "Addresse fournisseur",
      flex: 1,
    },
    {
      field: "Marque",
      headerName: "Marque",
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
            backgroundColor={colors.greenAccent[600]}
            borderRadius="4px"
          >
            <Link to="/addoutils" style={{ textDecoration: "none" }}>
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
            <Link
              to={`/editProduct/${params.row._id}`}
              style={{ textDecoration: "none" }}
            >
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
            <Typography
              color={colors.grey[100]}
              sx={{ ml: "5px", textDecoration: "none" }}
              onClick={() => handleDelete(params.row._id)}
            >
              Supprimer
            </Typography>
          </Box>
        );
      },
    },
  ];
  const [token, setToken] = useState(false);

  if (token === 200) {
    return (
      <>
        <Box m="20px">
          {donne.length <= 0 ? (
            <Loader />
          ) : (
            <>
              <Header
                title="Outils"
                subtitle="Liste des outils medicaux utilisées"
              />
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
                  "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: `${colors.grey[100]} !important`,
                  },
                }}
              >
                <DataGrid
                  paginationMode="server"
                  onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                  onPageChange={(newPage) => setPageNumber(newPage)}
                  rows={donne.ots}
                  columns={columns}
                  components={{ Toolbar: GridToolbar }}
                  getRowId={(row) => row._id}
                  rowCount={donne.tmp}
                  pageSize={pageSize}
                  rowsPerPageOptions={[10, 20, 50]}
                  density="comfortable"
                />
              </Box>
            </>
          )}
        </Box>
      </>
    );
  }
};

export default Contacts;
