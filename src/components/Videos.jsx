import classes from "../styles/Videos.module.css";
import Video from "./Video";

export default function Videos() {
  const VideoJsx = [];
  for (let i = 0; i < 6; i++) {
    VideoJsx.push(<Video key={i} to="/quiz" />);
  }

  return <div className={classes.videos}>{VideoJsx}</div>;
}
