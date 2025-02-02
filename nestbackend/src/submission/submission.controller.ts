import { Controller, Post, Body } from '@nestjs/common';
import { SubmissionService } from './submission.service';
import { CreateSubmissionDto } from './create-submission.dto';
import { Submission } from './submission.schema';

@Controller('submissions')
export class SubmissionController {
  constructor(private readonly submissionService: SubmissionService) {}

  @Post()
  async create(@Body() createSubmissionDto: CreateSubmissionDto): Promise<Submission> {
    return this.submissionService.create(createSubmissionDto);
  }
}

