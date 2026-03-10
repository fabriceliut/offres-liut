interface IndexLabelProps {
  text: string;
  className?: string;
}

export default function IndexLabel({ text, className = '' }: IndexLabelProps) {
  return (
    <span className={`index-label ${className}`}>
      {text}
    </span>
  );
}
