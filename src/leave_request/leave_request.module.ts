import { Module } from '@nestjs/common';
import { LeaveRequestService } from './leave_request.service';
import { LeaveRequestController } from './leave_request.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [LeaveRequestController],
  providers: [LeaveRequestService],
  exports: [LeaveRequestService],
})
export class LeaveRequestModule { }
