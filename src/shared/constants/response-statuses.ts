import { HttpStatus } from '@nestjs/common';

export const ResponseStatuses = {
  UNAUTHORIZED: {
    code: HttpStatus.UNAUTHORIZED,
    description: 'You are unauthorized',
  },
  OK: {
    code: HttpStatus.OK,
    description: 'Successfully',
  },
};
