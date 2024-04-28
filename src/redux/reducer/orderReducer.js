const order = []

const orderReducer = (state = order, action) => {
  const order = action.payload
  switch (action.type) {
    case "CREATE_ORDER":
      return order
    default:
      return state
  }
}

export default orderReducer;