/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { QuestionJudgeCase } from './QuestionJudgeCase';
import type { QuestionJudgeConfig } from './QuestionJudgeConfig';

export type QuestionUpdateRequest = {
    id?: number;
    title?: string;
    content?: string;
    tags?: Array<string>;
    answer?: string;
    submitNum?: number;
    acceptedNum?: number;
    judgeCase?: Array<QuestionJudgeCase>;
    judgeConfig?: QuestionJudgeConfig;
};
