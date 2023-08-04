import styled from "styled-components"
import ReactDatePicker from "react-datepicker"

const DatePicker = styled(ReactDatePicker)`
  width: 100%;
  height: 24px;
  border: 2px solid #007799;
  border-radius: 3px;

  :focus {
    border: 2px solid #007799;
  }

  ${({ validationError }) => validationError && `
    border: 2px solid #AA6666;
    background-color: #FFDDDD;
  `}
`;

export default DatePicker;