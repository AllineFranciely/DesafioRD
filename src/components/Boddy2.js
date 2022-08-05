import React from 'react';
import './Styles/Boddy2.css';
import { gridColumn } from '../utils/gridcolumn';
import { Box, Grid, Flex } from '@chakra-ui/react';
import IMG1 from '../images/img1.jpeg';
import { CheckIcon } from '@chakra-ui/icons'

function Boddy2() {
  return (
    <div boddy1Inteiro>
      <Flex
        flexGrow={1}
        id="content"
        justifyContent="center"
        height="30vh"
      >
        <Box className="boddyPart2" gridColumn={gridColumn.gc12}>
          <Grid
            gridTemplateColumns="repeat(12, 1fr)"
            gap={'10px'}
            mx={6}
            width="100%"
            height="100%"
            maxBlockSize={'200px'}
          >
            <Box className="IMG1" gridColumn={gridColumn.gc6}>
              <img className="img1" src={IMG1} alt="Mulher escrevendo" />
            </Box>
          </Grid>
          <Box className="textoBoddyPart2" gridColumn={gridColumn.gc6}>
              <h1 className="title1Part2"><b>Resultados previsíveis</b></h1>
              <h1 className="title1Part2"><b>e mais clientes para sua empresa</b></h1> 
              <p className="p1Part2" >Torne sua atuação no Marketing Digital mais eficaz</p>
              <p className="linha1"> <CheckIcon color="#07E5EB" /> <b>Ferramentas intuitivas</b> e com modelos prontos, vídeos</p>
              <p className="linhaExtra">explicativos e passo a passo guiado</p>
              <p className="linha1"> <CheckIcon color="#07E5EB" /> <b>Implementação com especialistas</b>focada em planejamento e</p>
              <p className="linhaExtra">prática (nos planos Marketing Pro e Enterprise)</p>
              <p className="linha1"> <CheckIcon color="#07E5EB" /> <b>Time de especialistas em Sucesso do Cliente</b>para apoiar  na</p>
              <p className="linhaExtra">otimização da estratégia em cada fase da sua jornada (nos</p>
              <p className="linhaExtra">planos Marketing Pro e Enterpise)</p>
              <p className="linha1"> <CheckIcon color="#07E5EB" /> <b>Suporte técnico</b>em português, espanhol e inglês para tirar</p>
              <p className="linhaExtra">dúvidas, <b>com 97% de satisfação</b> entre nossos clientes</p>
              <p className="linha1"> <CheckIcon color="#07E5EB" /> <b>Muito conteúdo educativo</b>, eventos, cursos na <font color="#07E5EB">RD University</font> e</p>
              <p className="linhaExtra">comunidades para você continuar evoluindo</p>
            </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default Boddy2;