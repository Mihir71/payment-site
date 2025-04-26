import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';

export type OrderDocument = Order & Document;


@Schema({ _id: false }) 
class StudentInfo {
  @Prop({ required: true }) name: string;
  @Prop({ required: true }) id: string;
  @Prop({ required: true }) email: string;
}
const StudentInfoSchema = SchemaFactory.createForClass(StudentInfo);

@Schema({ timestamps: true })
export class Order {
  @Prop({ 
    type: MongooseSchema.Types.ObjectId, 
    ref: 'School', 
    required: true 
  })
  school_id: Types.ObjectId | string;

  @Prop({ 
    type: MongooseSchema.Types.ObjectId, 
    ref: 'Trustee', 
    required: true 
  })
  trustee_id: Types.ObjectId | string;


  @Prop({ 
    type: StudentInfoSchema, 
    required: true 
  })
  student_info: StudentInfo;

  @Prop({ required: true })
  gateway_name: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
