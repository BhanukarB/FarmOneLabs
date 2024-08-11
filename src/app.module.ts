import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './modules/users/users.module';
import { EquipmentModule } from './modules/equipments/equipment.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { RbacModule } from './modules/rbac/rbac.module';
import { LabModule } from './modules/labs/lab.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // makes the config available globally
    }),
    AuthModule,
    UserModule,
    RbacModule,
    LabModule,
    EquipmentModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'default_secret', // Adjust according to your config
      signOptions: { expiresIn: '60m' }, // Adjust according to your needs
    }),
  ],
})
export class AppModule {}
