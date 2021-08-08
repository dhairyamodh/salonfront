// import StepZilla from "react-stepzilla";
// import StepProgressBar from 'react-step-progress';
// import 'react-step-progress/dist/index.css';
import Stepper from '@hawk-ui/stepper';
import '@hawk-ui/stepper/dist/index.min.css';
import CalenderContent from '../../features/booking/calender/calender';
import {
    PageWrapper,
    BookingContentBox,
    BookingContentTimeBox,
    BookingContent,
    BookingTitle
} from 'features/user-profile/user-profile.style';
import { Button } from 'components/button/button';

import { FormattedMessage } from "react-intl";
// import 'react-stepzilla/src/css/main.css'
import TimeSelector from "./timeSelector";
import ArtistSelector from "./artistSelector/artistSelector";
import { useDispatch, useSelector } from "react-redux";
import { selectAppointmentArtist, selectAppointmentDate, selectAppointmentTime } from '../../redux/actions/cartActions'
import { getAvailableArtist, getAvailableTime } from '../../redux/actions/checkoutActions'
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal } from '@redq/reuse-modal';
import { openModal } from '@redq/reuse-modal';
import '@redq/reuse-modal/lib/index.css';
import AuthenticationForm from 'features/authentication-form';
import { showSnackBar } from '../../redux/actions/snackActions'


const BookinPage = ({ deviceType }) => {

    const dispatch = useDispatch()
    const { salonId } = useSelector(state => state.salon)
    const { availableArtist, availableTime } = useSelector(state => state.checkout)
    const { selectedTime, selectedDate, selectedArtist } = useSelector(state => state.cart)
    const [date, setDate] = useState(selectedDate)
    const [activeArtist, setactiveArtist] = useState(selectedArtist._id)
    const [activeStep, setActiveStep] = useState(1)
    const [activeTime, setActiveTime] = useState(selectedTime)
    const history = useHistory()
    const [isValid, setIsValid] = useState(false);
    const { isAuthenticated } = useSelector(state => state.auth)
    const handleDateChange = (date) => {
        setDate(date)
        dispatch(selectAppointmentDate(date))
        dispatch(getAvailableArtist(salonId, undefined, date))
    }
    const handleArtistChange = ({ _id, userName }) => {
        setactiveArtist(_id)
        dispatch(selectAppointmentArtist({ _id: _id, employeeName: userName }))
        dispatch(getAvailableTime({ salonId: salonId, branchId: undefined, _id: _id, date: date }))

    }
    const handleTimeChange = (time) => {
        setActiveTime(time)
        dispatch(selectAppointmentTime(time))

        if (Boolean(date) && Boolean(activeArtist)) {
            setIsValid(true);
        }
    }
    const handleJoin = () => {
        openModal({
            show: true,
            overlayClassName: 'quick-view-overlay',
            closeOnClickOutside: true,
            component: AuthenticationForm,
            closeComponent: '',
            config: {
                enableResizing: false,
                disableDragging: true,
                className: 'modal',
                width: 458,
                height: 'auto',
            },
        });
    };
    const handleSubmit = () => {
        if (!isAuthenticated) {
            return handleJoin()
        }
        if (Boolean(date) && Boolean(activeArtist) && Boolean(activeTime)) {
            history.push('/checkout')
        } else if (!Boolean(date)) {
            dispatch(showSnackBar('Please select date', 'error'))
        } else if (!Boolean(activeArtist)) {
            dispatch(showSnackBar('Please select artist', 'error'))
        } else if (!Boolean(activeTime)) {
            dispatch(showSnackBar('Please select time', 'error'))
        }
    }
    const panes = [
        {
            title: '01',
            description: 'Select Date',
        },
        {
            title: '02',
            description: 'Select Artist',
        },
        {
            title: '03',
            description: 'Select Time',
        },
    ];
    useEffect(() => {
        dispatch(getAvailableArtist(salonId, undefined, selectedDate))
        setactiveArtist()
        setActiveTime()

    }, [date])

    useEffect(() => {
        setActiveTime()
        if (
            Boolean(date) && Boolean(activeTime) && Boolean(activeArtist)
        ) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }

    }, [activeArtist])

    // let steps =
    //     [
    //         { label: 'Select Date', name: 'Select Date', content: <CalenderContent deviceType={deviceType} handleChangeDate={(value) => handleDateChange(value)} date={date} /> },
    //         { label: 'Select Artist', name: 'Select Artist', content: <ArtistSelector data={availableArtist} /> },
    //         { label: 'Select Time', name: 'Select Time', content: <TimeSelector /> },
    //         // { name: 'Checkout', component: <Step4 /> },
    //     ]
    return (
        <>
            <Modal>
                <PageWrapper>
                    <BookingTitle>Make an Appointment</BookingTitle>
                    <BookingContent>
                        <Stepper
                            panes={panes}
                            activeIndex={activeStep}
                        />
                        {
                            activeStep == 1 && <CalenderContent handleChangeDate={(value) => handleDateChange(value)} date={date} />
                        }
                        {
                            activeStep == 2 && <ArtistSelector handleChange={handleArtistChange} active={activeArtist} data={availableArtist} />
                        }
                        {
                            activeStep == 3 && <TimeSelector data={availableTime} active={activeTime} handleChange={handleTimeChange} />
                        }
                        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '30px 10px' }}>
                            <Button
                                type='button'
                                onClick={() => {
                                    setActiveStep(activeStep - 1);
                                }}
                                disabled={activeStep === 1}
                                size='big'
                            >
                                Previous
                            </Button>
                            {activeStep !== 3 ?
                                <Button
                                    type='button'
                                    disabled={activeStep === 3}
                                    onClick={() => {
                                        setActiveStep(activeStep + 1);
                                    }}

                                    size='big'
                                >
                                    Next
                                </Button>
                                :
                                <Button
                                    type='button'
                                    size='big'
                                    disabled={!isValid}
                                    onClick={() => {
                                        handleSubmit()
                                    }}
                                >
                                    Submit
                                </Button>
                            }

                        </div>
                        {/* <StepProgressBar startingStep={0} steps={steps} primaryBtnClass="stepperNextBtn" secondaryBtnClass="stepperPrevBtn" wrapperClass="stepperWrapper" /> */}

                    </BookingContent>

                </PageWrapper>
            </Modal>
        </>
    );
};

export default BookinPage;

