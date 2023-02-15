import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reservAction } from "../redux/middleware/reservAction";
import {
  AirWrap,
  Left,
  Right,
  Select,
  Date,
  Reserved,
  Block,
  HiddenBlock,
  ReservedBlock,
  AirImg,
  Destination,
  PickDate,
} from "../styles/AirStyle";
import { Title, Button } from "../styles/CommonStyle";
import { air } from "../imgs";

const Air = () => {
  // 좌석 배열
  //   let seats = [
  //     [
  //       { num: 1, seat: "A1", reserved: false },
  //       { num: 1, seat: "A2", reserved: false },
  //       { num: 1, seat: "A3", reserved: false },
  //       { num: 1, seat: "A4", reserved: false },
  //       { num: 1, seat: "A5", reserved: false },
  //       { num: 1, seat: "A6", reserved: false },
  //       { num: 1, seat: "A7", reserved: false },
  //       { num: 1, seat: "A8", reserved: false },
  //       { num: 1, seat: "A9", reserved: false },
  //       { num: 1, seat: "A10", reserved: false },
  //       { num: 1, seat: "A11", reserved: false },
  //     ],
  //     [
  //       { num: 1, seat: "B1", reserved: false },
  //       { num: 1, seat: "B2", reserved: false },
  //       { num: 1, seat: "B3", reserved: false },
  //       { num: 1, seat: "B4", reserved: false },
  //       { num: 1, seat: "B5", reserved: false },
  //       { num: 1, seat: "B6", reserved: false },
  //       { num: 1, seat: "B7", reserved: false },
  //       { num: 1, seat: "B8", reserved: false },
  //       { num: 1, seat: "B9", reserved: false },
  //       { num: 1, seat: "B10", reserved: false },
  //       { num: 1, seat: "B11", reserved: false },
  //     ],
  //     [
  //       { num: 0, seat: "", reserved: false },
  //       { num: 0, seat: "", reserved: false },
  //       { num: 0, seat: "", reserved: false },
  //       { num: 0, seat: "", reserved: false },
  //       { num: 0, seat: "", reserved: false },
  //       { num: 0, seat: "", reserved: false },
  //       { num: 0, seat: "", reserved: false },
  //       { num: 0, seat: "", reserved: false },
  //       { num: 0, seat: "", reserved: false },
  //       { num: 0, seat: "", reserved: false },
  //       { num: 0, seat: "", reserved: false },
  //     ],
  //     [
  //       { num: 1, seat: "C1", reserved: false },
  //       { num: 1, seat: "C2", reserved: false },
  //       { num: 1, seat: "C3", reserved: false },
  //       { num: 1, seat: "C4", reserved: false },
  //       { num: 1, seat: "C5", reserved: false },
  //       { num: 1, seat: "C6", reserved: false },
  //       { num: 1, seat: "C7", reserved: false },
  //       { num: 1, seat: "C8", reserved: false },
  //       { num: 1, seat: "C9", reserved: false },
  //       { num: 1, seat: "C10", reserved: false },
  //       { num: 1, seat: "C11", reserved: false },
  //     ],
  //     [
  //       { num: 1, seat: "D1", reserved: false },
  //       { num: 1, seat: "D2", reserved: false },
  //       { num: 1, seat: "D3", reserved: false },
  //       { num: 1, seat: "D4", reserved: false },
  //       { num: 1, seat: "D5", reserved: false },
  //       { num: 1, seat: "D6", reserved: false },
  //       { num: 1, seat: "D7", reserved: false },
  //       { num: 1, seat: "D8", reserved: false },
  //       { num: 1, seat: "D9", reserved: false },
  //       { num: 1, seat: "D10", reserved: false },
  //       { num: 1, seat: "D11", reserved: false },
  //     ],
  //   ];
  //   console.log("seats :", seats);

  // 좌석 배열
  const seats = [[], [], [], [], []];
  for (let i = 0; i < 5; i++) {
    for (let j = 1; j <= 11; j++) {
      if (i === 0) seats[i].push({ num: 1, seat: `A${j}`, reserved: false });
      else if (i === 1)
        seats[i].push({ num: 1, seat: `B${j}`, reserved: false });
      else if (i === 2) seats[i].push({ num: 0, seat: "", reserved: false });
      else if (i === 3)
        seats[i].push({ num: 1, seat: `C${j}`, reserved: false });
      else if (i === 4)
        seats[i].push({ num: 1, seat: `D${j}`, reserved: false });
    }
  }
  console.log("seats :", seats);

  // Hook 할당
  const dispatch = useDispatch();
  const nav = useNavigate();

  // input 받아오기
  const [destination, setDestination] = useState("");
  const destination_value = (e) => setDestination(e.target.value);
  const [date, setDate] = useState();
  const date_value = (e) => setDate(e.target.value);
  const [seat, setSeat] = useState();
  const seat_value = (e) => setSeat(e.target.dataset.key);

  // 예약현황 숨기는 함수
  const [hide, setHide] = useState(true);

  const id = sessionStorage.getItem("userID");
  // 예약하기 클릭 함수
  const reserve = () => {
    if (!id) alert("로그인 후 이용해주세요.");
    else if (destination === "") alert("목적지를 선택해주세요.");
    else if (!date) alert("날짜를 선택해주세요.");
    else if (!seat) alert("좌석을 선택해주세요.");
    else dispatch(reservAction.air(id, destination, date, seat, nav));
  };
  // 예약확인 클릭 함수
  const reserved_check = () => {
    if (!id) {
      alert("로그인 후 이용해주세요.");
    } else if (!destination) {
      alert("목적지를 선택해주세요.");
    } else if (!date) {
      alert("날짜를 선택해주세요.");
    } else {
      dispatch(reservAction.air_check(destination, date));
      setHide(false);
    }
  };
  const reserved = useSelector((state) => state.reserved);
  // console.log(reserved.air_date);
  // console.log(reserved.air_destination);
  // console.log(reserved.air_seat);

  // 예약 확인한 결과 적용하는 구문
  seats.map((el) => {
    el.map((e) => {
      for (let i = 0; i < reserved.air_seat.length; i++) {
        if (
          e.seat === reserved.air_seat[i] &&
          destination === reserved.air_destination[i]
        ) {
          e.reserved = true;
        }
      }
    });
  });

  return (
    <AirWrap>
      <Left>
        <Select onChange={destination_value}>
          <option value="">--목적지--</option>
          <option value="jeju">제주</option>
          <option value="yang">양양</option>
        </Select>
        &nbsp;
        <Date onChange={date_value} type="date" />
        {destination && (
          <Destination>
            목적지 :{" "}
            {destination === "jeju"
              ? "제주"
              : destination === "yang"
              ? "양양"
              : ""}
          </Destination>
        )}
        {date && <PickDate>날짜 : {date}</PickDate>}
        <AirImg src={air} alt="비행기" />
      </Left>
      <Right>
        <Title>
          예약 현황&nbsp;
          <Button onClick={reserved_check}>확인하기</Button>
        </Title>
        {hide === false && (
          <div>
            <Reserved>
              {seats.map((el, index) => {
                return el.map((e, index) => {
                  if (e.num === 0)
                    return <HiddenBlock key={index}></HiddenBlock>;
                  else if (e.num === 1 && e.reserved === false)
                    return (
                      <Block key={index} onClick={seat_value} data-key={e.seat}>
                        {e.seat}
                      </Block>
                    );
                  else if (e.num === 1 && e.reserved === true)
                    return <ReservedBlock>{e.seat}</ReservedBlock>;
                  else console.log(e);
                });
              })}
            </Reserved>
          </div>
        )}
        {seat && <span>{seat} 선택</span>}
        <br />
        <Button onClick={reserve}>예약하기</Button>
      </Right>
    </AirWrap>
  );
};

export default Air;
