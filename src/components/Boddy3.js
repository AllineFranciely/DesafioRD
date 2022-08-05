import React from 'react';
import './Styles/Boddy3.css';
import { gridColumn } from '../utils/gridcolumn';
import { Box, Grid, Flex } from '@chakra-ui/react';
import Vetor1 from '../images/vetor1.jpeg';
import Vetor2 from '../images/vetor2.jpeg';
import Vetor3 from '../images/vetor3.jpeg';
import Vetor4 from '../images/vetor4.jpeg';
import Vetor5 from '../images/vetor5.jpeg';
import Vetor6 from '../images/vetor6.jpeg';

function Boddy3() {

  return (
    <div boddy1Inteiro>
      <Flex
        flexGrow={1}
        id="content"
        justifyContent="center"
        height="30vh"
      >
        <Box className="boddyPart3" gridColumn={gridColumn.gc12}>
          <Grid
            gridTemplateColumns="repeat(12, 1fr)"
            gap={'10px'}
            mx={6}
            width="100%"
            height="100%"
            maxBlockSize={'200px'}
          >
            <Box gridColumn={gridColumn.gc6}>
              <h1 className="titlePart3"><b>A ferramenta de Automação de</b></h1>
              <h1 className="titlePart3"><b>Marketing líder na América Latina</b></h1>
            </Box>
          </Grid>
          <Box className="textoBoddyPart3" gridColumn={gridColumn.gc10}>
          <Grid
            gridTemplateColumns="repeat(12, 1fr)"
            gap={'10px'}
            mx={6}
            width="100%"
            height="100%"
            maxBlockSize={'200px'}
          >
          <Box mr={10} className="texto1BoddyPart3" gridColumn={gridColumn.gc4}>
            <img className="iconPart3" src={Vetor1} alt="Vetor1"></img>
            <h1 className="Title2BoddyPart3"><b>Torne sua operação de Marketing Digital mais produtiva</b></h1>
            <p className="pBoddyPart3">Chega de usar várias ferramentas separadas e perder as informações no caminho!
                Somos o que chamam de ferramenta tudo-em-um: reunimos os principais recursos de
                marketing Digital em um só lugar para sua operação ser mais eficaz.</p>
          </Box>
          <Box  mr={10} className="texto1BoddyPart3" gridColumn={gridColumn.gc4}>
          <img className="iconPart3" src={Vetor2} alt="Vetor2"></img>
            <h1 className="Title2BoddyPart3"><b>Crie facilmente campanhas que funcionam</b></h1>
            <p className="pBoddyPart3">É fácil usar o RD Station Marketing, porque suas funcionalidades são simples, mas 
                poderosas, e contam com dexenas de modelos - como de Landing Pages, Pop-ups, emails
                - para diversas ocasiões e segmentos que você pode personalizar de acordo com a sua campanha.
            </p>
          </Box>
          <Box  mr={10} className="texto1BoddyPart3" gridColumn={gridColumn.gc4}>
          <img className="iconPart3" src={Vetor3} alt="Vetor3"></img>
            <h1 className="Title2BoddyPart3"><b>Construa jornadas personalizadas e gere vendas em escala</b></h1>
            <p className="pBoddyPart3">Envie a menssagem certa na hora certa e construa jrnadas personalizadas que geram até 5X mais
                conversões e guiam Leads até a compra. Automatize também suas tarefas e aumente a produtividade
                de Marketing e Vendas.
            </p>
          </Box>
          <Box  mr={10} className="texto1BoddyPart3" gridColumn={gridColumn.gc4}>
          <img className="iconPart3" src={Vetor4} alt="Vetor4"></img>
            <h1 className="Title2BoddyPart3"><b>Encontre automaticamente as melhores oportunidades</b></h1>
            <p className="pBoddyPart3">Conheça melhor seu público, de acordo com as informações capturadas nas suas páginas e formulários.
                Defina critérios para identificar automaticamente
            </p>
          </Box>
          <Box  mr={10} className="texto1BoddyPart3" gridColumn={gridColumn.gc4}>
          <img className="iconPart3" src={Vetor5} alt="Vetor5"></img>
            <h1 className="Title2BoddyPart3"><b>Saia da incerteza e comprove resultados</b></h1>
            <p className="pBoddyPart3">Ao invés de fazer uma série de ações isoladas, sem saber qual funciona, junte as informações de todos
                os seus contatos e suas ações em diferentes canais com recursos de análise para provar que Marketing
                Digital traz mais vendas e clientes.
            </p>
          </Box>
          <Box  mr={10} className="texto1BoddyPart3" gridColumn={gridColumn.gc4}>
          <img className="iconPart3" src={Vetor6} alt="Vetor6"></img>
            <h1 className="Title2BoddyPart3"><b>Suporte ágil e na sua língua</b></h1>
            <p className="pBoddyPart3">Nosso time de suporte técnico está disponível quando você precisar, com uma taxa de satisfação de 97%
                entre nossos clientes e um tempo médico de resolução de 6 horas. E o melhor: tudo isso em português.
            </p>
          </Box>
          </Grid>
            </Box>
            <Box className="texto2BoddyPart3" gridColumn={gridColumn.gc12}>
          <h1 className="title3BoddyPart3"><b>Por que mais de 25.000 empresas</b></h1>
          <h1 className="title3BoddyPart33"><b>escolheram o RD Station?</b></h1>
          <p className="texto3BoddyPart3">Combinamos nossos produtos de Marketing e Vendas com pessoas que se importam com seus resultados e um</p>
          <p className="texto3BoddyPart3">ecossisitema que apoia o seu negócio do planejamento à prática</p>
          <div className="buttonPart3">
          <button className="buttonCreatePart3">
                 <a
                 href="https://app.rdstation.com.br/signup"
                 target="_blank"
                 rel="noreferrer"
                 >
                    CRIAR MINHA CONTA
                 </a> 
            </button>
        </div>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default Boddy3;