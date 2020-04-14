import React, {useState} from "react";
import Draggable from "react-draggable";
import onClickOutside from "react-onclickoutside";
import { usePatchCordStateValue } from '../context/providers/StateProvider';

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

  Box.handleClickOutside = (event) => {
    if (event.target.classList.contains("patchable")) {
      dispatchPatchCordState({type: 'setClicked', click: ''});
    }
  };

  return (
    <Draggable {...dragHandlers}>
      <div
        id={id}
        role="button"
        tabIndex={0}
        className="box patchable"
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