import {combineReducers} from "redux";
import user from "@/store/redux/user";
import app from "@/store/redux/app";
import glob from "@/store/redux/glob";
import setting from "@/store/redux/setting";
import tagsView from "@/store/redux/tagsView";
import monitor from "./monitor";



// 合并reducer
export default combineReducers({user, glob, app, setting,tagsView,monitor});
