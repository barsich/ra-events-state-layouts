export default function IconSwitch(props) {
  const {icon, onSwitch} = props;
  return <span className="material-icons icon-switch" onClick={onSwitch}>{icon}</span>;
}
