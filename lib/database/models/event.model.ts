import { Document, Schema, model, models } from "mongoose";

export interface IEvent extends Document {
  _id: string;
  title: string;
  description?: string;
  location?: string;
  createdAt: Date;
  imageUrl?: string;
  startDateTime: Date;
  endDateTime: Date;
  cateringRequired: boolean;
  foodtype: string;
  contact?: boolean;
  contactNumber?: string;
  //   url?: string;
  //   category: { _id: string; name: string };
  organizer: { _id: string; firstName: string; lastName: string };
}

const EventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  createdAt: { type: Date, default: Date.now },
  imageUrl: {
    type: String,
    default: "/assets/images/event_backgroundimage.png",
  },
  startDateTime: { type: Date, default: Date.now },
  endDateTime: { type: Date, default: Date.now },
  cateringRequired: { type: Boolean, default: false },
  foodtype: { type: String },
  contact: { type: Boolean, default: false },
  contactNumber: { type: String },
  //   url: { type: String },
  //   category: { type: Schema.Types.ObjectId, ref: "Category" },
  organizer: { type: Schema.Types.ObjectId, ref: "User" },
});

const Event = models.Event || model("Event", EventSchema);

export default Event;
