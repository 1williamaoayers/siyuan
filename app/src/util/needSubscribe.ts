import {showMessage} from "../dialog/message";
import {getCloudURL} from "../config/util/about";

export const needSubscribe = (tip = window.siyuan.languages._kernel[29]) => {
    // [UNLOCKED] 解锁订阅检查
    return false;
};

export const isPaidUser = () => {
    // [UNLOCKED] 解锁付费用户检查
    return true;
};
