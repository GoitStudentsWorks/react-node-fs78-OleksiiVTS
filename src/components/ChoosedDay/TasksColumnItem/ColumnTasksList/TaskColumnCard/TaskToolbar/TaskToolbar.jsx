import { StyledTaskToolbar } from './TaskToolbar.styled';

import sprite from '../../../../../Pictures/sprite.svg';
// import { useSelector } from 'react-redux';

const TaskToolbar = ({ priority, id }) => {
  // const user = useSelector('user')
  const user = {
    _id: { $oid: '6529476a97b7633982504c1e' },
    email: 'vlad4@mail.com',
    password: '$2a$10$/LQqZa97FIpqrzsuN0fhi.yzcowlVFbq5TpxWaV5iitOMgexu.lVi',
    subscription: 'starter',
    avatarURL:
      'http://res.cloudinary.com/dnd9pw6nh/image/upload/v1697204074/avatarUser/scymdkr4ztejgfzcj8qh.jpg',
    public_id: 'avatarUser/scymdkr4ztejgfzcj8qh',
    verify: true,
    name: 'vlad',
    verificationToken: ' ',
    createdAt: { $date: { $numberLong: '1697204074420' } },
    updatedAt: { $date: { $numberLong: '1697315175368' } },
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Mjk0NzZhOTdiNzYzMzk4MjUwNGMxZSIsImlhdCI6MTY5NzMxNTE3NSwiZXhwIjoxNjk3Mzk3OTc1fQ.c3V0oMP1jeWgx4RiyHPD5pJot0DdtNl2Eus3B-juXOw',
  };

  const { avatarURL, name } = user;

  const priorityColors = {
    low: '#72C2F8',
    medium: '#F3B249',
    high: '#EA3D65',
  };

  const onCategoryChange = e => {
    console.log(`change category for id ${id}`);
  };

  const onEditClick = e => {
    console.log(`edit ${id}`);
  };

  const onDeleteClick = e => {
    console.log(`delete ${id}`);
  };

  return (
    <StyledTaskToolbar
      className="taskToolbar"
      priority={priorityColors[priority]}
    >
      <div className="infoWrapper">
        <div className="imgWrapper">
          <img src={avatarURL} alt={name} />
        </div>
        <span>{priority}</span>
      </div>
      <div className="controlsWrapper">
        <button onClick={onCategoryChange} type="button">
          <svg>
            <use href={sprite + '#arrow-circle-broken-right'}></use>
          </svg>
        </button>
        <button onClick={onEditClick} type="button">
          <svg>
            <use href={sprite + '#icon-pencil'}></use>
          </svg>
        </button>
        <button onClick={onDeleteClick} type="button">
          <svg>
            <use href={sprite + '#icon-trash'}></use>
          </svg>
        </button>
      </div>
    </StyledTaskToolbar>
    //
  );
};

export default TaskToolbar;
