import { Link, useParams } from 'react-router-dom';
import './page.scss';
import React, { useEffect, useState } from 'react';
import { TextField, Button, Box, Typography, Rating } from '@mui/material';
import * as Api from "../services/product"
// assets
import {
  IconTag
} from '@tabler/icons-react';
import { PRODUCT_SIZE } from '../constants/products.constant';

import { format } from 'date-fns';

const convertDateFormat = (dateString) => {
  // Tạo một đối tượng Date từ chuỗi ngày
  const date = new Date(dateString);

  // Sử dụng date-fns để định dạng lại ngày
  const formattedDate = format(date, 'yyyy-MM-dd HH:mm');

  return formattedDate;
};

const VoteRow = ({ vote }) => {
  const renderRatingStars = (rating) => {
    const stars = [];
    const maxStars = 5;
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating - filledStars >= 0.5;

    for (let i = 0; i < maxStars; i++) {
      if (i < filledStars) {
        stars.push(<span key={i} style={{ color: "#FF0000" }}>&#9733;</span>); // Màu đỏ cho sao đầy
      } else if (hasHalfStar && i === filledStars) {
        stars.push(<span key={i} style={{ color: "#FF0000" }}>&#9734;</span>); // Màu đỏ cho nửa sao
      } else {
        stars.push(<span key={i} style={{ color: "#000000" }}>&#9734;</span>); // Màu đen cho sao trống
      }
    }
    return stars;
  };

  const renderUserAvatar = (userAvatar) => {
    if (userAvatar) {
      return <img src={userAvatar}  width="100"/>;
    } else {
      return <img src="./assets/user.png" width="100"/>;
    }
  };

  return (
    <>
      <div className="col-2">
        <div className="comment-avatar">
          {renderUserAvatar(vote.user.avatar)}
        </div>
      </div>
      <div className="col-9">
        <div className="comment-content">
          <div className="comment-rating">{vote.user.fullname}</div>
          <div className="comment-rating">{renderRatingStars(vote.vote)}</div>
          <div className="comment-date">{convertDateFormat(vote.created_at)}</div>
          <div className="comment-text">{vote.comment}</div>
        </div>
      </div>
    </>
  );
};

const VoteRowCreate = ({ onSubmit, personal_vote }) => {
  console.log(`personal_vote:`)
  console.log(personal_vote)
  const { id } = useParams();
  const [comment, setComment] = useState('');
  const [voting, setVoting] = useState(4);  

  const handleRatingChange = (event, newValue) => {
    setVoting(newValue);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      product: parseInt(id),
      vote: voting,
      comment: comment
    }, personal_vote,);
    setComment(comment);
    setVoting(voting);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
      <Typography variant="h6">Viết bình luận mới:</Typography>
      <Rating
        name="simple-controlled"
        value={voting}
        onChange={handleRatingChange}
        sx={{ mb: 4 }}
      />
      <TextField
        fullWidth
        label="Bình luận"
        placeholder ={personal_vote ? personal_vote.comment : "Bình luận"}
        multiline
        rows={4}
        value={comment}
        onChange={handleCommentChange}
        variant="outlined"  
        InputLabelProps={{
          shrink: true,
        }}       
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained" color="primary">
      {personal_vote ? "Chỉnh sửa bình luận" : "Gửi Bình Luận"}
      </Button>
    </Box>
  );
};

const DetailProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [voting, setVoting] = useState([]);
  const [personal_vote, setpVoting] = useState([]);
  // const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const getProducts = async () => {
    setLoading(true);
    // setLoading2(true);
    const response = await Api.getProduct(id);
    setProduct(response);
    setLoading(false);
    //     const response2 = await fetch(
    //       `https://fakestoreapi.com/products/category/${data.category}`
    //     );
    //     const data2 = await response2.json();
    //     setSimilarProducts(data2);
    //     setLoading2(false);
  };

  const getVotings = async (filter_by_user = false) => {
    setLoading2(true);
    const response1 = await Api.getVoting(id, filter_by_user);
    setVoting(response1);
    const response2 = await Api.getVoting(id, filter_by_user=true);
    setpVoting(response2?.results[0]);
    setLoading2(false);
  }

  useEffect(() => {
    getProducts();
    getVotings();
  }, [id]);

  const onSubmitVote = async  (formData, personal_vote) => {
    if (personal_vote){
      const update_data = {
        "voting_id": personal_vote.id,
        "vote": formData.vote,
        "comment": formData.comment,
      }
      await Api.updateVote(update_data);
      getVotings();
    }
    else {
      await Api.submitVote(formData);
      getVotings();
    }
    
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="single_product" style={{ width: '80%' }}>
        <div
          className="container-fluid"
          style={{ backgroundColor: "#fff", padding: "3em 2em" }}
        >
          <div className="row">
            <div className="col-lg-2 order-lg-1 order-2">
              <ul className="image_list">
                <li data-image="">
                  <img src="https://images.unsplash.com/photo-1603787081207-362bcef7c144?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                </li>
                <li data-image="">
                  <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                </li>
                <li data-image=".imgur.com/HkEiXfn.jpg">
                  <img src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHNuZWFrZXJ8ZW58MHx8MHx8fDA%3Dg" alt="" />
                </li>
              </ul>
            </div>
            <div className="col-lg-4 order-lg-2 order-1">
              <div className="image_selected d-flex">
                <img style={{
                  flexShrink: 0,
                  minWidth: '100%',
                  minHeight: '100%',
                }} src={product?.image} alt="" />
              </div>
            </div>
            <div className="col-lg-6 order-3">
              <div className="product_description">
                <nav>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Products</a>
                    </li>
                    <li className="breadcrumb-item active">Accessories</li>
                  </ol>
                </nav>
                <div className="product_name">
                  {product?.name}
                </div>
                <div className="product-rating">
                  <span className="badge badge-success">
                    <i className="fa fa-star" /> 4.5 Star
                  </span>
                  <span className="rating-review ml-3">35 Ratings &amp; 45 Reviews</span>
                </div>
                <div>
                  <span className="product_price">VND {Number(product.price).toLocaleString('en')}</span>
                  <strike className="product_discount">
                    <span style={{ color: "black" }}>
                      VND 2,000<span> </span>
                    </span>
                  </strike>
                </div>
                <div>
                  <span className="product_saved">You Saved:</span>
                  <span style={{ color: "black" }}>
                    VND 2,000<span> </span>
                  </span>
                </div>
                <hr className="singleline" />
                <div>

                  <span className="product_info">
                    {product.description}
                  </span>
                </div>
                <div>
                  <div className="row">
                    <div className="col-md-5">
                      <div className="br-dashed">
                        <div className="row">
                          <div className="col-md-3 col-xs-3">
                            <IconTag
                              size={40}
                              strokeWidth={1}
                              color={'black'}
                            />
                          </div>
                          <div className="col-md-9 col-xs-9">
                            <div className="pr-info">

                              <span className="break-all">
                                Get 5% instant discount + 10X rewards @ RENTOPC
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7"> </div>
                  </div>
                  <div className="row" style={{ marginTop: 15 }}>
                    <div className="col-xs-6 ml-3 mb-3">
                      <span className="product_options">Size Options</span>
                      <br />
                      {
                        PRODUCT_SIZE.map((size, index) => (
                          <button key={index} className="btn btn-primary btn-sm mr-2">{size}</button>
                        ))
                      }
                    </div>
                    <div className="col-xs-6  ml-3 mb-3">
                      <span className="product_options">Color Options</span>
                      <br />
                      <button className="btn btn-primary btn-sm  mr-2">Green</button>
                      <button className="btn btn-primary btn-sm  mr-2">Black</button>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-6" style={{ marginLeft: 13 }}>
                    <div className="product_quantity">
                      <span>Quantity: </span>
                      <input
                        id="quantity_input"
                        type="number"
                        pattern="[0-9]*"
                        defaultValue={1}
                      />
                      <div className="quantity_buttons">
                        <div
                          id="quantity_inc_button"
                          className="quantity_inc quantity_control"
                        >
                          <i className="fas fa-chevron-up" />
                        </div>
                        <div
                          id="quantity_dec_button"
                          className="quantity_dec quantity_control"
                        >
                          <i className="fas fa-chevron-down" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-6">
                    <button
                      className="btn btn-dark"
                    // onClick={() => addProduct(product)}
                    >
                      Add to Cart
                    </button>
                    <Link to="/cart" className="btn btn-dark mx-2">
                      Go to Cart
                    </Link>
                    <div className=" btn btn-outline-dark mx-1">
                      <i className="fas fa-heart" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-underline">
            <div className="col-md-6">

              <span className=" deal-text">Product Ratings</span>
            </div>
            <div className="col-md-6">
              <a href="#" data-abc="true">
                <span className="ml-auto view-all" />
              </a>
            </div>
          </div>
          <div className="row">
            {/* <div className="col-md-12"> */}
              <div className="row mb-4" style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px', marginBottom: '10px' }}>
                <VoteRowCreate onSubmit={onSubmitVote} personal_vote={personal_vote}/>
              </div>
              {voting?.results?.map((vote, index) => {
                return (
                  <div id={vote.id} key={index} className="row mb-4" style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px', marginBottom: '10px' }}>
                    <VoteRow vote={vote} />
                  </div>
                )
              })} 
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
export default DetailProduct