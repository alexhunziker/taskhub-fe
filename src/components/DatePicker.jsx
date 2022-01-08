import styled from "styled-components"
import ReactDatePicker from "react-datepicker"

const DatePicker = styled(ReactDatePicker)`
  width: 100%;
  height: 24px;
  border: 2px solid #009999;
  border-radius: 3px;

  :focus {
    border: 2px solid #009999;
  }
`;

export default DatePicker;