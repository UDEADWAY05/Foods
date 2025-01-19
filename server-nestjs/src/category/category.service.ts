import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { returnCategoryObject } from './return-category.object';

@Injectable()
export class CategoryService {
    constructor(
        private prisma: PrismaService
    ) { }


}
