import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DayPickerRangeController } from 'react-dates';
import moment from 'moment';
import styled from 'styled-components';

const Container = styled.div`
    .DateRangePicker {
        position: relative;
        display: inline-block
    }
    .DateRangePicker_picker {
        z-index: 1;
        background-color: #fff;
        position: absolute
    }
    .DateRangePicker_picker__rtl {
        direction: rtl
    }
    .DateRangePicker_picker__directionLeft {
        left: 0
    }
    .DateRangePicker_picker__directionRight {
        right: 0
    }
    .DateRangePicker_picker__openDown {
        top: 72px
    }
    .DateRangePicker_picker__openUp {
        bottom: 72px
    }
    .DateRangePicker_picker__portal {
        background-color: rgba(0,0,0,.3);
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%
    }
    .DateRangePicker_picker__fullScreenPortal {
        background-color: #fff
    }
    .DateRangePicker_closeButton {
        background: 0 0;
        border: 0;
        color: inherit;
        font: inherit;
        line-height: normal;
        overflow: visible;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        padding: 15px;
        z-index: 2
    }
    .DateRangePicker_closeButton:focus,
    .DateRangePicker_closeButton:hover {
        color: darken(#cacccd,10%);
        text-decoration: none
    }
    .DateRangePicker_closeButton_svg {
        height: 15px;
        width: 15px;
        fill: #cacccd
    }
    .DayPicker {
        background: #fff;
        position: relative;
        text-align: left
    }
    .DayPicker__verticalScrollable {
        height: 100%
    }
    .DayPicker__hidden {
        visibility: hidden
    }
    .DayPicker_portal__horizontal {
        box-shadow: none;
        position: absolute;
        left: 50%;
        top: 50%
    }
    .DayPicker_portal__vertical {
        position: initial
    }
    .DayPicker_focusRegion {
        outline: 0;
    }
    .DayPicker_weekHeaders {
        position: relative
    }
    .DayPicker_weekHeaders__horizontal {
        margin-left: 9px
    }
    .DayPicker_weekHeader {
        color: #757575;
        position: absolute;
        top: 62px;
        z-index: 2;
        padding: 0 13px;
        text-align: left
    }
    .DayPicker_weekHeader__vertical {
        left: 50%
    }
    .DayPicker_weekHeader__verticalScrollable {
        top: 0;
        display: table-row;
        border-bottom: 1px solid #dbdbdb;
        background: #fff;
        margin-left: 0;
        left: 0;
        width: 100%;
        text-align: center
    }
    .DayPicker_weekHeader_ul {
        list-style: none;
        margin: 1px 0;
        padding-left: 0;
        padding-right: 0
    }
    .DayPicker_weekHeader_li {
        display: inline-block;
        text-align: center
    }
    .DayPicker_transitionContainer {
        position: relative;
        overflow: hidden;
        border-radius: 3px
    }
    .DayPicker_transitionContainer__horizontal {
        -webkit-transition: height .2s ease-in-out;
        -moz-transition: height .2s ease-in-out;
        transition: height .2s ease-in-out
    }
    .DayPicker_transitionContainer__vertical {
        width: 100%
    }
    .DayPicker_transitionContainer__verticalScrollable {
        padding-top: 20px;
        height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        overflow-y: scroll
    }
    .DayPickerNavigation_container {
        position: relative;
        z-index: 2
    }
    .DayPickerNavigation_container__vertical {
        background: #fff;
        box-shadow: 0 0 5px 2px rgba(0,0,0,.1);
        position: absolute;
        bottom: 0;
        left: 0;
        height: 52px;
        width: 100%
    }
    .DayPickerNavigation_container__verticalScrollable {
        position: relative
    }
    .DayPickerNavigation_button {
        background-color: transparent;
        cursor: pointer;
        line-height: .78;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none
    }
    .DayPickerNavigation_button__default {
        border: 1px solid #e4e7e7;
        background-color: #fff;
        color: #757575
    }
    .DayPickerNavigation_button__default:focus,
    .DayPickerNavigation_button__default:hover {
        border: 1px solid #c4c4c4
    }
    .DayPickerNavigation_button__default:active {
        background: #f2f2f2
    }
    .DayPickerNavigation_button__horizontal {
        padding: 6px 9px;
        top: 18px;
        position: absolute;
        border: 0;
    
    }
    .DayPickerNavigation_leftButton__horizontal {
        right: 42px
    }
    .DayPickerNavigation_rightButton__horizontal {
        right: 22px
    }
    .DayPickerNavigation_button__vertical {
        display: inline-block;
        position: relative;
        height: 100%;
        width: 50%
    }
    .DayPickerNavigation_button__vertical__default {
        padding: 5px
    }
    .DayPickerNavigation_nextButton__vertical__default {
        border-left: 0
    }
    .DayPickerNavigation_nextButton__verticalScrollable {
        width: 100%
    }
    .DayPickerNavigation_svg__horizontal {
        height: 19px;
        width: 19px;
        fill: #82888a
    }
    .DayPickerNavigation_svg__vertical {
        height: 42px;
        width: 42px;
        fill: #565a5c
    }
    .CalendarMonthGrid {
        background: #fff;
        text-align: left;
        z-index: 0
    }
    .CalendarMonthGrid__animating {
        z-index: 1
    }
    .CalendarMonthGrid__horizontal {
        position: absolute;
        left: 9px
    }
    .CalendarMonthGrid__vertical {
        margin: 0 auto
    }
    .CalendarMonthGrid__vertical_scrollable {
        margin: 0 auto;
        overflow-y: scroll
    }
    .CalendarMonthGrid_month__horizontal {
        display: inline-block;
        vertical-align: top;
        min-height: 100%
    }
    .CalendarMonthGrid_month__hideForAnimation {
        position: absolute;
        z-index: -1;
        opacity: 0;
        pointer-events: none
    }
    .CalendarMonth {
        background: #fff;
        text-align: center;
        padding: 0 13px;
        vertical-align: top;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none
    }
    .CalendarMonth_table {
        border-collapse: collapse;
        border-spacing: 0
    }
    .CalendarMonth_caption {
        color: #565a5c;
        font-size: 18px;
        text-align: center;
        padding-top: 22px;
        padding-bottom: 37px;
        caption-side: initial
    }
    .CalendarMonth_caption__verticalScrollable {
        padding-top: 12px;
        padding-bottom: 7px
    }
    .CalendarDay_container {
        padding: 0;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        color: #565a5c;
        background: #fff
    }
    .CalendarDay_container:hover {
        background: #e4e7e7;
        border: 1px double #e4e7e7;
        color: inherit
    }
    .CalendarDay_button {
        position: relative;
        height: 100%;
        width: 100%;
        text-align: center;
        background: 0 0;
        border: 0;
        margin: 0;
        padding: 0;
        color: inherit;
        font: inherit;
        line-height: normal;
        overflow: visible;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        cursor: pointer
    }
    .CalendarDay_button:active {
        outline: 0
    }
    .CalendarDay_button__default {
        cursor: default
    }
    .CalendarDay__outside {
        border: 0;
        background: #fff;
        color: #565a5c
    }
    .CalendarDay__blocked_minimum_nights {
        background: #fff;
        border: 1px solid #eceeee;
        color: #cacccd
    }
    .CalendarDay__blocked_minimum_nights:active,
    .CalendarDay__blocked_minimum_nights:hover {
        background: #fff;
        color: #cacccd
    }
    .CalendarDay__highlighted_calendar {
        background: #ffe8bc;
        color: #565a5c
    }
    .CalendarDay__highlighted_calendar:active,
    .CalendarDay__highlighted_calendar:hover {
        background: #ffce71;
        color: #565a5c
    }
    .CalendarDay__selected_span {
        background: #a8eac4;
        border: 1px solid #70e1a0;
        color: #fff
    }
    .CalendarDay__selected_span:active,
    .CalendarDay__selected_span:hover {
        background: #70e1a0;
        border: 1px solid #70e1a0;
        color: #fff
    }
    .CalendarDay__last_in_range {
        border-right: #147b45;
    }
    .CalendarDay__selected,
    .CalendarDay__selected:active,
    .CalendarDay__selected:hover {
        background: #147b45;
        border: 1px solid #147b45;
        color: #fff
    }
    .CalendarDay__hovered_span,
    .CalendarDay__hovered_span:hover {
        background: #90f9bd;
        border: 1px solid #80e8e0;
        color: #007a87
    }
    .CalendarDay__hovered_span:active {
        background: #80e8e0;
        border: 1px solid #80e8e0;
        color: #007a87
    }
    .CalendarDay__blocked_calendar,
    .CalendarDay__blocked_calendar:active,
    .CalendarDay__blocked_calendar:hover {
        background: #cacccd;
        border: 1px solid #cacccd;
        color: #82888a
    }
    .CalendarDay__blocked_out_of_range,
    .CalendarDay__blocked_out_of_range:active,
    .CalendarDay__blocked_out_of_range:hover {
        background: #fff;
        border: 1px solid #e4e7e7;
        color: #cacccd
    }
    .DateRangePickerInput {
        background-color: #fff;
        border: 1px solid #cacccd;
        display: inline-block
    }
    .DateRangePickerInput__disabled {
        background: #cacccd
    }
    .DateRangePickerInput__rtl {
        direction: rtl
    }
    .DateRangePickerInput_arrow {
        display: inline-block;
        vertical-align: middle
    }
    .DateRangePickerInput_arrow_svg {
        vertical-align: middle;
        fill: #565a5c;
        height: 24px;
        width: 24px
    }
    .DateRangePickerInput_clearDates {
        background: 0 0;
        border: 0;
        color: inherit;
        font: inherit;
        line-height: normal;
        overflow: visible;
        cursor: pointer;
        display: inline-block;
        vertical-align: middle;
        padding: 10px;
        margin: 0 10px 0 5px
    }
    .DateRangePickerInput_clearDates:focus,
    .DateRangePickerInput_clearDates:hover {
        background: #dbdbdb;
        border-radius: 50%
    }
    .DateRangePickerInput_clearDates__hide {
        visibility: hidden
    }
    .DateRangePickerInput_clearDates_svg {
        fill: #82888a;
        height: 12px;
        width: 15px;
        vertical-align: middle
    }
    .DateRangePickerInput_calendarIcon {
        background: 0 0;
        border: 0;
        color: inherit;
        font: inherit;
        line-height: normal;
        overflow: visible;
        cursor: pointer;
        display: inline-block;
        vertical-align: middle;
        padding: 10px;
        margin: 0 5px 0 10px
    }
    .DateRangePickerInput_calendarIcon_svg {
        fill: #82888a;
        height: 15px;
        width: 14px;
        vertical-align: middle
    }
    .DateInput {
        font-weight: 200;
        font-size: 18px;
        line-height: 24px;
        color: #757575;
        margin: 0;
        padding: 8px;
        background: #fff;
        position: relative;
        display: inline-block;
        width: 130px;
        vertical-align: middle
    }
    .DateInput__withCaret:after,
    .DateInput__withCaret:before {
        content: "";
        display: inline-block;
        position: absolute;
        bottom: auto;
        border: 10px solid transparent;
        left: 22px;
        z-index: 2
    }
    .DateInput__openUp:before {
        border-bottom: 0;
        top: -24px;
        border-top-color: rgba(0,0,0,.1)
    }
    .DateInput__openUp:after {
        border-bottom: 0;
        top: -25px;
        border-top-color: #fff
    }
    .DateInput__openDown:before {
        border-top: 0;
        top: 62px;
        border-bottom-color: rgba(0,0,0,.1)
    }
    .DateInput__openDown:after {
        border-top: 0;
        top: 63px;
        border-bottom-color: #fff
    }
    .DateInput__disabled {
        background: #cacccd
    }
    .DateInput_input {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        border: 0;
        height: 100%;
        width: 100%
    }
    .DateInput_input__readOnly {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none
    }
    .DateInput_screenReaderMessage {
        border: 0;
        clip: rect(0,0,0,0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px
    }
    .DateInput_displayText {
        padding: 4px 8px;
        white-space: nowrap;
        overflow: hidden
    }
    .DateInput_displayText__hasInput {
        color: #565a5c
    }
    .DateInput_displayText__focused {
        background: #99ede6;
        border-color: #99ede6;
        border-radius: 3px;
        color: #007a87
    }
    .DateInput_displayText__disabled {
        font-style: italic
    }
    button.DayPickerKeyboardShortcuts_buttonReset {
        display: none;
    }
`;

