<template>
  <div id="code-editor" ref="codeEditorRef" style="min-height: 400px" />
</template>

<script setup lang="ts">
import * as monaco from "monaco-editor";
import { onMounted, ref, toRaw } from "vue";

/**
 * 定义组件属性类型
 */
interface Props{
  value: string;
  handleChange: (value: string) => void;
}

/**
 * 给组件指定初始值
 */
const props = withDefaults(defineProps<Props>(), {
  value: () => "",
  handleChange: () => {},
});


const codeEditorRef = ref();
const codeEditor = ref();

const fillValue = () => {
  if (!codeEditor.value) {
    return;
  }
  toRaw(codeEditor.value).setValue("新的值");
};

onMounted(() => {
  if (!codeEditorRef.value) {
    return;
  }

  codeEditor.value = monaco.editor.create(codeEditorRef.value, {
    value: props.value,
    language: "javascript",
    colorDecorators: true,
    theme: "vs-dark",
    minimap: {
      enabled: true,
      scale: 1000,
    },
  });

  codeEditor.value.onDidChangeModelContent(() => {
   props.handleChange(toRaw(codeEditor.value).getValue());
  });
});
</script>

<style scoped></style>
