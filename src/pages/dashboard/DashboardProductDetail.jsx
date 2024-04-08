import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useLayoutEffect, useState } from 'react'
import * as Api from "../../services/product"
import { PRODUCT_CATEGORIES, PRODUCT_GENDER } from '../../constants/products.constant';
import { ConfirmModal, HandleVariantModal, InitialComponent, Loading } from '../../components';
import { toast } from 'react-toastify';
import { Link, useNavigate, useParams } from 'react-router-dom';

const InfoCard = (props) => {
  const { product, loading } = props
  return (
    loading ?
      < Loading /> :
      <div className="card mb-3">
        {!product ?
          <InitialComponent />
          :
          <div className="card-body">
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image={product?.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product?.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product?.description}
                  </Typography>
                  <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                      <TableBody>
                        <TableRow>
                          <TableCell>Price</TableCell>
                          <TableCell>{product.price}</TableCell>
                        </TableRow>
                        <TableRow >
                          <TableCell>Gender </TableCell>
                          <TableCell>{PRODUCT_GENDER[product.gender]}</TableCell>
                        </TableRow>
                        <TableRow >
                          <TableCell>Gender </TableCell>
                          <TableCell>{PRODUCT_CATEGORIES[product.categories]}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        }
      </div>
  )
}

const TableVariants = (props) => {
  const { product, loading } = props;
  const [editMode, setEditMode] = useState(false);
  const [newVariants, setNewVariants] = useState([]);
  const navigate = useNavigate();

  const handleTempVariants = (tempVariant) => {
    setNewVariants([...newVariants, tempVariant])
  }

  const handleAddVariants = async () => {
    const res = await Api.createNewVariant(product?.id, newVariants)
    if (res?.statusCode !== 201) {
      res.errors?.map((error) => {
        toast.error(error);
        return false;
      })
    } else if (res?.statusCode === 201) {
      toast.success('Create new Variant successful');
      navigate('/admin/products')
      return true;
    }
  }

  return (loading ?
    <Loading /> :
    <>
      <div className="card">
        {!product ?
          <InitialComponent />
          :
          <div className="card-body">
            <h6 className="card-title font-weight-bold">{editMode ? 'Edit mode' : 'List of variants'}</h6>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Size</TableCell>
                    <TableCell>Color</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell style={{ width: '30%' }}>Image</TableCell>
                    {editMode && <TableCell>Edit</TableCell>}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {product?.details?.map((vari, index) => (
                    <TableRow
                      key={index}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>{vari.id}</TableCell>
                      <TableCell>{vari.size}</TableCell>
                      <TableCell>{vari.color}</TableCell>
                      <TableCell>{vari.stock}</TableCell>
                      <TableCell>
                        <img src={vari.img} alt="" width={150} height={80} />
                      </TableCell>
                      {editMode && <TableCell>
                        <div className="btn-group align-top">
                          <button
                            className="btn btn-info badge badge2"
                            type="button"
                            data-target="#variant-form-modal"
                            data-toggle="modal"
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-sm btn-outline-danger badge badge2"
                            type="button"
                            data-target="#delete-variant-modal"
                            data-toggle="modal"
                          >
                            <i className="fa fa-trash" style={{ color: 'red' }} />
                          </button>
                        </div>
                      </TableCell>}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>}

        {(newVariants?.length > 0) &&
          <div className="card-body">
            <hr />
            <h6 className="card-title font-weight-bold">List of temporary variants</h6>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Size</TableCell>
                    <TableCell>Color</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell style={{ width: '30%' }}>Image</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {newVariants?.map((tempVariant, index) => (
                    <TableRow
                      key={index}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>{tempVariant.size}</TableCell>
                      <TableCell>{tempVariant.color}</TableCell>
                      <TableCell>{tempVariant.stock}</TableCell>
                      <TableCell>
                        <img src={tempVariant.previewImg} alt="" width={150} height={80} />
                      </TableCell>
                      <TableCell>
                        <Button
                          color="error"
                          variant="outlined"
                          startIcon={<DeleteIcon />}
                          onClick={() => setNewVariants(newVariants?.filter((_, i) => i !== index))}
                        >Delete</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>}
        {product && <div className="card-footer">
          <div style={{ textAlign: 'right' }} className='pb-3'>
            {editMode ?
              <button
                type="button"
                className="btn btn-outline-primary mt-3 mr-3"
                onClick={() => setEditMode(false)}
              >Cancel</button> :
              <>
                <button
                  type="button"
                  className="btn btn-outline-primary mt-3 mr-3"
                  onClick={() => setEditMode(true)}
                >Edit</button>
                <button
                  type="button"
                  className="btn btn-primary mt-3 mr-3"
                  data-target="#variant-form-modal"
                  data-toggle="modal"
                >Create</button>
                {(newVariants?.length > 0) &&
                  <button
                    type="button"
                    className="btn btn-success mt-3 mr-3"
                    onClick={handleAddVariants}
                  >Submit</button>}
              </>
            }
          </div>
        </div>}
      </div>
      <ConfirmModal
        modalId={'delete-variant-modal'}
        modalTitle={'Remove this item'}
        modalMessage={'Do you want to remove this variant !'}
      />
      <HandleVariantModal
        isEdit={editMode}
        handleTempVariants={handleTempVariants}
      />
    </>
  )
}


const DashboardProductDetail = () => {

  const { id } = useParams();
  const [detailSelectedItem, setDetailSelectedItem] = useState(null);
  const [loading2, setLoading2] = useState(false);

  useLayoutEffect(() => {
    const getProductDetail = async () => {
      setLoading2(true);
      const response = await Api.getProduct(id);
      setDetailSelectedItem(response);
      setLoading2(false);
    };
    id && getProductDetail();
  }, [id])

  return (
    <>
      <div className='row'>
        <div className="col">
          <div className="e-panel card">
            <div className="card-body">
              <div className="title">
                <div className="row">
                  <div className="col">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <Link style={{ textDecoration: 'none' }} to="/admin">Dashboard</Link>
                        </li>
                        <li className="breadcrumb-item">
                          <Link style={{ textDecoration: 'none' }} to="/admin/products">Product Management</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                          Product Variant
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-4">
          <InfoCard product={detailSelectedItem} loading={loading2} />
        </div>
        <div className="col col-md-8">
          <TableVariants product={detailSelectedItem} loading={loading2} />
        </div>
      </div>
    </>
  )
}

export default DashboardProductDetail;
