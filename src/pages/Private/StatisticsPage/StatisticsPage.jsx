import React, { useEffect } from 'react';

import MainLayout from 'components/MainLayout/MainLayout';
import StatisticsChart from 'components/Statistics/StatisticsChart/StatisticsChart';
// import Header from 'components/Header/Header';
import { getCurrentDate } from 'utils/calendar';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from 'redux/task/taskOperations';
import { HeaderContainer } from '../CalendarPage/CalendarPage.styled';
import Header from 'components/Header/Header';
import { selectTheme } from 'redux/header/headerSlice';
import { CalendarContainer } from 'components/Calendar/common';
import PeriodPaginator from 'components/Statistics/PeriodPaginator/PeriodPaginator';
// import { addDays, addMonths, format, subDays, subMonths } from 'date-fns';

// import { Link } from 'react-router-dom';
// import { Circles } from 'react-loader-spinner'; //! Спинер

const StatisticsPage = () => {
  const theme = useSelector(selectTheme);
  const currentMonth = getCurrentDate().slice(0, 7);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks(currentMonth));
  }, [dispatch, currentMonth]);

  // const handlePrev = () => {
  //   if (pathname.includes('day')) {
  //     const newDate = subDays(new Date(currentDate), 1);
  //     navigate(`/calendar/day/${format(newDate, 'yyyy-MM-dd')}`);

  //     return;
  //   }

  //   const newDate = subMonths(new Date(currentDate), 1);
  //   navigate(`/calendar/month/${format(newDate, 'yyyy-MM-dd')}`);
  // };

  // const handleNext = () => {
  //   if (pathname.includes('day')) {
  //     const newDate = addDays(new Date(currentDate), 1);
  //     navigate(`/calendar/day/${format(newDate, 'yyyy-MM-dd')}`);

  //     return;
  //   }

  //   const newDate = addMonths(new Date(currentDate), 1);
  //   navigate(`/calendar/month/${format(newDate, 'yyyy-MM-dd')}`);
  // };

  return (
    <MainLayout>
      <CalendarContainer bgcolor={theme === 'dark' ? '#171820' : '#f7f6f9'}>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <PeriodPaginator />
        <div>
          <div>
            <h1>Statistics</h1>
          </div>
          {/* <Header /> */}
          <StatisticsChart />
          {/* <Suspense fallback={null}>
          <CalendarToolbar
            onClickPrev={handlePrev}
            onClickNext={handleNext}
            today={currentDate}
          />
        </Suspense> */}
        </div>
      </CalendarContainer>
    </MainLayout>

    // {isLoading && !error && (
    //     <Circles
    //       height="80"
    //       width="80"
    //       color="#4d78a9"
    //!       wrapperClass={css.loader}
    //     />
    //   )}
  );
};

export default StatisticsPage;

// .loader {
//     position: fixed;
//     top: 0;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
