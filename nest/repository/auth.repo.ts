import { PrismaService } from 'src/prisma.service';

export class AuthRepo {
  constructor(private readonly prisma: PrismaService) {}
  private readonly user = this.prisma.user;

  async getUserInfo() {
    return await this.user.findMany();
  }
}
