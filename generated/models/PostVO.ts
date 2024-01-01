/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserVO } from './UserVO';

export type PostVO = {
    id?: number;
    title?: string;
    content?: string;
    thumbNum?: number;
    favourNum?: number;
    userId?: number;
    createTime?: string;
    updateTime?: string;
    tagList?: Array<string>;
    user?: UserVO;
    hasThumb?: boolean;
    hasFavour?: boolean;
};
