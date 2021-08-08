import moment from 'moment';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './calendar.css';

function CalenderContent({ date, handleChangeDate }) {
  const onchange = (value) => {
    handleChangeDate(value)
  }
  return (
    <div>
      <Calendar
        onChange={onchange}
        value={date}
        minDate={new Date()}
        maxDate={moment().add(2, 'months').toDate()}
      />
    </div>
  );
}

export default CalenderContent;

// import React from "react";
// import {
//   SettingsForm,
//   SettingsFormContent,
// } from "./calender.style";

// import Calendar from 'react-calendar';
// import './calendar.css';
// import moment from "moment";

// const CalenderContent = ({ deviceType, handleDateChange, date }) => {
//   console.log('shgahsgahgs');
//   return (
//     <SettingsForm>
//       <SettingsFormContent>
//         {/* <HeadingSection>
//           <Title>
//             <FormattedMessage
//               id="bookingePageTitle"
//               defaultMessage="Select Date "
//             />
//           </Title>
//         </HeadingSection> */}
//         <Calendar
//           onChange={handleDateChange}
//           value={date}
//           minDate={new Date()}
//           maxDate={moment().add(2, 'months').toDate()}
//         />

//       </SettingsFormContent>
//     </SettingsForm>
//   );
// };

// export default CalenderContent;
