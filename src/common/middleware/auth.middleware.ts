import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';

// Extend the Request interface to include user and permissions properties
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      user?: any;
      permissions?: string[]; // For permissions, if needed
    }
  }
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

  use(req: Request, res: Response, next: NextFunction) {
    // Allow requests to /auth/login to pass through without authentication
    if (req.path === '/auth/login') {
      return next();
    }

    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException('Authorization header is missing');
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('Token is missing');
    }

    try {
      // Decode the token to extract user information
      const decoded: any = this.jwtService.verify(token, {
        secret: process.env.JWT_SECRET,
      });
      console.log(decoded);

      // Attach the user information and uid to the request object
      req.user = {
        uid: decoded.uid, // Assuming the token contains `uid`
        ...decoded, // Other properties from the token, if needed
      };

      next();
    } catch (error) {
      console.error(error); // Better to use a logger
      throw new UnauthorizedException('Invalid token');
    }
  }
}
