import { Box, Button, TextField } from "@mui/material";
import { Formik, useFormik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
   
    const formData = new FormData();
   
    formData.append("Nom", values.Nom);
    formData.append("photo", formik.values.photo);
    formData.append("Quantite", values.Quantite);
    formData.append("NumFournisseur", values.NumFournisseur);
    formData.append("EmailFournisseur", values.EmailFournisseur);
    formData.append("addresse", values.addresse);
    formData.append("Marque", values.Marque);
   
    axios
      .post(`/api/Addoutils`,
      formData)
      .then(function (response) {
        console.log(response);
      });
  };
  const [token, setToken] = useState(false);
  const formik = useFormik({
    initialValues: {
      photo: '',
    },
    
  });
  useEffect(() => {
    axios.get(`/api/welcome`).then((response) => {
      setToken(response.status);
    });
  }, []);
  if (token === 200) {
    return (
      <>
        <Box m="20px">
          <Header
            title="CREATE outils"
            subtitle="Ajouter un nouveau outil a utiliser"
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
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div>
                  <label> Upload File</label>
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) =>
                    formik.setFieldValue("photo", e.currentTarget.files[0])
                    }
                  />
                </div>
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
                    label="Nom"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.Nom}
                    name="Nom"
                    error={!!touched.Nom && !!errors.Nom}
                    helperText={touched.Nom && errors.Nom}
                    sx={{ gridColumn: "span 2" }}
                  />

                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Quantite"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.Quantite}
                    name="Quantite"
                    error={!!touched.Quantite && !!errors.Quantite}
                    helperText={touched.Quantite && errors.Quantite}
                    sx={{ gridColumn: "span 2" }}
                  />

                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="NumFournisseur"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.NumFournisseur}
                    name="NumFournisseur"
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="EmailFournisseur "
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.EmailFournisseur}
                    name="EmailFournisseur"
                    error={
                      !!touched.EmailFournisseur && !!errors.EmailFournisseur
                    }
                    helperText={
                      touched.EmailFournisseur && errors.EmailFournisseur
                    }
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Addresse"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.addresse}
                    name="addresse"
                    error={!!touched.addresse && !!errors.addresse}
                    helperText={touched.addresse && errors.addresse}
                    sx={{ gridColumn: "span 4" }}
                  />
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Marque"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.Marque}
                    name="Marque"
                    error={!!touched.Marque && !!errors.Marque}
                    helperText={touched.Marque && errors.Marque}
                    sx={{ gridColumn: "span 4" }}
                  />
                </Box>
                <Box display="flex" justifyContent="end" mt="20px">
                  <Button type="submit" color="secondary" variant="contained">
                    Create New Outils
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

const initialValues = {
  Nom: "",
  url: "",
  Quantite: "",
  email: "",
  EmailFournisseur: "",
  NumFournisseur: "",
  addresse: "",
  Marque: "",
};

export default Form;
