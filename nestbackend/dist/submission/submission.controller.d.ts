import { SubmissionService } from './submission.service';
import { CreateSubmissionDto } from './create-submission.dto';
import { Submission } from './submission.schema';
export declare class SubmissionController {
    private readonly submissionService;
    constructor(submissionService: SubmissionService);
    create(createSubmissionDto: CreateSubmissionDto): Promise<Submission>;
}
