import { Box, Button, TextField } from "@mui/material";
import { Formik,Field } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [token, setToken] = useState(false);
  const initialValues = {};


  useEffect(() => {
    axios.get(`/api/welcome`).then((response) => {
      setToken(response.status);
    });
  }, []);

  const handleFormSubmit = (values) => {
   
    axios
      .post(`/api/Addusers`, {
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
            title="Ajouter Administrateur"
            subtitle="Page pour Creer un nouveau Admin"
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
                    validate={(value) => !value && "Image obligatoire"}
                    name="Image"
                    error={!!touched.Image && !!errors.Image}
                    helperText={touched.Image && errors.Image}
                    sx={{ gridColumn: "span 4" }}
                    required={true}
                  />
                  
                  <TextField
                    required={true}
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Name"
                    validate={(value) => !value && "Nom obligatoire"}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.Name}
                    name="Name"
                    error={!!touched.Name && !!errors.Name}
                    helperText={touched.Name && errors.Name}
                    sx={{ gridColumn: "span 2" }}
                  />

                  <TextField
                    required={true}
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Username"
                    validate={(value) => !value && "Username obligatoire"}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.Username}
                    name="Username"
                    error={!!touched.Username && !!errors.Username}
                    helperText={touched.Username && errors.Username}
                    sx={{ gridColumn: "span 2" }}
                  />
                  <TextField
                    required={true}
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Password"
                    validate={(value) => !value && "Password obligatoire"}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.Password}
                    name="Password"
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    required={true}
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Role "
                    validate={(value) => !value && "Role obligatoire"}
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
                    Ajouter Utilisateur
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
