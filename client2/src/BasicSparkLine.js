import * as React from 'react';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

export default function BasicSparkLine() {
  	return (
	    <Stack direction="row" sx={{ width: '100%', flex: '3' }}>
	      	<Box sx={{ flexGrow: 1 }}>
	        	<SparkLineChart data={[1, 4, 2, 5, 7, 2, 4, 6]} height={80} />
	      	</Box>
	    </Stack>
  	);
}