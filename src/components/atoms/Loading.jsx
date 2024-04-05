import { CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '10em' }}>
      <CircularProgress />
    </div>
  )
};

export default Loading;