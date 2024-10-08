import mongoose, { Schema } from "mongoose";

import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"; 
const videoSchema = new mongoose.Schema(
  {
    thumbnail: {
      type: String,     //cloudinary url
      required: true,
    },
    title: {           
      type: String,
      required: true,
    },
    videoFile: {
      type: String,      //cloudinary url
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    views: {
      type: Number,
      required: true,
    },
    isPublished: {
      
      type: Boolean,
      default: true,
    },
    owner:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"

        }
    
  },
  { timestamps: true }
);



export const Video = mongoose.model("Video", videoSchema);
// export const Video = mongoose.model("Video", videoSchema);