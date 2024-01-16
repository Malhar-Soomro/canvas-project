import React from 'react';
import { useDispatch } from 'react-redux';
import { canvasElementType } from '../../utils/constants';
import { addCanvasElement } from '../../features/canvasSlice';

function CanvasTextModal() {
  // ------------------------------------------------------------------------------
  // variables
  // ------------------------------------------------------------------------------
  const dispatch = useDispatch();

  // ------------------------------------------------------------------------------
  // functions
  // ------------------------------------------------------------------------------
  const handleCreateElement = () => {
    const element = {
      type: canvasElementType.text,
      width: 200,
      height: 200,
      top: 0,
      left: 0,
      selected: true,
      color: '#000',
      backgroundColor: '#fff',
      borderColor: '#000',
      border: 0,
      borderRadius: 0,
      fontSize: 24,
      rotate: 0
    };

    dispatch(addCanvasElement(element));
  };

  const test = () => {
    const element = {
      type: canvasElementType.circle,
      width: 300,
      height: 300,
      top: 0,
      left: 0,
      selected: true,
      color: '#fff'
    };

    dispatch(addCanvasElement(element));
  };
  // ------------------------------------------------------------------------------
  // render
  // ------------------------------------------------------------------------------
  return (
    <div className="w-full h-full pt-10 px-2 text-zinc-700 dark:text-zinc-100">
      <div
        onClick={handleCreateElement}
        className="w-full h-[30px] dark:bg-indigo-400 bg-indigo-300 rounded-sm prevent-select
flex justify-center items-center text-sm cursor-pointer hover:dark:bg-indigo-500 hover:bg-indigo-400"
      >
        テクストボックスを追加
      </div>

      <div
        onClick={test}
        className="w-full h-[30px] dark:bg-indigo-400 bg-indigo-300 rounded-sm prevent-select mt-4
flex justify-center items-center text-sm cursor-pointer hover:dark:bg-indigo-500 hover:bg-indigo-400"
      >
        バウンディングボックスでテクストの追加
      </div>
    </div>
  );
}

export default CanvasTextModal;
