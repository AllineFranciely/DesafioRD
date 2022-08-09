import React from 'react';
import Header from '../components/Header';
import Boddy1 from '../components/Boddy1';
import Boddy2 from '../components/Boddy2';
import Boddy3 from '../components/Boddy3';
import Boddy4 from '../components/Boddy4';
import Footer from '../components/Footer';
import { gridColumn } from '../utils/gridcolumn';
import { Box, Grid, Flex } from '@chakra-ui/react';

function Home() {
  return (
    <div>
      <Flex
        flexGrow={1}
        id="content"
        justifyContent="center"
        height="30vh"
      >
        <Grid
          gridTemplateColumns="repeat(12, 1fr)"
          gap={'10px'}
          mx={6}
          width="100%"
          height="100%"
          maxBlockSize={'100px'}
        >
          <Box mb={20} gridColumn={gridColumn.gc12}>
            <Header />
            <Box mb={20} gridColumn={gridColumn.gc12}>
              <Boddy1 />
            </Box>
            <Box mb={20} gridColumn={gridColumn.gc12}>
              <Boddy2 />
            </Box>
            <Box mb={20} gridColumn={gridColumn.gc12}>
              <Boddy3 />
            </Box>
            <Box mb={20} gridColumn={gridColumn.gc12}>
              <Boddy4 />
            </Box>
            <Box gridColumn={gridColumn.gc12}>
              <Footer />
            </Box>
          </Box>
        </Grid>
      </Flex>
    </div>
  );
}

export default Home;