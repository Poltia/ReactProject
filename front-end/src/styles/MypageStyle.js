import styled from "styled-components";

const MyWrap = styled.div`
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
`;
const LeftCover = styled.div`
    position: relative;
    width: 40vw;
    & > div {
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 30vw;
        height: 20vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    & > div > input {
        width: 20vw;
    }
`;
const Left = styled.div`
    position: relative;
    width: 40vw;
    height: 75vh;
`;
const Right = styled.div`
    position: relative;
    width: 40vw;
    height: 75vh;
`;
const Title = styled.h1`
    text-align: center;
`;
const Label = styled.label`
    font-size: 1.5vw;
    & > div {
        font-weight: bold;
        font-size: 1.3vw;
    }
`;
const Input = styled.input`
    font-size: 1.4vw;
    padding: 0.3vh 0;
`;
const Select = styled.select`
    font-size: 1.4vw;
    padding: 0.3vh 0;
`;
const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2vh 2vw;
    & > button {
        font-size: 1.3vw;
        width: 7vw;
    }
    & > * {
        margin: 0.4vw;
    }
`;

const RightWrap = styled.div`
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    /* & > div {
        position: relative;
        width: 20vw;
        height: 13vh;
        border: 1px solid lightgray;
        border-radius: 0.5vw;
    } */
    & > div > label {
        font-size: 2vw;
    }
    & > div > button {
        position: absolute;
        left: 20vw;
        bottom: 0;
    }
`;
const Reserved = styled.div`
    font-size: 1.8vw;
`;
const PackageWrap = styled.div`
    position: relative;
    width: 20vw;
    height: 14vh;
    border: 1px solid lightgray;
    border-radius: 0.5vw;
    display: flex;
    flex-direction: column;
    margin: 2vh 2vw;
    & > button {
        font-size: 1.3vw;
        width: 7vw;
    }
    & > * {
        margin: 0.4vw;
    }
`;
const HotelWrap = styled.div`
    position: relative;
    width: 20vw;
    height: 14vh;
    border: 1px solid lightgray;
    border-radius: 0.5vw;
    display: flex;
    flex-direction: column;
    margin: 2vh 2vw;
    & > button {
        font-size: 1.3vw;
        width: 7vw;
    }
    & > * {
        margin: 0.4vw;
    }
`;
const AirWrap = styled.div`
    position: relative;
    width: 20vw;
    border: 1px solid lightgray;
    border-radius: 0.5vw;
    display: flex;
    flex-direction: column;
    margin: 2vh 2vw;
    height: 27vh;
    & > button {
        font-size: 1.3vw;
        width: 7vw;
    }
    & > * {
        margin: 0.4vw;
    }
`;
export {
    MyWrap,
    Left,
    Right,
    Title,
    Label,
    Input,
    Wrap,
    Select,
    Reserved,
    RightWrap,
    AirWrap,
    HotelWrap,
    PackageWrap,
    LeftCover,
};
