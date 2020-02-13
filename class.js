var mongoose = require('mongoose');

var classSchema = new mongoose.Schema({
        classTitle:  {type: String, required: true},
   classAttributes:  {type: String},
     createdOnDate:  { type: Date, "default": Date.now}
  });

mongoose.model('myClass', classSchema);