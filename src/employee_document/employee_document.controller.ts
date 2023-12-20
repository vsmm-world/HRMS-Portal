import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  UseGuards
} from '@nestjs/common';
import { EmployeeDocumentService } from './employee_document.service';
import { CreateEmployeeDocumentDto } from './dto/create-employee_document.dto';
import { UpdateEmployeeDocumentDto } from './dto/update-employee_document.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('employee-document')
@ApiTags('employee-document')
export class EmployeeDocumentController {
  constructor(
    private readonly employeeDocumentService: EmployeeDocumentService,
  ) { }

  @Post(':emp_id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  create(
    @Param('emp_id') emp_id: string,
    @Body() createEmployeeDocumentDto: CreateEmployeeDocumentDto,
  ) {
    return this.employeeDocumentService.create(
      createEmployeeDocumentDto,
      emp_id,
    );
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  findAll() {
    return this.employeeDocumentService.findAll();
  }

  // @Get()
  // @ApiOperation({ summary: 'Get paginated employee document' })
  // findAll(@Query('page', ParseIntPipe) page: number = 1, @Query('perPage', ParseIntPipe) perPage: number = 10) {
  //   return this.employeeDocumentService.findAll(page, perPage);
  // }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  findOne(@Param('id') id: string) {
    return this.employeeDocumentService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  update(
    @Param('id') id: string,
    @Body() updateEmployeeDocumentDto: UpdateEmployeeDocumentDto,
  ) {
    return this.employeeDocumentService.update(id, updateEmployeeDocumentDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  softDelete(@Param('id') id: string) {
    const employeeDocument = this.employeeDocumentService.softDelete(id);

    if (!employeeDocument) {
      throw new NotFoundException(`Employee Document with ID ${id} not found`);
    }
    return employeeDocument;
  }
}
