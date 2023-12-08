import { PlusIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tasks from "../../data/tasks";
import { onlyUnique } from "../../utils/utils";
import BoardList from "./BoardList";

const BoardDetails = () => {
  const { boardId } = useParams();
  const [taskList, setTaskList] = useState([]);
  const [uniqueLists, setUniqueLists] = useState([]);

  useEffect(() => {
    if (tasks) {
      let filteredTasks = tasks.filter(
        (task) => task.boardId === Number(boardId)
      );
      setTaskList(filteredTasks);

      let uniqueListsNames = filteredTasks
        .map((task) => task.listName)
        .filter(onlyUnique);

      setUniqueLists(uniqueListsNames);
    }
  }, []);

  return (
    <div className="flex gap-2 w-full h-full">
      {/* Render all unique lists in taskList */}
      {uniqueLists &&
        uniqueLists.map((listName) => (
          <BoardList
            key={`board-${boardId}-list-${listName}`}
            boardListName={listName}
            tasks={tasks.filter((task) => task.listName === listName)}
          />
        ))}
      <button className="flex gap-2 items-center justify-center bg-blue-600 text-white h-fit px-4 py-2 rounded-md hover:bg-blue-500">
        <PlusIcon className="h-4 w-4" />
        Add another list
      </button>
    </div>
  );
};

export default BoardDetails;