import React from 'react';
import './Styles/Boddy2.css';
import { gridColumn } from '../utils/gridcolumn';
import { Box, Grid, Flex } from '@chakra-ui/react';
import IMG1 from '../images/img1.jpeg';

function Boddy2() {
  return (
    <div boddy1Inteiro>
      <Flex
        flexGrow={1}
        id="content"
        justifyContent="center"
        height="30vh"
      >
        <Box className="boddyPart2" mt={3} gridColumn={gridColumn.gc12}>
          <Grid
            gridTemplateColumns="repeat(12, 1fr)"
            gap={'10px'}
            mx={6}
            width="100%"
            height="100%"
            maxBlockSize={'200px'}
          >
            <Box className="IMG1" mt={3} gridColumn={gridColumn.gc6}>
              <img className="img1" src={IMG1} alt="Mulher escrevendo" />
            </Box>
          </Grid>
        </Box>
      </Flex>
    </div>
  );
}

export default Boddy2;