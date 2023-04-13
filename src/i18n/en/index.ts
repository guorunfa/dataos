import login from './login'
import project from './project'

const global = {
  doc_addr: 'Document',
  code_addr: 'Code',
  form_account: 'Please enter your account or email',
  form_password: 'Please enter your password',
  // header
  doc: 'Document',
  help: 'Help',
  contact: 'About Software',
  logout: 'Logout',
  // system setting
  sys_set: 'System Setting',
  lang_set: 'Language Setting',
  // right key
  r_edit: 'Edit',
  r_preview: 'Preview',
  r_copy: 'Clone',
  r_rename: 'Rename',
  r_publish: 'Publish',
  r_unpublish: 'Unpublish',
  r_download: 'Download',
  r_delete: 'Delete',
  r_more: 'More',
  r_confirm: 'Confirm',
  r_cancel: 'Cancel',
  // 提示语
  h_hintTitle: 'Hint',
  h_hint: 'Are you sure you want to do this?',
}

export default {
  global,
  login,
  project
}
