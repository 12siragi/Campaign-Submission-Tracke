import { Model } from 'mongoose';
import { Submission, SubmissionDocument } from './submission.schema';
import { CreateSubmissionDto } from './create-submission.dto';
export declare class SubmissionService {
    private submissionModel;
    constructor(submissionModel: Model<SubmissionDocument>);
    create(createSubmissionDto: CreateSubmissionDto): Promise<Submission>;
    findAll(): Promise<Submission[]>;
    findOne(id: string): Promise<Submission | null>;
}
