import { useState } from 'react'
import '../scss/calculator.scss'
import Age from './Age'
import Form from './Form'

const Calculator = () => {

  const [day, setDay] = useState('DD')
  const [month, setMonth] = useState('MM')
  const [year, setYear] = useState('YYYY')
  const [age, setAge] = useState({ days: '--', months: '--', years: '--' });

  return (
    <>
        <div className="contentCalculator">
            <Form
              day={day}
              month={month}
              year={year}
              setAge={setAge}
              setDay={setDay}
              setMonth={setMonth}
              setYear={setYear}
            />
            <Age
              days={age.days}
              months={age.months}
              years={age.years}
            />
        </div>
    </>
  )
}

export default Calculator