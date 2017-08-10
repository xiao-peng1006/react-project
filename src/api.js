const ItemsAPI = {
  items: [
    {id: '1', category: 'video', title: 'Short Trip in Honolulu', duration: '00:01:09', upload_date: new Date('January 13, 2016 11:13:00'), uploader: 'Xiao Peng', device: 'mobile', location: 'Honolulu, Hawaii, USA', description: 'Had a short trip to Honolulu, Hawaii.', url: '', hit: '2'},
    {id: '3', category: 'video', title: 'Short Trip in Milan', duration: '00:02:09', upload_date: new Date('October 13, 2014 11:13:00'), uploader: 'Xiao Peng', device: 'digital camera', location: 'Honolulu, Hawaii, USA', description: 'Had a short trip to Milan, Italy', url: '', hit: '3'},
    {id: '5', category: 'video', title: 'Short Trip in Paris', duration: '00:13:09', upload_date: new Date(), uploader: 'Xiao Peng', device: 'drone', location: 'Honolulu, Hawaii, USA', description: 'Had a short trip to Paris, France.', url: '', hit: '4'},
    {id: '2', category: 'photo', title: 'Short Trip in Honolulu', count: '59', upload_date: new Date('October 13, 2015 11:13:00'), uploader: 'Xiao Peng', device: 'drone', location: 'Honolulu, Hawaii, USA', description: 'Had a short trip to Honolulu, Hawaii.', url: '', hit: '1'},
    {id: '4', category: 'photo', title: 'Short Trip in Honolulu', count: '20', upload_date: new Date('January 13, 2017 11:13:00'), uploader: 'Xiao Peng', device: 'digital camera', location: 'Honolulu, Hawaii, USA', description: 'Had a short trip to Honolulu, Hawaii.', url: '', hit: '5'},
    {id: '6', category: 'photo', title: 'Short Trip in Honolulu', count: '11', upload_date: new Date('December 13, 2010 11:13:00'), uploader: 'Xiao Peng', device: 'mobile', location: 'Honolulu, Hawaii, USA', description: 'Had a short trip to Honolulu, Hawaii.', url: '', hit: '6'},
],
  all: function() { return this.items},
  // get: function(id) {
  //   const isPlayer = p => p.number === id
  //   return this.players.find(isPlayer)
  // }
}

export default ItemsAPI
