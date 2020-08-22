
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dateFormat = 'yyyy-MM-dd';
//default: Date.now.toString(dateFormat)

var RequestSchema = new Schema({
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Requests', RequestSchema);