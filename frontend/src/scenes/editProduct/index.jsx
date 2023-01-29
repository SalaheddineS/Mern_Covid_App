import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import axios from "axios";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import Topbar from "../../scenes/global/Topbar";
import Sidebar from "../../scenes/global/Sidebar";
import { useEffect, useState } from "react";
const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const params = useParams();
  const handleFormSubmit = (values) => {
    axios
      .patch(`/api/Updateoutils/${params.id}`, {
        Nom: values.Nom,
        url: values.url,
        Quantite: values.Quantite,
        NumFournisseur: values.NumFournisseur,
        EmailFournisseur: values.EmailFournisseur,
        addresse: values.addresse,
        Marque: values.Marque,
      })
      .then(function (response) {
        console.log(response);
      });
  };
  const [token, setToken] = useState(false);
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
                        label="url"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.url}
                        name="url"
                        error={!!touched.url && !!errors.url}
                        helperText={touched.url && errors.url}
                        sx={{ gridColumn: "span 4" }}
                      />
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
                          !!touched.EmailFournisseur &&
                          !!errors.EmailFournisseur
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
                      <Button
                        type="submit"
                        color="secondary"
                        variant="contained"
                      >
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
