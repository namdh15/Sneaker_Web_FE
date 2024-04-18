const order = []

const orderReducer = (state = order, action) => {
  const order = action.payload
  console.log(order);
  switch (action.type) {
    case "CREATE_ORDER":
      return order
    default:
      return state
  }
}

export default orderReducer;