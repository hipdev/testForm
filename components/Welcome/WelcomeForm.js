import { useState } from 'react'
import SelectUSAStates from 'components/common/SelectUsaStates'
import SelectGender from './WelcomeSelectGender'
import { Controller, useForm } from 'react-hook-form'
import ErrorField from 'components/common/ErrorField'
import SelectPhoneInput from 'components/common/SelectPhoneInput'

const WelcomeForm = () => {
  const [log, setLog] = useState(null)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    setLog(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-10 relative">
      <fieldset>
        <div className="grid grid-cols-2 gap-3">
          <label>
            <span className="form-label">First name</span>
            <input
              className="form-input"
              {...register('firstName', {
                required: true,
                minLength: 2,
                pattern: /^[a-zA-Z().(),()-s\.']([^0-9/\s]*)+$/i,
              })}
            />

            {errors.firstName && (
              <ErrorField
                error={errors.firstName}
                customMessage="Can have only the following chars(a-z, A-Z, - ',.)"
              />
            )}
          </label>
          <label>
            <span className="form-label">Last name</span>
            <input
              className="form-input"
              {...register('lastName', {
                required: true,
                minLength: 2,
                pattern: /^[a-zA-Z().(),()-s\.']([^0-9/\s]*)+$/i,
              })}
            />
            {errors.lastName && (
              <ErrorField
                error={errors.lastName}
                customMessage="Can have only the following chars(a-z, A-Z, - ',.)"
              />
            )}
          </label>
        </div>

        <div>
          <label className="flex flex-col">
            <span className="form-label">Email address</span>
            <input
              type="email"
              className="form-input"
              {...register('email', { required: true })}
            />
            {errors.email && <ErrorField />}
          </label>
        </div>

        <div>
          <label className="flex flex-col">
            <span className="form-label">Street address</span>
            <input
              className="form-input"
              {...register('streetAddress', {
                required: true,
                pattern: /^[/\s()\d()a-zA-Z().(),()-]+$/i,
              })}
            />
            {errors.streetAddress && (
              <ErrorField
                error={errors.streetAddress}
                customMessage="Can have only the following chars(a-z, A-Z, space . , - 0-9)"
              />
            )}
          </label>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <label>
            <span className="form-label">City</span>
            <input
              className="form-input"
              {...register('city', {
                required: true,
                pattern: /^[/\s()a-zA-Z]+$/i,
              })}
            />
            {errors.city && (
              <ErrorField
                error={errors.city}
                customMessage="Can have only the following chars(a-z, A-Z, space)"
              />
            )}
          </label>
          <label>
            <span className="form-label">State / Province</span>
            <Controller
              name="state"
              control={control}
              defaultValue={false}
              rules={{ required: true }}
              render={({ field }) => <SelectUSAStates {...field} ref={null} />}
            />

            {errors.state && <ErrorField />}
          </label>
        </div>

        <div>
          <label className="flex flex-col">
            <span className="form-label">ZIP / Postal</span>
            <input
              className="form-input"
              {...register('zipPostal', {
                required: true,
                pattern: /^[0-9]*$/i,
              })}
            />
            {errors.zipPostal && (
              <ErrorField
                error={errors.zipPostal}
                customMessage="Can have only numbers"
              />
            )}
          </label>
        </div>

        <div>
          <label className="flex flex-col">
            <span className="form-label">Phone number</span>

            <Controller
              name="phone"
              control={control}
              defaultValue={false}
              rules={{ required: true }}
              render={({ field }) => <SelectPhoneInput {...field} ref={null} />}
            />

            {errors.phone && <ErrorField />}
          </label>
        </div>

        <div>
          <label className="flex flex-col">
            <span className="form-label">Date of birth</span>
            <input
              type="date"
              className="form-input"
              {...register('birthDay', {
                max: '2003-01-01',
                required: true,
              })}
            />
            {errors.birthDay && <ErrorField />}
          </label>
        </div>

        <div>
          <span className="form-label">Gender</span>
          <Controller
            name="gender"
            control={control}
            defaultValue={false}
            rules={{ required: true }}
            render={({ field }) => <SelectGender {...field} ref={null} />}
          />

          {errors.gender && <ErrorField />}
        </div>

        <button className="btn-primary w-full mt-6" type="submit">
          Get my free samples
        </button>
      </fieldset>

      {log && (
        <div className="mt-10">
          <pre>{JSON.stringify(log, undefined, 2)}</pre>
        </div>
      )}
    </form>
  )
}

export default WelcomeForm
