// common/components/Alert.tsx
interface AlertProps {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  onClose?: () => void;
}

const alertStyles = {
  success: 'alert-success',
  error: 'alert-error',
  warning: 'alert-warning',
  info: 'alert-info'
};

const icons = {
  success: '✓',
  error: '✗',
  warning: '⚠',
  info: 'ℹ'
};

export default function Alert({ type, message, onClose }: AlertProps) {
  return (
    <div className={`alert ${alertStyles[type]} shadow-lg`}>
      <div>
        <span>{icons[type]}</span>
        <span>{message}</span>
      </div>
      {onClose && (
        <button onClick={onClose} className="btn btn-sm btn-ghost">
          ✕
        </button>
      )}
    </div>
  );
}