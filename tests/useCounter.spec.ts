import { renderHook, act } from '@testing-library/react';
import useCounter from '../src/hooks/features/homepage/useCounter';

describe('useCounter', () => {
  it('should start with count 0', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it('should increment by 1 (default val)', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  it('should update val and increment by new val', () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.setVal(5);
  });

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(5);
});

it('should decrement by val', () => {
  const { result } = renderHook(() => useCounter());

  act(() => {
    result.current.setVal(2);
  });

  act(() => {
    result.current.decrement();
  });

  expect(result.current.count).toBe(-2);
});


  it('should reset count to 0', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(3);
      result.current.increment();
      result.current.reset();
    });
    expect(result.current.count).toBe(0);
  });
});
