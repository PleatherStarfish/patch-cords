import React, {useState} from "react";
import Draggable from "react-draggable";
import {usePatchCordStateValue} from '../context/providers/StateProvider';
import onClickOutside from "react-onclickoutside";

const Box = (props) => {
  const [activeDrags, setActiveDrags] = useState(0);
  const [, dispatchPatchCordState] = usePatchCordStateValue();

  const onStart = () => {
    setActiveDrags({activeDrags: activeDrags + 1});
  };

  const onStop = () => {
    setActiveDrags({activeDrags: activeDrags + 1});
  };

  const {name} = props;
  const {id} = props;

  const dragHandlers = {onStart, onStop};

  Box.handleClickOutside = () => console.log('click outside');

  return (
    <Draggable {...dragHandlers}>
      <div
        id={id}
        role="button"
        tabIndex={0}
        className="box"
        onClick={(event) => {
          dispatchPatchCordState({type: 'setClicked', click: event.target.id});
          dispatchPatchCordState({type: 'addStartNode', new: event.target.id});
        }}
        onKeyDown={(event) => {
          dispatchPatchCordState({type: 'setClicked', click: event.target.id});
          dispatchPatchCordState({type: 'addStartNode', new: event.target.id});
        }}
      >
        {name}
      </div>
    </Draggable>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => Box.handleClickOutside
};

export default onClickOutside(Box, clickOutsideConfig);