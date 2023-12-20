import "../scss/form.scss";
import Arrow from "../img/icon-arrow.svg";

const Form = ({ day, month, year, setAge, setDay, setMonth, setYear }) => {
  const handleDayChange = (e) => {
    setDay(e.target.value);
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const currentDate = new Date();
    const birthDate = new Date(`${year}-${month}-${day}`);

    const difference = currentDate - birthDate;

    const ageInMilliseconds = new Date(difference);
    const years = ageInMilliseconds.getUTCFullYear() - 1970;
    const months = ageInMilliseconds.getUTCMonth();
    const days = ageInMilliseconds.getUTCDate() - 1;

    setAge({ days, months, years });
  };

  return (
    <>
      <div className="contentForm">
        <form onSubmit={handleSubmit}>
          <div className="boxInput">
            <label>DAY</label>
            <input
              type="text"
              placeholder="DD"
              name="day"
              value={day}
              onChange={handleDayChange}
            />
          </div>
          <div className="boxInput">
            <label>MONTH</label>
            <input
              type="text"
              placeholder="MM"
              name="month"
              value={month}
              onChange={handleMonthChange}
            />
          </div>
          <div className="boxInput">
            <label>YEAR</label>
            <input
              type="text"
              placeholder="YYYY"
              name="year"
              value={year}
              onChange={handleYearChange}
            />
          </div>
          <button>
            <img src={Arrow} alt="submitImg" />
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
