import { useState } from "react";
import { IconCheckedV2 } from "../../../components/Icons";
const LearingModule = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex m-5">
      <div className="border overflow-y-scroll rounded-lg p-0 h-[32rem] w-96">
        <div className="">
          <button className="p-6" onClick={() => setOpen(!open)}>
            Module 1
          </button>
          <hr />
          <div className={`${open === false && "hidden"} overflow-y-scroll h-80`}>
            <div className="flex items-center justify-between">
              <button className="p-5 px-8 flex items-center justify-between ">
                Definisi dosis
              </button>
              <span className="me-4">
                <IconCheckedV2 />
              </span>
            </div>
            <div className="flex items-center justify-between">
              <button className="p-5 px-8 flex items-center justify-betwee">
                Macam-macam dosis
              </button>
              <span className="me-4">
                <IconCheckedV2 />
              </span>
            </div>
            <div className="flex items-center justify-between">
              <button className="p-5 px-8 flex items-center justify-betwee">
                Lesson 3
              </button>
              <span className="me-4">
                <IconCheckedV2 />
              </span>
            </div>
            <div className="flex items-center justify-between">
              <button className="p-5 px-8 flex items-center justify-betwee">
                Lesson 4
              </button>
              <span className="me-4">
                <IconCheckedV2 />
              </span>
            </div>
            <div className="flex items-center justify-between">
              <button className="p-5 px-8 flex items-center justify-betwee">
                Lesson 4
              </button>
              <span className="me-4">
                <IconCheckedV2 />
              </span>
            </div>
            <div className="flex items-center justify-between">
              <button className="p-5 px-8 flex items-center justify-betwee">
                Lesson 4
              </button>
              <span className="me-4">
                <IconCheckedV2 />
              </span>
            </div>
          </div>
        </div>
        <div className="">
          <div className="p-5">Module 2</div>
          <hr />
        </div>
        <div className="">
          <div className="p-5">Module 3</div>
          <hr />
        </div>
        <div className="">
          <div className="p-5">Module 4</div>
          <hr />
        </div>
        <div className="">
          <div className="p-5">Module 5</div>
          <hr />
        </div>
        <div className="">
          <div className="p-5">Module 5</div>
          <hr />
        </div>
        <div className="">
          <div className="p-5">Module 6</div>
          <hr />
        </div>
        <div className="">
          <div className="p-5">Module 7</div>
          <hr />
        </div>
        <div className="">
          <div className="p-5">Module 8</div>
          <hr />
        </div>
        <div className="">
          <div className="p-5">Module 9</div>
          <hr />
        </div>
        <div className="">
          <div className="p-5">Module 10</div>
          <hr />
        </div>
        <div className="">
          <div className="p-5">Module 11</div>
          <hr />
        </div>
        <div className="">
          <div className="p-5">Module 12</div>
          <hr />
        </div>
      </div>
      <div className="w-full border rounded-xl mx-5 overflow-y-scroll max-h-max">

      </div>
    </div>
  );
};

export default LearingModule;
