interface ValidationErrorProps {
  error: string | undefined;
}

const ValidationError = ({ error }: ValidationErrorProps) => {
  if (!error) return;
  return <p className='text-red-300'>{error}</p>;
};

export default ValidationError;
