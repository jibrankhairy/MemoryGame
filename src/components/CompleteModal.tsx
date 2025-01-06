import React, { useEffect } from "react";
import confetti from "canvas-confetti";

interface CompleteModalProps {
  open?: boolean;
  showNext?: boolean;
  onClickNext?: () => void;
  onFinish?: () => void;
  isFinish?: boolean;
  time?: {
    minutes: number;
    seconds: number;
  };
}

const CompleteModal: React.FC<CompleteModalProps> = ({
  open,
  showNext,
  onClickNext,
  onFinish,
  isFinish,
  time,
}) => {
  useEffect(() => {
    if (open === true) {
      confetti();
    }
  }, [open]);

  return (
    <div
      className={`${
        open ? "flex" : "hidden"
      } fixed bg-black/30 z-10 w-screen h-screen top-0 left-0 flex-col items-center justify-center`}
    >
      <div className="bg-white p-6 text-slate-800 [box-shadow:6px_6px_0_var(--tw-shadow-color)] shadow-indigo-700 flex flex-col items-center gap-4">
        <h2 className="text-3xl font-bold ">Yeay!</h2>
        <p className="text-slate-600 max-w-sm text-center">
          Kamu berhasil menyelesaikan level ini dalam waktu :
        </p>
        <p className="text-6xl font-bold mb-4 -translate-y-3">
          <span className="relative after:content-['menit'] after:absolute after:font-normal after:text-slate-400 after:text-base after:-bottom-2 after:left-4">
            {("0" + time?.minutes).slice(-2)}
          </span>
          :
          <span className="relative after:content-['detik'] after:absolute after:font-normal after:text-slate-400 after:text-base after:-bottom-2 after:left-4">
            {("0" + time?.seconds).slice(-2)}
          </span>
        </p>
        {showNext ? (
          <button
            className="px-5 py-2 text-slate-100 bg-indigo-800 font-semibold"
            onClick={onClickNext}
          >
            Level Berikutnya
          </button>
        ) : null}
        {isFinish ? (
          <button
            className="px-5 py-2 text-slate-100 bg-indigo-800 font-semibold"
            onClick={onFinish}
          >
            Finish
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default CompleteModal;
