/* eslint-disable no-unused-vars */
import { useState } from "react";
import { IconCheckedV2 } from "../../../components/Icons";
import Draggable from "react-draggable";
const QuizInteraktif = () => {
  return (
    <div className="flex m-5">
     
      <div className="w-full border rounded-xl mx-3  p-5">
        <div>
            Latihan
            <div className="font-bold">
                Hitunglah Paracetamol untuk anak berusia 18 tahun
            </div>
          <Draggable 
            axis="both"
          ></Draggable>
        </div>
      </div>
    </div>
  );
};

export default QuizInteraktif;
