import styled from "styled-components"

const StyledOrderDropdown = styled.div`
  display: inline-block;
  overflow: hidden;
`

const StyledSortOrderContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`



const OrderDropdown = () => {

    return  <StyledOrderDropdown>
    <button class="dropbtn">⮃
    </button>
    <StyledSortOrderContent>
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </StyledSortOrderContent>
  </StyledOrderDropdown>
}

export default OrderDropdown;