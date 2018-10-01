import React, {Component, PropTypes} from 'react'
import {Button, Dialog, DialogTitle, DialogContent, DialogActions} from 'react-mdl'
import {autobind} from 'core-decorators'
import dialogPolyfill from 'dialog-polyfill'
import {t} from 'utils/i18n'
import pkg from 'package.json'

import _styles from './index.scss'

export default class AboutDialog extends Component {
  static propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func
  }

  @autobind
  handleDialogRef (dialog) {
    this._dialog = dialog
  }

  @autobind
  handleClose () {
    const {onClose} = this.props
    onClose && onClose()
  }

  hasDialog () {
    const dialog = this._dialog && this._dialog.dialogRef
    return (dialog instanceof Node) && document.contains(dialog)
  }

  componentDidMount () {
    dialogPolyfill.registerDialog(this._dialog.dialogRef)
  }

  render () {
    const {open} = this.props
    const isOpen = this.hasDialog() && !!open

    return (
      <Dialog className='app-about-dialog' open={isOpen}
        ref={this.handleDialogRef}
        onCancel={this.handleClose}
      >
        <form method='dialog'>
          <DialogTitle>
            {`${t('ext_name')} v${pkg.version}`}
          </DialogTitle>
          <DialogContent>
            <p>
              {t('msg_about_dialog_haiku_label')}
            </p>
          </DialogContent>
          <DialogActions>
            <Button raised ripple
              onClick={this.handleClose}
            >
              {t('msg_about_dialog_close_button')}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    )
  }
}
