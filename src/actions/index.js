export const fetchItems = items => {
  return {
    type: "FETCH_ITEMS_FULLFILLED",
    payload: items,
  }
  // return function(dispatch) {
  //   fetch('http://localhost:3030')
  //   .then(response => {
  //     return response.json();
  //   })
  //   .then(data => {
  //     dispatch({type: "FETCH_ITEMS_FULLFILLED", payload: data})
  //   })
  //   .catch((err) => {
  //     dispatch({type: "FETCH_ITEMS_REJECTED", payload: err})
  //   })
  // }
}

export const fetchSelectedItem = item => {
  return {
    type: "FETCH_ITEM_FULLFILLED",
    payload: item,
  }
}

export const updateSelectedItem = item => {
  return {
    type: "UPDATE_ITEM_FULLFILLED",
    payload: item,
  }
}
