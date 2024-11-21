import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto, UserDto } from './dto/user.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import {
  CreateUserAPI,
  FindAllUsersAPI,
  FindUserByIdAPI,
  UpdateUserAPI,
  DeleteUserAPI,
} from 'src/utils/routes/user.route';
import { Permissions } from 'src/utils/decorators/permission.decorator';
import { Service } from 'src/utils/constants/service';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { PermissionsGuard } from 'src/common/guards/permissions.guard';

@ApiTags('users')
@ApiBearerAuth('JWT')
@Controller(Service.USER_API_PREFIX)
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post(CreateUserAPI.path)
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({
    status: 201,
    description: 'User successfully created',
    type: UserDto,
  })
  async createUser(@Body() data: CreateUserDto): Promise<UserDto> {
    return this.userService.createUser(data);
  }

  @Get(FindUserByIdAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...FindUserByIdAPI.permissions)
  @ApiResponse({ status: 200, description: 'User found by ID', type: UserDto })
  async findUserById(@Req() req): Promise<UserDto | null> {
    const { uid } = req.user;
    return this.userService.findUserById(uid);
  }

  @Get(FindAllUsersAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...FindAllUsersAPI.permissions)
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'All users', type: [UserDto] })
  async findAllUsers(): Promise<UserDto[]> {
    return this.userService.findAllUsers();
  }

  @Put(UpdateUserAPI.path)
  @UseGuards(AuthGuard, PermissionsGuard)
  @Permissions(...UpdateUserAPI.permissions)
  @ApiOperation({ summary: 'Update user by ID' })
  @ApiResponse({
    status: 200,
    description: 'User successfully updated',
    type: UserDto,
  })
  async updateUser(@Req() req, @Body() data: UserDto): Promise<UserDto> {
    const { uid } = req.user;
    return this.userService.updateUser(uid, data);
  }

  @Delete(DeleteUserAPI.path)
  @Put(UpdateUserAPI.path)
  // @UseGuards(AuthGuard, PermissionsGuard)
  // @Permissions(...DeleteUserAPI.permissions)
  @ApiOperation({ summary: 'Delete user by ID' })
  @ApiResponse({
    status: 200,
    description: 'User successfully deleted',
    type: UserDto,
  })
  async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<UserDto> {
    return this.userService.deleteUser(id);
  }
}
