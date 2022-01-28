import styled from 'styled-components';
import { colors } from "../../../../utils/colors";
import { Input } from 'antd';

export const selectStyle = {
  marginBottom: "20px",
  width: '80%',
};

export const Container = styled.div`
    background-color: ${colors.grayBackground};
    padding: 50px;

  @media only screen and (max-width: 768px) {
    padding: 20px;
  };
`;

export const Tab = styled.div`
    display: flex;
  
    @media only screen and (max-width: 768px) {
        flex-direction: column;
    };
`;

export const TabButton = styled.button`
    background-color: ${props => props.selected ? colors.white : "inherit"};
    padding: 15px 30px;
    font-size: 16px;
    cursor: pointer;
    display: inline-block;
    border-bottom-style: none;
    border-left-style: none;
    border-right-style: none;
    border-top-style: ${props => props.selected ? "solid" : "none"};
    border-color: ${colors.main};
    border-width: medium;
`;

export const TabContent = styled.div`
    width: 100%;
    background-color: ${colors.white};
    border-top: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 0;

    @media only screen and (max-width: 768px) {
      padding: 25px 0;
    };
`;

export const Form = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.isCompanyTab ? 'center' : 'space-between'};

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  };
`;

export const InputFieldWrapper = styled.div`
    width: ${props => props.isCompanyTab ? '70%' : '100%'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  };
`;

export const InputField = styled(Input)`
    margin-bottom: 20px;
    width: 80%;
    height: 40px;
`;

export const ApplyButton = styled.button`
    background-color: inherit;
    border-color: ${colors.main};
    border-width: thin;
    border-radius: 2px;
    color: ${colors.main};
    cursor: pointer;
    width: 150px;
    height: 40px;
    margin-top: 20px;

    &:hover {
        background-color: ${colors.main};
        color: ${colors.white};
    }
`;
