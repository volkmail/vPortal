import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslations } from 'shared/lib/tests/renderWithTranslations/renderWithTranslations';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('with only first param', () => {
    renderWithTranslations(<Sidebar />);
    expect(screen.getByTestId('sidebar_test')).toBeInTheDocument();
  });

  test('test toggle', () => {
    renderWithTranslations(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar__toggle-btn_test');
    expect(screen.getByTestId('sidebar_test')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar_test')).toHaveClass('collapsed');
  });
});
