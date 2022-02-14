import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpCode,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { SignupUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthsService } from 'src/auths/auth.service';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
  ApiOkResponse,
} from '@nestjs/swagger';
import {
  BaseSuccessResponse,
  ResultSuccessResponse,
} from 'src/commons/dto/response-common.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';

@Controller('users')
@ApiTags('User API')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authsService: AuthsService,
  ) {}
  @HttpCode(200)
  @Post('sign-up')
  @ApiOperation({ summary: '회원가입 API', description: 'true false 반환' })
  @ApiBody({ type: SignupUserDto })
  @ApiOkResponse({ description: '회원가입 성공', type: BaseSuccessResponse })
  create(@Body() createUserDto: SignupUserDto) {
    return this.usersService.createUser(createUserDto);
  }
  @HttpCode(200)
  @Post('sign-in')
  @ApiOperation({
    summary: '유저 로그인',
    description: '유저가 로그인하는 api입니다.',
  })
  @ApiBody({ type: LoginUserDto })
  @ApiOkResponse({ description: '로그인 성공', type: BaseSuccessResponse })
  //@UseGuards(AuthGuard('local'))
  async logIn(
    @Body() loginUserDto: LoginUserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const cookie = await this.usersService.login(loginUserDto);
    res.cookie('JWT', cookie);
    return new BaseSuccessResponse();
  }
  // findAll() {
  //   return this.usersService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }

  // // @Patch(':id')
  // // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  // //   return this.usersService.update(+id, updateUserDto);
  // // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
