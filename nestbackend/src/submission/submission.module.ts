import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubmissionService } from './submission.service';
import { SubmissionController } from './submission.controller';
import { Submission, SubmissionSchema } from './submission.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Submission.name, schema: SubmissionSchema }])],
  providers: [SubmissionService],
  controllers: [SubmissionController],
})
export class SubmissionModule {}

