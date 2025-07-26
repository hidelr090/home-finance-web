import '@components/LoadingOverlay/style.css';

import { useLoading } from '@hooks/useLoading';

export function LoadingOverlay() {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="loading-overlay">
      <div className="loading-spinner" />
    </div>
  );
}
