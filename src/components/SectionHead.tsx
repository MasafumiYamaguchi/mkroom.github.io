import ui from "../styles/ui.module.css";

type Props = { label: string; count?: number | string };

const SectionHead = ({ label, count }: Props) => (
  <div className={ui.secHead}>
    <span>{label}</span>
    {count !== undefined && <span className={ui.count}>/ {count}</span>}
  </div>
);

export default SectionHead;
