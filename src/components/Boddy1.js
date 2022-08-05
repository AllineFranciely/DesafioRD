import React from 'react';
import './Styles/Boddy1.css';
import { gridColumn } from '../utils/gridcolumn';
import { Box, Grid, Flex } from '@chakra-ui/react';
import Formulario from './Formulario';

function Boddy1() {
  return (
    <div boddy1Inteiro>
      <Flex
        flexGrow={1}
        id="content"
        justifyContent="center"
        height="30vh"
      >
        <Box className="boddy1" mt={3} gridColumn={gridColumn.gc12}>
          <Grid
            gridTemplateColumns="repeat(12, 1fr)"
            gap={'10px'}
            mx={6}
            width="100%"
            height="100%"
            maxBlockSize={'200px'}
          >
            <Box mt={3} gridColumn={gridColumn.gc6}>
              <h1 className="boddy1Title"><b>Gere mais <font color="#07E5EB">oportunidades</font> para seu negócio</b></h1>
              <p className="boddy1Text">O RD Station Marketing é um software para sua empresa fazer campanhas melhores, nutrir Leads, gerar oportunidades comerciais qualificadas e alcançar mais resultados</p>
            </Box>
            <Box mt={3} gridColumn={gridColumn.gc6}>
              <Formulario />
            </Box>
            <Box className="boddy2" mt={3} gridColumn={gridColumn.gc6}>
              <h1 className="boddy2Title"><b>Estaremos juntos desde o primeiro passo!</b></h1>
              <p className="boddy2Text">Se vc ainda não sabe como extrair o máximo das ações digitais, não tem problema.</p>
              <p className="boddy2Text">O <b>RD Station Marketing</b> é mais que uma ferramenta, nos importamos</p>
              <p className="boddy2Text">com os seus resultados.</p>
              <p className="boddy2Text2"><b>Estaremos com você do planejamento até a prática!</b></p>
            </Box>
          </Grid>
        </Box>
      </Flex>
    </div>
  );
}

export default Boddy1;