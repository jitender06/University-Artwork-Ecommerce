import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

export default function Charts() {
  // const darkTheme = createTheme({
  //   palette: {
  //     mode: 'dark',
  //   },
  // });

  return (
    // <ThemeProvider theme={darkTheme}>
    //   <CssBaseline />
      // <p>Users Analytics</p>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
            area: true,
          },
        ]}
        // width={500}
        height={500}
      />
    // </ThemeProvider>
  );
}
