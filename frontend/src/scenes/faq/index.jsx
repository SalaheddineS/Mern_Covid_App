import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import Topbar from "../../scenes/global/Topbar";
import Sidebar from "../../scenes/global/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [token, setToken] = useState(false);
  useEffect(() => {
    axios.get(`/api/welcome`).then((response) => {
      setToken(response.status);
    });
  }, []);
  if (token===200) {
    return (
      <>
        
            <Box m="20px">
              <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

              <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography color={colors.greenAccent[500]} variant="h5">
                    Quelles sont les règles concernant le « passe vaccinal » ?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Depuis le 14 mars 2022, l’application du passe vaccinal a
                    été suspendue dans tous les endroits où il était exigé
                    (lieux de loisirs et de culture, activités de restauration
                    commerciales, foires et salons professionnels… De même le
                    passe sanitaire n’est plus en vigueur à compter du 1er août
                    2022.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography color={colors.greenAccent[500]} variant="h5">
                    Quelles sont les règles en vigueur aux frontières nationales
                    ?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Le dispositif de contrôle sanitaire aux frontières a permis
                    depuis le début de la crise sanitaire de protéger notre
                    système de santé et de retarder l’arrivée sur le territoire
                    national de variants aux caractéristiques préoccupantes.
                    Depuis le 1er août 2022, ce dispositif est levé. En
                    conséquence, les règles précédemment appliquées aux
                    voyageurs à destination de la France ne s’appliquent plus :
                    les voyageurs n’ont plus aucune formalité à accomplir avant
                    leur arrivée en France, en métropole comme outre-mer, et la
                    présentation du passe sanitaire ne peut plus être exigée,
                    quel que soit le pays ou la zone de provenance ; plus aucune
                    justification de voyage (le « motif impérieux ») ne peut
                    être exigée ; les voyageurs n’ont plus à présenter
                    d’attestation sur l’honneur de non contamination et
                    d’engagement à se soumettre à un test antigénique ou un
                    examen biologique à l’arrivée sur le territoire national. Il
                    en va de même pour les déplacements entre la métropole et
                    chacun des territoires ultramarins. Toutefois, en cas
                    d’émergence d’un variant dangereux, un dispositif de
                    présentation d’un test virologique négatif à l’entrée sur le
                    territoire national pourra être rétabli pour les voyageurs
                    en provenance des pays considérés comme à risque. Ainsi, le
                    gouvernement conserve jusqu’au 31 janvier 2023 la
                    possibilité d’activer des mesures de « frein d’urgence »
                    pour une durée maximale de 2 mois, après avis de la Haute
                    autorité de santé en cas d’apparition et de circulation d’un
                    nouveau variant de la covid-19 susceptible de constituer une
                    menace sanitaire grave ou, dans les outre-mer, en cas de
                    risque de saturation du système de santé. Par ailleurs, dans
                    le cadre des déplacements à l’étranger, une attestation de
                    vaccination, un certificat de test négatif ou de
                    rétablissement au format européen pourra être exigé par le
                    pays de destination. Aussi est-il conseillé de bien
                    conserver ses preuves sanitaires dans le Carnet de
                    TousAntiCovid ou au format papier. Pour connaître les règles
                    sanitaires relatives à l’entrée sur le territoire d’un autre
                    pays, les voyageurs sont invités à consulter la rubrique «
                    Conseils aux voyageurs » du site internet du ministère de
                    l’Europe et des Affaires étrangères :
                    www.diplomatie.gouv.fr/fr/conseils-aux-voyageurs/.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography color={colors.greenAccent[500]} variant="h5">
                    Quelles sont les règles concernant le port du masque ?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Le port du masque n’est plus obligatoire dans les
                    établissements recevant du public, ni dans les transports
                    maritimes, fluviaux, terrestres et aériens. Le port du
                    masque demeure recommandé dans les lieux clos et de
                    promiscuité, et dans les grands rassemblements pour les
                    personnes fragiles, du fait de leur âge. Il est par ailleurs
                    très fortement recommandé dans les établissements
                    hospitaliers et pour les personnes âgées.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography color={colors.greenAccent[500]} variant="h5">
                    Covid-19 : Déplacements internationaux
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Le dispositif de contrôle sanitaire aux frontières a permis,
                    depuis le début de la crise de protéger notre système de
                    santé et de retarder l’arrivée sur le territoire national de
                    variants aux caractéristiques préoccupantes. Ce dispositif,
                    qui a mobilisé chaque semaine jusqu’à 6 000 membres de la
                    sécurité civile pour réaliser les tests, des
                    garde-frontières pour vérifier les justificatifs sanitaires
                    des voyageurs et des forces de sécurité intérieure pour
                    contrôler les mesures d’isolement ou de quarantaine décidées
                    par les préfets, a été régulièrement adapté à l’évolution de
                    la situation sanitaire et des règles communautaires.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography color={colors.greenAccent[500]} variant="h5">
                    régimes d'exception créés pour lutter contre l'épidémie liée
                    à la covid-19.
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    En conséquence, depuis le 1er août 2022, les règles
                    précédemment appliquées aux voyageurs à destination de la
                    France ne s’appliquent plus : les voyageurs n’ont plus
                    aucune formalité à accomplir avant leur arrivée en France,
                    en métropole comme outre-mer, et la présentation du passe
                    sanitaire ne peut plus être exigée, quel que soit le pays ou
                    la zone de provenance ; plus aucune justification de voyage
                    (le « motif impérieux ») ne peut être exigée ; les voyageurs
                    n’ont plus à présenter d’attestation sur l’honneur de non
                    contamination et d’engagement à se soumettre à un test
                    antigénique ou un examen biologique à l’arrivée sur le
                    territoire national. Il en va de même pour les déplacements
                    entre la métropole et chacun des territoires ultramarins.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
        
      </>
    );
  }
};

export default FAQ;
