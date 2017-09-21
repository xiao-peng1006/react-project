const ItemsAPI = {
  items: [
          {id: '1',
           category: 'video',
           title: 'Short Trip in Honolulu',
           duration: '00:01:09',
           upload_date: new Date('January 13, 2016 11:13:00'),
           uploader: 'Xiao Peng',
           device: 'mobile',
           location: 'Honolulu, Hawaii, USA',
           coordinates: {
             lat: 21.3069,
             lng: -157.8583
           },
           description: 'Had a short trip to Honolulu, Hawaii.',
           url: 'https://coverr.co/s3/mp4/Golfing.mp4',
           hit: 2},

           {id: '3',
           category: 'video',
           title: 'Short Trip in Milan',
           duration: '00:02:09',
           upload_date: new Date('October 13, 2014 11:13:00'),
           uploader: 'Xiao Peng',
           device: 'digital camera',
           location: 'Honolulu, Hawaii, USA',
           coordinates: {
             lat: 45.4642,
             lng: 9.1900
           },
           description: 'Had a short trip to Milan, Italy',
           url: 'https://coverr.co/s3/mp4/Comic_Book.mp4',
           hit: 3},

           {id: '5',
           category: 'video',
           title: 'Short Trip in Paris',
           duration: '00:13:09',
           upload_date: new Date(),
           uploader: 'Xiao Peng',
           device: 'drone',
           location: 'Honolulu, Hawaii, USA',
           coordinates: {
             lat: 48.8566,
             lng: 2.3522
           },
           description: 'Had a short trip to Paris, France.',
           url: 'https://coverr.co/s3/mp4/Crocodile.mp4',
           hit: '4'},

           {id: '2',
           category: 'photo',
           title: 'Short Trip in Honolulu',
           count: '59',
           upload_date: new Date('October 13, 2015 11:13:00'),
           uploader: 'Xiao Peng',
           device: 'drone',
           location: 'Honolulu, Hawaii, USA',
           coordinates: {
             lat: 21.3069,
             lng: -157.8583
           },
           description: 'Had a short trip to Honolulu, Hawaii.',
           url: 'https://coverr.co/s3/mp4/Latino_Clock.mp4',
           hit: 1},

           {id: '4',
           category: 'photo',
           title: 'Short Trip in Honolulu',
           count: '20',
           upload_date: new Date('January 13, 2017 11:13:00'),
           uploader: 'Xiao Peng',
           device: 'digital camera',
           location: 'Honolulu, Hawaii, USA',
           coordinates: {
             lat: 21.3069,
             lng: -157.8583
           },
           description: 'Had a short trip to Honolulu, Hawaii.',
           url: 'https://coverr.co/s3/mp4/Orchestra.mp4',
           hit: 5},

           {id: '6',
           category: 'photo',
           title: 'Short Trip in Honolulu',
           count: '11',
           upload_date: new Date('December 13, 2010 11:13:00'),
           uploader: 'Xiao Peng',
           device: 'mobile',
           location: 'Honolulu, Hawaii, USA',
           coordinates: {
             lat: 21.3069,
             lng: -157.8583
           },
           description: 'Had a short trip to Honolulu, Hawaii.',
           url: 'https://coverr.co/s3/mp4/New-York-Sky.mp4',
           hit: 6},

           {id: '7',
           category: 'photo',
           title: 'Short Trip in Honolulu',
           count: '11',
           upload_date: new Date('December 13, 2010 11:13:00'),
           uploader: 'Xiao Peng',
           device: 'mobile',
           location: 'Honolulu, Hawaii, USA',
           coordinates: {
             lat: 21.3069,
             lng: -157.8583
           },
           description: 'Had a short trip to Honolulu, Hawaii.',
           url: 'https://coverr.co/s3/mp4/Forest-Lullaby.mp4',
           hit: 6},
  ],
  SelectedItem: {},

  all: function() {
    return this.items
  },

  filter: function(items, e) {
    switch(e) {
      case "00":
        return items
      case "01":
        var mobile = items.filter(function(item) {
          return item.device === "mobile"
        })
        return mobile
      case "02":
        var digitalCamera = items.filter(function(item) {
          return item.device === "digital camera"
        })
        return digitalCamera
      case "03":
        var drone = items.filter(function(item) {
          return item.device === "drone"
        })
        return drone

      case "10":
        var photo = items.filter(function(item) {
          return item.category === "photo"
        })
        return photo
      case "11":
        var mobilePhoto = items.filter(function(item) {
          return item.device === "mobile" && item.category === "photo"
        })
        return mobilePhoto
      case "12":
        var digitalCameraPhoto = items.filter(function(item) {
          return item.device === "digital camera" && item.category === "photo"
        })
        return digitalCameraPhoto
      case "13":
        var dronePhoto = items.filter(function(item) {
          return item.device === "drone" && item.category === "photo"
        })
        return dronePhoto

      case "20":
        var video = items.filter(function(item) {
          return item.category === "video"
        })
        return video
      case "21":
        var mobileVideo = items.filter(function(item) {
          return item.device === "mobile" && item.category === "video"
        })
        return mobileVideo
      case "22":
        var digitalCameraVideo = items.filter(function(item) {
          return item.device === "digital camera" && item.category === "video"
        })
        return digitalCameraVideo
      case "23":
        var droneVideo = items.filter(function(item) {
          return item.device === "drone" && item.category === "video"
        })
        return droneVideo
      default:
        return items
    }
  },

  count: function(items) {
    return items.length
  },



  itemHit: function(item) {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i] === item) {
        this.items[i].hit += 1;
        console.log(this.items[i].hit)
      }
    }
  },

  updateSelectedItem: function(item) {
    this.SelectedItem = item;
    return null
  },

  getSelectedItem: function() {
    return this.SelectedItem
  }

  // sortedByHits: function(count) {
  //   return (this.items.sort(function(a, b){
  //     return parseFloat(b.hit) - parseFloat(a.hit);
  //   })).slice(0,count)
  // },
  //
  // sortedByDate: function() {
  //   if (arguments.length === 1) {
  //     return (this.items.sort(function(a, b){
  //       return new Date(b.upload_date) - new Date(a.upload_date);
  //     })).slice(0,arguments[0])
  //   } else if (arguments.length === 2) {
  //     return (this.items.sort(function(a, b){
  //       return new Date(b.upload_date) - new Date(a.upload_date);
  //     })).slice(arguments[0], arguments[1])
  //   }
  // },
  //
  // photoSortedByHits: function(count) {
  //   var photos = this.items.filter(function(item) {
  //     return item.category === "photo"
  //   })
  //   return (photos.sort(function(a, b){
  //     return parseFloat(b.hit) - parseFloat(a.hit);
  //   })).slice(0,count)
  // },
  //
  // photoSortedByDate: function() {
  //   var photos = this.items.filter(function(item) {
  //     return item.category === "photo"
  //   })
  //   if (arguments.length === 1) {
  //     return (photos.sort(function(a, b){
  //       return new Date(b.upload_date) - new Date(a.upload_date);
  //     })).slice(0,arguments[0])
  //   } else if (arguments.length === 2) {
  //     return (photos.sort(function(a, b){
  //       return new Date(b.upload_date) - new Date(a.upload_date);
  //     })).slice(arguments[0], arguments[1])
  //   }
  // },
  //
  // videoSortedByHits: function(count) {
  //   var video = this.items.filter(function(item) {
  //     return item.category === "video"
  //   })
  //   return (video.sort(function(a, b){
  //     return parseFloat(b.hit) - parseFloat(a.hit);
  //   })).slice(0,count)
  // },
  //
  // pvideoSortedByDate: function() {
  //   var video = this.items.filter(function(item) {
  //     return item.category === "video"
  //   })
  //   if (arguments.length === 1) {
  //     return (video.sort(function(a, b){
  //       return new Date(b.upload_date) - new Date(a.upload_date);
  //     })).slice(0,arguments[0])
  //   } else if (arguments.length === 2) {
  //     return (video.sort(function(a, b){
  //       return new Date(b.upload_date) - new Date(a.upload_date);
  //     })).slice(arguments[0], arguments[1])
  //   }
  // },
}

export default ItemsAPI
