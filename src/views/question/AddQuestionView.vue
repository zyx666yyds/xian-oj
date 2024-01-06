<template>
  <div id="addQuestionView">
    <h2>创建题目</h2>
    <a-form :model="form">
      <a-form-item field="answer" label="答案">
        <MdEditor :value="form.answer" @change="onAnswerChange" />
      </a-form-item>

      <a-form-item field="content" label="题目内容">
        <MdEditor :value="form.content" @change="onContentChange" />
      </a-form-item>

      <a-form-item field="title" label="标题">
        <a-input v-model="form.title" placeholder="请输入标题" />
        "
      </a-form-item>

      <a-form-item field="tags" label="标签">
        <a-input-tag v-model="form.tags" placeholder="请输入标签" allow-clear />
      </a-form-item>

      <a-form-item label="判题配置" :content-flex="false" :merge-props="false">
        <a-space direction="vertical" style="min-width: 480px">
          <a-form-item field="judgeConfig.memoryLimit" label="内存限制">
            <a-input-number
              v-model="form.judgeConfig.memoryLimit"
              placeholder="请输入内存限制..."
              mode="button"
              size="large"
            />
          </a-form-item>

          <a-form-item field="judgeConfig.timeLimit" label="时间限制">
            <a-input-number
              v-model="form.judgeConfig.timeLimit"
              placeholder="请输入时间限制..."
              mode="button"
              size="large"
            />
          </a-form-item>

          <a-form-item field="judgeConfig.stackLimit" label="堆栈限制">
            <a-input-number
              v-model="form.judgeConfig.stackLimit"
              placeholder="请输入栈限制..."
              mode="button"
              size="large"
            />
          </a-form-item>
        </a-space>
      </a-form-item>

      <a-form-item
        label="测试用例配置"
        :content-flex="false"
        :merge-props="false"
      >
        <a-form-item
          v-for="(judgeCaseItem, index) of form.judgeCase"
          :key="index"
          no-style
        >
          <a-space direction="vertical" style="min-width: 480px">
            <a-form-item
              :field="`form.judgeCase[${index}].input`"
              :label="`输入用例-${index}`"
              :key="index"
            >
              <a-input
                v-model="judgeCaseItem.input"
                placeholder="请输入输入用例..."
              />
            </a-form-item>

            <a-form-item
              :field="`form.judgeCase[${index}].output`"
              :label="`输出用例-${index}`"
              :key="index"
            >
              <a-input
                v-model="judgeCaseItem.output"
                placeholder="请输入输出用例..."
              />
              <a-button status="danger" @click="handleDelete(index)">
                删除
              </a-button>
            </a-form-item>
          </a-space>
        </a-form-item>
        <div>
          <a-button type="outline" status="success" @click="handleAdd"
            >新增测试用例
          </a-button>
        </div>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="doSubmit"> 提交</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import MdEditor from "@/components/MdEditor.vue";
import { QuestionControllerService } from "../../../generated";
import message from "@arco-design/web-vue/es/message";

const layout = ref("horizontal");
const form = reactive({
  answer: "",
  content: "",
  tags: [],
  title: "",
  judgeCase: [
    {
      input: "1 2",
      output: "3",
    },
  ],
  judgeConfig: {
    memoryLimit: 1000,
    timeLimit: 1000,
    stackLimit: 1000,
  },
});

const onAnswerChange = (value: string) => {
  form.answer = value;
};

const onContentChange = (value: string) => {
  form.content = value;
};

const doSubmit = async () => {
  const res = await QuestionControllerService.addQuestion(form);
  if (res.code === 0) {
    message.success("创建成功");
  }else {
    message.error("创建失败" + res.message);
  }
};

/**
 * 新增测试用例
 */
const handleAdd = () => {
  form.judgeCase.push({
    input: "",
    output: "",
  });
};
/**
 * 删除测试用例
 * @param index
 */
const handleDelete = (index: number) => {
  form.judgeCase.splice(index, 1);
};
</script>

<style scoped></style>
