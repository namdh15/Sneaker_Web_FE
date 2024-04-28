import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { ButtonBase } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// project imports
// import config from 'config';
// import { MENU_OPEN } from 'store/actions';

const LogoSectionDashboard = () => {
  // const defaultId = useSelector((state) => state.customization.defaultId);
  // const dispatch = useDispatch();
  return (
    <ButtonBase
      disableRipple
      // onClick={() => dispatch({ type: MENU_OPEN, id: defaultId })}
      component={Link}
      to={'/'}
    >
      <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">
        <img height={'55px'} src="./assets/logo.jpg" alt="" />
      </NavLink>
    </ButtonBase>
  );
};

export default LogoSectionDashboard;
