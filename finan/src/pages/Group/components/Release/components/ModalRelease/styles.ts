import styled from 'styled-components'


export const Modal = styled.div`
  display:flex;
  #select-1, #select-2, #select-3, #select-4{
    width:200px;
  }
  #standard-basic{
    width:200px;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='date']:in-range::-webkit-datetime-edit-year-field,input[type='date']:in-range::-webkit-datetime-edit-month-field,input[type='date']:in-range::-webkit-datetime-edit-day-field,input[type='date']:in-range::-webkit-datetime-edit-text{  color: transparent;}
`;

export const ModalSelect = styled.div`
  display:flex;
  flex-direction:Column;
  padding:10px;
`;