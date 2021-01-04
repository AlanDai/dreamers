const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DreamSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  username: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  tags: [
    { type: String }
  ],
  type: {
    type: String,
    required: true
  },
  likes: [{
    _id: false,
    id: {
    type: Schema.Types.ObjectId,
    ref: 'likes'
    }, 
    username: {
      type: String, 
      required: true, 
      unique: true
    }
  }],
<<<<<<< HEAD

=======
  comments: {
    type: Array,
    default: []
  },
>>>>>>> f0a4c3602c3051bfad6f68bacb23796b14cb7ad7
  date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
})

module.exports = Dream = mongoose.model('Dream', DreamSchema);