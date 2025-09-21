import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { Button } from '../ui/button';
import { describe, it, expect } from 'vitest';
describe('Button a11y', () => {
  it('has no violations', async () => {
    const { container } = render(<Button>Click me</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
