import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WebhookLogDocument = WebhookLog & Document;

@Schema({ timestamps: true })
export class WebhookLog {
  @Prop({ required: true })
  collect_request_id: string;

  @Prop({ required: true })
  status: string;

  @Prop()
  payment_mode: string;

  @Prop()
  payment_details: string;

  @Prop()
  payment_message: string;

  @Prop()
  payment_time: Date;

  @Prop()
  error_message: string;

  @Prop()
  gateway: string;

  @Prop()
  bank_reference: string;

  @Prop({ required: true })
  order_amount: number;

  @Prop({ required: true })
  transaction_amount: number;

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;
}

export const WebhookLogSchema = SchemaFactory.createForClass(WebhookLog);
