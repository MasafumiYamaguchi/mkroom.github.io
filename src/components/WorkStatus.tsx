import type { Work } from "../data/works";

const WorkStatus = ({ status }: { status: Work["status"] }) => (
  <span className={`badge tone-${status.tone}`}>{status.label}</span>
);

export default WorkStatus;
