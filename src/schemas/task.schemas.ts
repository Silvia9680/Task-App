import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose'

@Schema({
    timestamps :true
})
export class Task {
    @Prop({
        unique:true, 
        required: true,
        trim : true, //Elimina los espacios blancos al principio y al final
    })
    title: string;
    @Prop({
        trim: true
    })
    description:string;
    @Prop({
        default: false
    })
    done: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task)