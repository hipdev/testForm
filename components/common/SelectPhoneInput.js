import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const SelectPhoneInput = (props) => {
  return (
    <PhoneInput
      country={'us'}
      // value={this.state.phone}
      // onChange={(phone) => this.setState({ phone })}
      inputClass="form-input"
      inputStyle={{
        width: '100%',
        fontSize: '16px',
        height: '38px',
      }}
      containerStyle={{ marginBottom: '0.5rem' }}
      {...props}
    />
  )
}

export default SelectPhoneInput
