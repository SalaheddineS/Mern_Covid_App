
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../loader";
import { useParams } from "react-router-dom";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [token, setToken] = useState(false);
  const initialValues = {};
  const params = useParams();

  useEffect(() => {
    axios.get(`/api/welcome`).then((response) => {
      setToken(response.status);
    });
  }, []);

  const handleFormSubmit = (values) => {
    {console.log(values)}
    axios
      .patch(`/api/updateusers/${params.id}`, {
        Name: values.Name,
        Image: values.Image,
        Username: values.Username,
        Password: values.Password,
        Role: values.Role,
        
      })
      .then(function (response) {
        console.log(response);
      });
  };
  if (token === 200) {
    return (
      <>
        <Box m="20px">
          <Header
            title="Modifier admin"
            subtitle="Page pour modifier l'admin selectioné"
          />

<Formik onSubmit={handleFormSubmit} initialValues={initialValues}>
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box
                  display="grid"
                  gap="30px"
                  gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                  sx={{
                    "& > div": {
                      gridColumn: isNonMobile ? undefined : "span 4",
                    },
                  }}
                >
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Image"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.Image}
                    name="Image"
                    error={!!touched.Image && !!errors.Image}
                    helperText={touched.Image && errors.Image}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.Name}
                    name="Name"
                    error={!!touched.Name && !!errors.Name}
                    helperText={touched.Name && errors.Name}
                    sx={{ gridColumn: "span 2" }}
                  />

                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Username"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.Username}
                    name="Username"
                    error={!!touched.Username && !!errors.Username}
                    helperText={touched.Username && errors.Username}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.Password}
                    name="Password"
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Role "
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.Role}
                    name="Role"
                    error={!!touched.Role && !!errors.Role}
                    helperText={touched.Role && errors.Role}
                    sx={{ gridColumn: "span 4" }}
                  />
                </Box>
                <Box display="flex" justifyContent="end" mt="20px">
                  <Button type="submit" color="secondary" variant="contained">
                    Modifier Outil
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </>
    );
  }
};

export default Form;
