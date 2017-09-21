export default function reducer(state = {
  filter: {
    filterOneIsHidden: true,
    filterTwoIsHidden: true,
    isPhotoOnly: false,
    isVideoOnly: false,
    isMobileOnly: false,
    isDigitalCameraOnly: false,
    isDroneOnly: false,
    searchValue: "",
  },
  fetching: false,
  fetched:false,
  error: null,
}, action) {

  switch (action.type) {
    case "FETCH_FILTER": {
      return {...state, fetching: true}
    }
    case "FETCH_FILTER_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_FILTER_FULLFILLED": {
      return {...state, fetching: false, fetched: true, filter: action.payload}
    }


  }
}