const RightArrow = () => (
    <div>
        <i style={{
            border: "solid black",
            borderWidth: "0 3px 3px 0",
            display: "inline-block",
            padding: "3px",
            transform: "rotate(-45deg)",
            WebkitTransform: "rotate(-45deg)"
        }}></i>
    </div>
);
const LeftArrow = () => (
    <div>
        <i style={{
            border: "solid black",
            borderWidth: "0 3px 3px 0",
            display: "inline-block",
            padding: "3px",
            transform: "rotate(135deg)",
            WebkitTransform: "rotate(135deg)"
        }}></i>
    </div>
);
const START_DATE = 'startDate';
const END_DATE = 'endDate';

class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focusedInput: props.autoFocusEndDate ? END_DATE : START_DATE,
            startDate: props.startDate || props.initialStartDate,
            endDate: props.endDate || props.initialEndDate,
        };
        moment.locale('sv_SE');

        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
    }

    onDatesChange({ startDate, endDate }) {
        const dateToMilli = (momentDate) => momentDate ? momentDate.valueOf() : null;
        const oldStartDate = dateToMilli(this.state.startDate);
        const oldEndDate = dateToMilli(this.state.endDate);
        const sDate = dateToMilli(startDate);
        const eDate = dateToMilli(endDate);

        console.log('startDate: %o, endDate: %o', startDate, endDate);

        if (sDate !== null && sDate === oldStartDate && this.state.focusedInput === START_DATE) {
            this.setState({
                startDate: startDate,
                endDate: null,
                focusedInput: START_DATE
            });
        } else if (sDate < oldStartDate && (eDate || oldEndDate)) {
            const localEndDate = endDate || this.state.endDate;
            this.setState({
                startDate,
                endDate: localEndDate,
                focusedInput: START_DATE,
            });
        } else if (sDate < oldStartDate && eDate === null) {
            this.setState({
                startDate,
                endDate: this.state.startDate,
                focusedInput: START_DATE
            })
        } else if (oldEndDate && sDate > oldEndDate) {
            this.setState({
                startDate: this.state.startDate,
                endDate: startDate,
                focusedInput: END_DATE
            })
        } else {
            this.setState({ startDate, endDate });
         }
    }

    onFocusChange(focusedInput) {
        this.setState({
            focusedInput: !focusedInput ? START_DATE : focusedInput,
        });
    }

    render() {
        const { focusedInput, startDate, endDate } = this.state;
        //console.log(`startDate: ${startDate}, endDate: ${endDate}, focusedInput: ${focusedInput}`);
        return (
            <Container>
                <DayPickerRangeController
                    startDate={ startDate }
                    endDate={ endDate }
                    onDatesChange={ this.onDatesChange }
                    focusedInput={ focusedInput }
                    onFocusChange={ this.onFocusChange }
                    navPrev={ <LeftArrow/> }
                    navNext={ <RightArrow/> }
                />
            </Container>
        );
    }
}

DatePicker.defaultProps = {
    autoFocusEndDate: false,
    initialStartDate: null,
    initialEndDate: null,
};

DatePicker.propTypes = {
    startDate: PropTypes.number,
    endDate: PropTypes.number
};

export default DatePicker;
