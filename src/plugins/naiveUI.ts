import { App } from 'vue'
import {
  create,
  NA,
  NP,
  NH1,
  NH2,
  NH3,
  NH4,
  NCode,
  NCountdown,
  NText,
  NTime,
  NEllipsis,
  NConfigProvider,
  NMessageProvider,
  NDialogProvider,
  NGradientText,
  NInput,
  NImage,
  NButton,
  NButtonGroup,
  NForm,
  NFormItem,
  NCheckboxGroup,
  NCheckbox,
  NIcon,
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
  NLayoutSider,
  NMenu,
  NBreadcrumb,
  NBreadcrumbItem,
  NDropdown,
  NSpace,
  NTooltip,
  NAvatar,
  NTabs,
  NTab,
  NTabPane,
  NCard,
  NRow,
  NCol,
  NDrawer,
  NDrawerContent,
  NDivider,
  NSwitch,
  NBadge,
  NAlert,
  NElement,
  NTag,
  NNotificationProvider,
  NNumberAnimation,
  NProgress,
  NDatePicker,
  NGrid,
  NGridItem,
  NList,
  NListItem,
  NThing,
  NDataTable,
  NPopover,
  NPagination,
  NSelect,
  NSlider,
  NRadioGroup,
  NRadio,
  NSteps,
  NStep,
  NInputGroup,
  NInputGroupLabel,
  NResult,
  NDescriptions,
  NDescriptionsItem,
  NTable,
  NInputNumber,
  NLoadingBarProvider,
  NModal,
  NUpload,
  NUploadFileList,
  NUploadTrigger,
  NUploadDragger,
  NTree,
  NSpin,
  NTimeline,
  NTimelineItem,
  NTimePicker,
  NBackTop,
  NSkeleton,
  NStatistic,
  NCarousel,
  NScrollbar,
  NPopselect,
  NCollapse,
  NCollapseItem,
  NColorPicker,
  NWatermark,
  NEmpty,
  NCollapseTransition
} from 'naive-ui'

const naiveUI = create({
  components: [
    NA,
    NP,
    NH1,
    NH2,
    NH3,
    NH4,
    NCode,
    NCountdown,
    NText,
    NTime,
    NEllipsis,
    NMessageProvider,
    NDialogProvider,
    NConfigProvider,
    NGradientText,
    NInput,
    NButton,
    NButtonGroup,
    NForm,
    NFormItem,
    NCheckboxGroup,
    NCheckbox,
    NIcon,
    NImage,
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    NLayoutSider,
    NMenu,
    NBreadcrumb,
    NBreadcrumbItem,
    NDropdown,
    NSpace,
    NTooltip,
    NAvatar,
    NTabs,
    NTab,
    NTabPane,
    NCard,
    NRow,
    NCol,
    NDrawer,
    NDrawerContent,
    NDivider,
    NSwitch,
    NBadge,
    NAlert,
    NElement,
    NTag,
    NNotificationProvider,
    NNumberAnimation,
    NProgress,
    NDatePicker,
    NGrid,
    NGridItem,
    NList,
    NListItem,
    NThing,
    NDataTable,
    NPopover,
    NPagination,
    NSlider,
    NSelect,
    NRadioGroup,
    NRadio,
    NSteps,
    NStep,
    NInputGroup,
    NInputGroupLabel,
    NResult,
    NDescriptions,
    NDescriptionsItem,
    NTable,
    NInputNumber,
    NLoadingBarProvider,
    NModal,
    NUpload,
    NUploadFileList,
    NUploadTrigger,
    NUploadDragger,
    NTree,
    NSpin,
    NTimeline,
    NTimelineItem,
    NTimePicker,
    NBackTop,
    NSkeleton,
    NStatistic,
    NCarousel,
    NScrollbar,
    NPopselect,
    NCollapse,
    NCollapseItem,
    NColorPicker,
    NWatermark,
    NEmpty,
    NCollapseTransition
  ]
})
export function setupNaiveUI(app: App) {
  app.use(naiveUI)
}
