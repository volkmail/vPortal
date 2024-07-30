import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('with only first param', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar_test')).toBeInTheDocument();
  });

  test('test toggle', () => {
    componentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar__toggle-btn_test');
    expect(screen.getByTestId('sidebar_test')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar_test')).toHaveClass('isCollapsed');
  });
});
