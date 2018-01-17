import React from "react";
import CMS from "netlify-cms";
import { BlockSelect } from "./Blocks";

CMS.registerWidget("block", BlockSelect, CMS.getWidget('object').preview);
