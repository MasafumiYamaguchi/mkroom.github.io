type Props = { label: string; count?: number | string };

const SectionHead = ({ label, count }: Props) => (
  <div className="sec-head">
    <span>{label}</span>
    {count !== undefined && <span className="dim">/ {count}</span>}
  </div>
);

export default SectionHead;
