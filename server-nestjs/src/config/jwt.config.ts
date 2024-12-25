import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

export const getJwtConfig = async (
    configureService: ConfigService
): Promise<JwtModuleOptions> => ({
    secret: configureService.get('JWT_SECRET'),
})