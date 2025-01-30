import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
  @Get('prime/:number')
  checkPrime(@Param('number') number: number): { isPrime: boolean } {
    const isPrime = this.isPrime(Number(number));
    return { isPrime };
  }

  private isPrime(number: number): boolean {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;

    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) return false;
    }

    return true;
  }
}
