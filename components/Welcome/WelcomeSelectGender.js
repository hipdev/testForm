const WelcomeSelectGender = (props) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      <div>
        <input
          className="hidden custom-radio"
          id="radio_1"
          type="radio"
          {...props}
        />
        <label
          className="form-input flex justify-center cursor-pointer"
          htmlFor="radio_1"
        >
          <span className="font-semibold">Male</span>
        </label>
      </div>
      <div>
        <input
          className="hidden custom-radio"
          id="radio_2"
          type="radio"
          {...props}
        />
        <label
          className="form-input flex justify-center cursor-pointer"
          htmlFor="radio_2"
        >
          <span className="font-semibold">Female</span>
        </label>
      </div>
      <div>
        <input
          className="hidden custom-radio"
          id="radio_3"
          type="radio"
          {...props}
        />
        <label
          className="form-input flex justify-center cursor-pointer"
          htmlFor="radio_3"
        >
          <span className="font-semibold">Other</span>
        </label>
      </div>
    </div>
  )
}

export default WelcomeSelectGender
