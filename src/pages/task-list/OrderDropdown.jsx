import { useCallback, useState } from "react";
import styled from "styled-components"
import { SortOrder } from "./sortOrder";
import SortIcon from '@mui/icons-material/Sort';
import { convertBoolean } from "../../utils/booleanUtils";

const StyledOrderDropdown = styled.div`
  display: inline-block;
  overflow: hidden;
  font-size: smaller;
  vertical-align: bottom;
  color: grey;
`

const StyledSortOrderContent = styled.div`
  transition:visibility 0.2s linear,opacity 0.2s linear;
  display: block;
  position: absolute;
  background-color: #FFFFFF;
  border-style: solid;
  border-color: #BBBBBB;
  border-radius: 3px;
  border-width: 2px;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

  ${({ showDropdown }) => showDropdown ? `opacity: 100;` : `opacity: 0; visibility:hidden`}
`

const DropdownEntry = styled.div`
  transition: all 0.1s linear;
  padding: 5px;
  ${({ selected }) => selected && `
    background: #E0F5FF;
  `}
`;



const OrderDropdown = ({setSortOrder, sortOrder}) => {

  const [showDropdown, setShowDropdown] = useState(false);

  const handleSetSortOrder = useCallback((sortOrder) => {
    setShowDropdown(false);
    setSortOrder(sortOrder)
  }, [setShowDropdown, setSortOrder])

  return  (
    <StyledOrderDropdown>
      <SortIcon onClick={() => setShowDropdown(!showDropdown)} fontSize="small" />
      <StyledSortOrderContent showDropdown={convertBoolean(showDropdown)}>
        {Object.values(SortOrder).map((order) => 
          <DropdownEntry key={order} selected={order === sortOrder} onClick={() => handleSetSortOrder(order)}>
            {order}
          </DropdownEntry>
        )}
      </StyledSortOrderContent>
    </StyledOrderDropdown>
  );
}

export default OrderDropdown;