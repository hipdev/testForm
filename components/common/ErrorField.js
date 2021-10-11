const ErrorField = ({ error, customMessage }) => {
  return (
    <span className="mb-2 text-red-400">
      {error?.type === 'pattern' ? customMessage : 'Required Field'}
    </span>
  )
}

export default ErrorField
