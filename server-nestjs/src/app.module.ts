import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';

@Module({
    imports: [ConfigModule.forRoot(), AuthModule, CategoryModule, ProductModule, UserModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }


//24:34 / 4:13:27