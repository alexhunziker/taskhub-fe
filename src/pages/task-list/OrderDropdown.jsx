import { useCallback, useState } from "react";
import styled from "styled-components"
import { SortOrder } from "./sortOrder";

const StyledOrderDropdown = styled.div`
  display: inline-block;
  overflow: hidden;
  font-size: smaller;
  vertical-align: bottom;
  color: grey;
`

const StyledSortOrderContent = styled.div`
  display: block;
  position: absolute;
  background-color: #FAFAFA;
  border-style: solid;
  border-color: #BBBBBB;
  border-radius: 3px;
  border-width: 2px;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`

const DropdownEntry = styled.div`
  padding: 5px;
  ${({ selected }) => selected && `
    background: #DDFFEE;
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
      <span onClick={() => setShowDropdown(true)}>⮃</span>
      {showDropdown && <StyledSortOrderContent>
        {Object.values(SortOrder).map((order) => 
          <DropdownEntry key={order} selected={order === sortOrder} onClick={() => handleSetSortOrder(order)}>
            {order}
          </DropdownEntry>
        )}
      </StyledSortOrderContent>}
    </StyledOrderDropdown>
  );
}

export default OrderDropdown;