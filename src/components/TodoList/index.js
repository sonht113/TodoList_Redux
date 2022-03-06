import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";

import todoListSlice from './todoListSlice'
import { selectRemainingTodoList } from "../../redux/selectors";
import { useState, useRef } from "react";

export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [prioriry, setPrioriry] = useState("Medium");

  const inputRef = useRef();

  const dispatch = useDispatch();
  const todoList = useSelector(selectRemainingTodoList);

  const handleChangeTodoName = (e) => {
    setTodoName(e.target.value);
  };

  const handleChangePrioriry = (value) => {
    setPrioriry(value);
  };

  const handleAddTodoButtonClick = () => {
    dispatch(
      todoListSlice.actions.addTodo({
        id: uuidv4(),
        name: todoName,
        prioriry: prioriry,
        completed: false,
      })
    );
    setTodoName("");
    setPrioriry("Medium");
    inputRef.current.focus();
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo, index) => (
          <Todo
            key={index}
            id={todo.id}
            name={todo.name}
            prioriry={todo.prioriry}
            completed={todo.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input
            ref={inputRef}
            value={todoName}
            onChange={handleChangeTodoName}
          />
          <Select defaultValue="Medium" onChange={handleChangePrioriry}>
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddTodoButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
