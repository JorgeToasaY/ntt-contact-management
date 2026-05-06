import { EmailMaskingPipePipe } from './email-masking-pipe-pipe';

describe('EmailMaskingPipePipe', () => {
  it('create an instance', () => {
    const pipe = new EmailMaskingPipePipe();
    expect(pipe).toBeTruthy();
  });
});
