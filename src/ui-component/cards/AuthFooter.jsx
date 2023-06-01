// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
  <Stack direction="row" justifyContent="space-between">
    <Typography variant="subtitle2" component={Link} href="https://smartdoor.io" target="_blank" underline="hover">
      smartdoor.io
    </Typography>
    <Typography variant="subtitle2" component={Link} href="https://github.com/Hamza-cpp/front_end.git" target="_blank" underline="hover">
      &copy; Hamza-cpp, mohammedejjabbari
    </Typography>
  </Stack>
);

export default AuthFooter;
