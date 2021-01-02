import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { KeyboardDatePicker, KeyboardDatePickerProps } from 'formik-material-ui-pickers'
import React from 'react'

const FormDatePicker: React.FC<KeyboardDatePickerProps> = (
  props: KeyboardDatePickerProps
) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker fullWidth clearable autoOk {...props} />
    </MuiPickersUtilsProvider>
  )
}

export default FormDatePicker
