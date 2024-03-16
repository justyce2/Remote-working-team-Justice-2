import { RouteConfig } from "./routeTypes";

// Page Configs
import { errorRouteConfig } from "../pages/Error/error.config";
import { homeRouteConfig } from "../pages/Home/Home.config";
import { signupMainConfig } from "../pages/SignupMain/SignupMain.config";
import { BPOsignup2_6Config,  } from "../pages/BPOsignup2_6/BPOsignup2_6.config";
import { BPOsignup3_6Config  } from "../pages/BPOsignup3_6/BPOsignup3_6.config";
import { BPOsignup4_6Config } from "../pages/BPOsignup4_6/BPOsignup4_6.config"
import { BPOsignup5_6Config } from "../pages/BPOsignup5_6/BPOsignup5_6.config"
import { EditEmploymentConfig } from "../pages/EditEmployment/EditEmployment.config";
import { InviteJobConfig } from "../pages/InviteJob/InviteJob.config";
import { JobApplyConfig } from "../pages/JobApply/JobApply.config";
import { PostJobConfig } from "../pages/PostJob/PostJob.config";
import { PostOverviewConfig } from "../pages/ProfileOverview/PostOverview.config"
import { EditTitleConfig } from "../pages/EditTitle/EditTitle.config"
import { JobAppliedConfig } from "../pages/JobApplied/JobApplied.config"
import { CandidateSecurityConfig } from "../pages/CandidateSecurity/CandidateSecurity.config"

/** All Routes */
const routeConfigs: RouteConfig[] = [
  errorRouteConfig,
  homeRouteConfig,
  signupMainConfig,
  BPOsignup2_6Config, 
  BPOsignup3_6Config,
  BPOsignup4_6Config,
  BPOsignup5_6Config,
  EditEmploymentConfig,
  InviteJobConfig,
  JobApplyConfig,
  PostJobConfig,
  PostOverviewConfig,
  EditTitleConfig,
  JobAppliedConfig,
   CandidateSecurityConfig

];

export default routeConfigs;
