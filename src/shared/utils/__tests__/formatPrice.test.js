import { formatPrice } from '..';

describe('formatPrice', function() {
  // 小数
  it('a decimal input param', function() {
    const ipt = 12.24;
    expect(formatPrice(ipt)).toBe('¥ 12.24');
  });

  // 整型
  it('render within an integer input params', function() {
    const chars = 12;
    expect(formatPrice(chars)).toBe('¥ 12.00');
  });
});
