import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
  @Get('factorial/:number')
  calculateFactorial(@Param('number') number: number): { factorial: number } {
    const factorial = this.getFactorial(Number(number));
    return { factorial };
  }

  private getFactorial(number: number): number {
    if (number < 0) {
      throw new Error('Factorial is not defined for negative numbers');
    }
    if (number === 0 || number === 1) return 1;

    let result = 1;
    for (let i = 2; i <= number; i++) {
      result *= i;
    }
    return result;
  }
}
