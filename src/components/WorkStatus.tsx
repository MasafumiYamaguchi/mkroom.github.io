import type { Work } from "../data/works";
import ui from "../styles/ui.module.css";

type Props = { status: Work["status"]; large?: boolean };

const WorkStatus = ({ status, large }: Props) => (
  <span
    className={`${ui.badge} ${ui[status.tone]}${large ? ` ${ui.large}` : ""}`}
  >
    {status.label}
  </span>
);

export default WorkStatus;
