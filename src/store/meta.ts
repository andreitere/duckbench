import {defineStore} from "pinia";
import {ref} from "vue";
import {useEventBus, useStorage} from "@vueuse/core";

export const useMetaStore = defineStore("metaStore", () => {
  const showToolbar = useStorage("showToolbar", false);
  const cmdMenu = ref(false);
  const shareLink = ref('');
  return {cmdMenu, showToolbar, shareLink}
})


export const db_events = useEventBus('db_events')