import {
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
import React, { useEffect, useState } from 'react'
import * as Api from "../../services/product"
import SearchSectionDashboard from '../../components/atoms/dashboard/SearchSectionDashboard';
import { PRODUCT_CATEGORIES, PRODUCT_GENDER } from '../../constants/products.constant';
import { ConfirmModal, HandleVariantModal, InitialComponent, Loading } from '../../components';

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
  const { product, loading } = props
  const [editMode, setEditMode] = useState(false)
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
            <div style={{ textAlign: 'right' }}>
              {editMode ?
                <button
                  type="button"
                  className="btn btn-outline-primary mt-3 mr-3"
                  onClick={() => setEditMode(false)}
                >Cancel</button>
                :
                <>
                  <button
                    type="button"
                    className="btn btn-outline-primary mt-3 mr-3"
                    onClick={() => setEditMode(true)}
                  >Edit</button>
                  <button type="button" className="btn btn-success mt-3">Create</button>
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
      <HandleVariantModal />
    </>
  )
}


const DashboardProductDetail = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [detailSelectedItem, setDetailSelectedItem] = useState(null);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  useEffect(() => {
    setLoading1(true)
    const getProducts = async () => {
      const response = await Api.getProducts();
      setAllProducts(response?.results);
      setLoading1(false);
    };
    getProducts();
  }, []);


  useEffect(() => {
    const getProductDetail = async () => {
      setLoading2(true);
      const response = await Api.getProduct(selectedItem?.id);
      setDetailSelectedItem(response);
      setLoading2(false);
    };
    selectedItem?.id && getProductDetail();
  }, [selectedItem?.id])

  return (
    <>
      <div className='row'>
        <div className="col">
          <div className="e-panel card">
            <div className="card-body">
              <div className="title">
                <div className="row">
                  <div className="col">
                    <h6 className="mr-2 font-weight-bold">
                      <span>Products</span>
                      <small className="px-1 font-weight-bold">List of all items</small>
                    </h6>
                  </div>
                  <div className="col">
                    <SearchSectionDashboard />
                  </div>
                </div>
              </div>
              <div className="e-table mt-3">
                {loading1 ? <Loading />
                  :
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell style={{ width: '30%' }}>Image</TableCell>
                          <TableCell>Name</TableCell>
                          <TableCell>Price</TableCell>
                          <TableCell>Gender</TableCell>
                          <TableCell>Category</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {allProducts.map((item, index) => (
                          <TableRow
                            key={item?.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            onClick={() => setSelectedItem(item)}
                          >
                            <TableCell>
                              <img src={item.image} alt="" width={150} height={110} />
                            </TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.price}</TableCell>
                            <TableCell>{PRODUCT_GENDER[item.gender]}</TableCell>
                            <TableCell>{PRODUCT_CATEGORIES[item.categories]}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>}
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
