import styled from 'styled-components';

export const FilterWrapper = styled.div`
width:360px;
  height: auto;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 10px;
`;

export const FilterHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 58px;
  width: 100%;
  background-color: #10a310;
  border-top-right-radius: 10px;
`;

export const FilterHeaderText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content:space-around;
  align-items: center;
`;

export const NumberInput = styled.input`
  width: 100px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const FilterSection = styled.div`
  width: 90%;
`;

export const SectionTitle = styled.p`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 10px;
`;

// export const RangeSliderWrapper = styled.div`
//   width: 100%;
// `;

// export const RangeSliderTrack = styled.div`
//   height: 6px;
//   background-color: grey;
//   border-radius: 2px;
//   position: relative;
// `;

// export const RangeSliderThumb = styled.div`
//   width: 15px;
//   height: 15px;
//   background-color: white;
//   border: 5px solid #10a310;
//   border-radius: 50%;
//   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
//   position: absolute;
//   top: -5px;
//   left: ${(props) => props.thumbPosition}%;
//     transition: left 0.2s ease;
// `;

export const CheckboxWrapper = styled.div`
  padding: 16px;
`;

export const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const CheckboxInput = styled.input`
  margin-right: 8px;
`;

export const TextRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const FilterFooter = styled.div`
  margin-top: 25px;
  width: 90%;
`;
