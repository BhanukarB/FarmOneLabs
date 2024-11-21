import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
import { RbacService } from 'src/modules/rbac/rbac.service';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly rbacService: RbacService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('Authorization header is missing');
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('Token is missing');
    }

    try {
      const decoded: any = this.jwtService.verify(token, {
        secret: process.env.JWT_SECRET,
      });

      // Attach user information to the request object
      request.user = {
        uid: decoded.uid,
        ...decoded,
      };
      // Fetch and attach user permissions
      const userPermissions = await this.rbacService.getUserPermissions(
        decoded.uid,
      );
      request.permissions = userPermissions;

      return true;
    } catch (error) {
      console.error(error); // Better to use a logger
      throw new UnauthorizedException('Invalid token');
    }
  }
}
