import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BreadcrumbsCustom(props) {
  const { routeItems } = props;
  return (
    routeItems?.length && <div className="card p-3" role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        {routeItems?.map(item => (
          <Link
            underline="hover"
            style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#495057' }}
            color="inherit"
            to={item?.href}
          >
            <div style={{ marginRight: "10px", marginLeft: '20px' }}>
              {item?.icon}
            </div>
            {item?.label}
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  );
}