// In your controller file
import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller('posts')
export class PostsControllerrr {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async findAll() {
    return this.prisma.post.findMany({
      where: { published: true },
      include: { author: true },
    });
  }
}
