import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrganizationService {
  constructor(private prisma: PrismaService) {}

  async create(createOrganizationDto: CreateOrganizationDto) {
    const organization = await this.prisma.organization.create({
      data: {
        org_name: createOrganizationDto.org_name,
        role: createOrganizationDto.role,
        // User: {
        //   create: {
        //     firstName: createOrganizationDto.firstName,
        //     lastName: createOrganizationDto.lastName,
        //   },
        // },
        email: createOrganizationDto.email,
        phone: createOrganizationDto.phone,
        website: createOrganizationDto.website,
        address: {
          create: {
            address: createOrganizationDto.address,
            city: createOrganizationDto.city,
            state: createOrganizationDto.state,
            zipcode: createOrganizationDto.zipcode,
          },
        },
      },
      include: {
        address: true,
        // User: true,
      },
    });
    return organization;
  }

  async findAll() {
    const organizations = await this.prisma.organization.findMany({
      include: {
        address: true,
        // User: true,
      },
    });
    return organizations;
  }

  // async findAll(page : number, perPage : number) {
  //     const skip = (page - 1) * perPage;
  //     const take = perPage;
  //     const organizations = await this.prisma.organization.findMany({
  //         where: {
  //             isDeleted: false
  //         },
  //         include: {
  //             address: true
  //         },
  //         skip,
  //         take
  //     });
  //     return organizations;
  // }

  async findOne(id: string) {
    const organizations = await this.prisma.organization.findFirst({
      where: {
        id,
        isDeleted: false,
      },
      include: {
        address: true,
      },
    });
    return organizations;
  }

  async update(id: string, updateOrganizationDto: UpdateOrganizationDto) {
    const organization = await this.prisma.organization.update({
      where: {
        id,
      },
      include: {
        address: true,
      },
      data: {
        org_name: updateOrganizationDto.org_name,
        role: updateOrganizationDto.role,
        // User: {
        //   create: {
        //     firstName: updateOrganizationDto.firstName,
        //     lastName: updateOrganizationDto.lastName,
        //   },
        // },
        email: updateOrganizationDto.email,
        phone: updateOrganizationDto.phone,
        website: updateOrganizationDto.website,
        address: {
          create: {
            address: updateOrganizationDto.address,
            city: updateOrganizationDto.city,
            state: updateOrganizationDto.state,
            zipcode: updateOrganizationDto.zipcode,
          },
        },
      },
    });
    return organization;
  }

  async softDelete(id: string) {
    const deleteOrganization = await this.prisma.organization.update({
      where: {
        id,
      },
      include: {
        address: true,
      },
      data: {
        isDeleted: true,
      },
    });

    if (!deleteOrganization) {
      throw new NotFoundException(`Organization with ID ${id} not found`);
    }
    return deleteOrganization;
  }
}
