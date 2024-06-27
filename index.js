// In your controller file
import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async findAll() {
    return this.prisma.posttt.findMany({
      where: { published: true },
      include: { author: true },
    });
  }
}
