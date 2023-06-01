import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'
import {Task} from '../schemas/task.schemas'
import { Model} from 'mongoose'

@Injectable()
export class TasksService {
    constructor(@InjectModel(Task.name) private taskModel:Model<Task> ){}

    finAll() {
        this.taskModel.find();
    }

    async create(createTask: any){
        const newTask = new this.taskModel(createTask);
        return newTask.save();
    }

    async findOne(id: string) {
        return this.taskModel.findById(id);
    }

    async delete (id: string) {
        return this.taskModel.findByIdAndDelete(id);
    }

    async update(id:string, task: any){
        return this.taskModel.findByIdAndUpdate(id, task)
    }
}
