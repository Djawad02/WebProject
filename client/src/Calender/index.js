import { DAYS } from "./conts";
import { MONTHS } from "./conts";
import {CalenderBody, CalenderHead, HeadDay, SevenColGrid, StyledDay, StyledEvent, Wrapper} from "./styled";
import {areDatesTheSame, getDateObj, getDaysInMonth, getRandomDarkColor, getSortedDays, range} from "./utils";
import {useState} from 'react';

export const Calender = ({startingDate, eventsArr, addEvent}) => {
    const [cuurentMonth, setCurrentMonth] = useState(startingDate.getMonth())
    const [cuurentYear, setCurrentYear] = useState(startingDate.getFullYear())
    const DAYSINAMONTH = getDaysInMonth(cuurentMonth,cuurentYear); 

    const nextMonth = () => {
        if (cuurentMonth<11)
        {
            setCurrentMonth(prev=> prev+1);
        }
        else{
            setCurrentMonth(0);
            setCurrentYear(prev => prev + 1);
        }
    }

    const prevMonth = () => {
        if (cuurentMonth > 0)
        {
            setCurrentMonth(prev=> prev-1);
        }
        else{
            setCurrentMonth(11);
            setCurrentYear(prev => prev - 1);
        }
    }

    const onAddEvent = (date) => {
        addEvent(date,getRandomDarkColor());
    }
    return (
        <Wrapper>
            <CalenderHead>
            <ion-icon onClick={prevMonth} name="arrow-back-outline"></ion-icon>
            <p>{MONTHS[cuurentMonth]} {cuurentYear}</p>
            <ion-icon onClick={nextMonth} name="arrow-forward-outline"></ion-icon>
            </CalenderHead>
            <SevenColGrid>
                {getSortedDays(cuurentMonth, cuurentYear).map((day)=> (
                <HeadDay>{day}</HeadDay>
                ))}

            </SevenColGrid>
            <CalenderBody fourCol={DAYSINAMONTH === 28}>
                {range(DAYSINAMONTH).map((day)=>(
                <StyledDay onClick={()=> onAddEvent(getDateObj(day, cuurentMonth, cuurentYear)) } 
                active = {
                    areDatesTheSame(
                        new Date(), 
                        getDateObj(day, cuurentMonth, cuurentYear)
                        )}
                        ><p>{day}</p> 
                        {   eventsArr.map(
                            (ev)=>
                            areDatesTheSame(
                                getDateObj(day,cuurentMonth,cuurentYear), 
                                ev.date
                            ) && <StyledEvent> {ev.title}</StyledEvent>  
                        )}
                            </StyledDay>
                )) }
            </CalenderBody>
            
        </Wrapper>
    )
}