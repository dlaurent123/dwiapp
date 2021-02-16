import Bugsnag from "@bugsnag/expo";
import BugSnag from "@bugsnag/expo";

const start = () => BugSnag.start();

const log = (error) => BugSnag.notify(error);

export default { start, log };
