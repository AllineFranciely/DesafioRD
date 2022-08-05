import React from 'react';
import './Styles/Boddy4.css';
import { gridColumn } from '../utils/gridcolumn';
import { Box, Grid, Flex } from '@chakra-ui/react';
import VideoImage from '../images/video.jpeg';
import Empresas from '../images/empresas.jpeg';

function Boddy4() {

    return (
        <div boddy4Inteiro>
            <Flex
                flexGrow={1}
                id="content"
                justifyContent="center"
                height="30vh"
            >
                <Box className="boddy4" gridColumn={gridColumn.gc12}>
                    <Grid
                        gridTemplateColumns="repeat(12, 1fr)"
                        gap={'10px'}
                        mx={6}
                        width="100%"
                        height="100%"
                        maxBlockSize={'300px'}
                    >
                        <Box gridColumn={gridColumn.gc12}>
                            <Grid
                                gridTemplateColumns="repeat(12, 1fr)"
                                gap={'10px'}
                                mx={6}
                                width="100%"
                                height="100%"
                                maxBlockSize={'300px'}
                            >
                                <Box className="anuncio" gridColumn={gridColumn.gc6}>
                                    <h1 className="h1Anuncio"><b>Entenda melhor como o RD</b></h1>
                                    <h1 className="h1Anuncio"><b>Station marketing funciona na</b></h1>
                                    <h1 className="h1Anuncio"><b>prática</b></h1>
                                    <button className="buttonPlay">ASSISTA A DEMONSTRAÇÃO</button>
                                </Box>
                                <Box gridColumn={gridColumn.gc6}>
                                    <img className="imageVideo" src={VideoImage} alt="Video"></img>
                                </Box>
                            </Grid>
                        </Box>
                        <Box className="anuncio2" gridColumn={gridColumn.gc12}>
                            <Grid
                                gridTemplateColumns="repeat(12, 1fr)"
                                gap={'10px'}
                                mx={6}
                                width="100%"
                                height="100%"
                                maxBlockSize={'300px'}
                            >
                                <Box gridColumn={gridColumn.gc6}>
                                    <h1 className="h1Anuncio2"><b>Torne sua operação de Marketing</b></h1>
                                    <h1 className="h1Anuncio2"><b>ainda mais poderosa</b></h1>
                                    <p className="p1Anuncio2">O RD Station Marketing se conecta as principais ferramentas</p>
                                    <p className="p2Anuncio2">nacionais e internacionais</p>
                                    <button className="buttonCreatePart4">
                                        <a
                                            href="https://app.rdstation.com.br/signup"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            CRIAR CONTA GRATUITA
                                        </a>
                                    </button>
                                </Box>
                                <Box gridColumn={gridColumn.gc6}>
                                    <img src={Empresas} alt="Empresas"></img>
                                </Box>
                            </Grid>
                        </Box>
                    </Grid>
                </Box>
            </Flex>
        </div>
    );
}

export default Boddy4;