import { Droppable } from 'react-beautiful-dnd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { Col } from 'react-bootstrap';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { FoodIngreList } from './FoodIngreList';
import { FoodModal } from './FoodModal';
import styled from 'styled-components';

const IngreBody = styled.div`
  padding: 8px;
  background-color: ${(props) => (props.isDraggingOver ? '#f7dd9c' : '')};
`;

export const MyIngreDnd = (props) => {
  const { column, tasks, setState, state } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const [checkedIngre, setCheckedIngre] = useState([]);
  const [checkedBSIngre, setCheckedBSIngre] = useState([]);

  useEffect(() => {
    setCheckedIngre(checkedIngre);
  }, [checkedIngre]);

  // 등록모달
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setState(!state);
  };

  const clickEvent = () => {
    if (checkedIngre.length == 0) {
      swal('식재료를 선택해주세요', '', 'error');
      return;
    }
  };

  const clickEvent2 = () => {
    if (checkedBSIngre.length == 0) {
      swal('식재료를 선택해주세요', '', 'error');
      return;
    }
  };

  return (
    <Col md={6} lg={4}>
      <div className="d-flex justify-content-center px-4">
        <h2>{column.title}</h2>
        {column.title === 'MY 식재료' ? (
          <AddCircleIcon className="addFood" onClick={openModal}></AddCircleIcon>
        ) : null}

        <FoodModal open={modalOpen} close={closeModal} header="식재료 등록" />
      </div>
      <div className="ingreBody">
        <Droppable droppableId={column.id}>
          {(provided, snapshot) => (
            <IngreBody
              {...provided.droppableProps}
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}>
              {tasks.map((task, index) => (
                <div className="dndBody" key={index}>
                  <FoodIngreList
                    task={task}
                    index={index}
                    state={state}
                    setState={setState}
                    checkedIngre={checkedIngre}
                    setCheckedIngre={setCheckedIngre}
                    checkedBSIngre={checkedBSIngre}
                    setCheckedBSIngre={setCheckedBSIngre}
                  />
                </div>
              ))}
              {provided.placeholder}
            </IngreBody>
          )}
        </Droppable>
        {column.title === 'MY 식재료' ? (
          <button className="ingreBtn mt-3" onClick={clickEvent}>
            {checkedIngre.length ? (
              <Link to={'/recipe'} state={checkedIngre}>
                레시피 추천
              </Link>
            ) : (
              <div>레시피 추천</div>
            )}
          </button>
        ) : (
          <button className="ingreBtn mt-3" onClick={clickEvent2}>
            {checkedBSIngre.length ? (
              <Link to={'/board/write'} state={{ type: '교환/나눔', ingre: checkedBSIngre }}>
                교환 / 나눔 등록
              </Link>
            ) : (
              <div>교환 / 나눔 등록</div>
            )}
          </button>
        )}
      </div>
    </Col>
  );
};
