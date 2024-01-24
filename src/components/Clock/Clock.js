import React, { useState, useEffect } from "react";
import { Modal, Box } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import styles from "./Clock.module.css";
import Second from "./Second.js"
import Minute from "./Minute.js";
import Hour from "./Hour.js"
import NumberAdjust from "../NumberAdjust/NumberAdjust.js";
import { getTime } from "../../utils/time.js";
const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'silver',
	borderRadius: "5px",
	boxShadow: 24,
	p: 4,
};
const Clock = ({ ClockSize }) => {
	const clockWidth = ClockSize / 2 * Math.sqrt(2);
	const clockHeight = clockWidth;
	const secondWrapperWidth = clockWidth / 2 * Math.sqrt(2);
	const minuteWrapperWidth = secondWrapperWidth  * Math.sqrt(3)/ 2;
	const hourWrapperWidth = minuteWrapperWidth * Math.sqrt(3) / 6;
	const offset = (minuteWrapperWidth-secondWrapperWidth)/2
	const [open, setOpen] = useState(false);
	const [time, setTime] = useState(getTime());
	const [cfgTime, setCfgTime] = useState(getTime());
	const [intervalId, setIntervalId] = useState();

	const handleOpen = () => {
		setCfgTime(time);
		setOpen(true);
	}
	const handleClose = () => setOpen(false);
	const handleCfgTime = ()=>{
		setTime(cfgTime)
		timeStop(intervalId)
		setIntervalId(null)
		handleClose()
	}
	const handleAdjustNumber = (which, number)=>{
		let time = {
			"hour":cfgTime.hour,
			"min":cfgTime.min,
			"second":cfgTime.second
		};
		time[which] = number;
		setCfgTime(time);
	}
	const timeStart = ()=>{
		return setInterval(() => {
			setTime(getTime());
		}, 1000);
	}
	const timeStop = (intervalId) =>{
		clearInterval(intervalId);
	}
	const handleRestart = ()=>{
		const intervalId = timeStart()
		setIntervalId(intervalId)
	}
	useEffect(() => {
		const intervalId = timeStart()
		setIntervalId(intervalId)
		return () => {
			clearInterval(intervalId);
		};
	}, [])
	return (
		<div className={styles.clockContainer}>
			<div className={styles.secondWrapper} style={{ width: `${secondWrapperWidth}px`, height: `${secondWrapperWidth}px`, transform: `rotate(${time.second / 60 * 360 + 45}deg` }}>
				<Second />
			</div>
			<div className={styles.paper} style={{ width: `${clockWidth / 2 * Math.sqrt(2)}px`, height: `${clockHeight / 2 * Math.sqrt(2)}px` }}></div>
			<div className={styles.MinutWrapper} style={{ transform: `rotate(${time.min / 60 * 360}deg)` }}>
				<div  className={styles.offsetWrapper} style={{ top:`${offset}px` }}><Minute triangleLength={minuteWrapperWidth} /></div>
				
			</div>
			<div className={styles.HourWrapper} style={{ transform: `rotate(${time.hour / 12 * 360}deg)` }}>
				<Hour radius={hourWrapperWidth} />
			</div>
			<div  className={styles.btnWrapper}>
				<button className={styles.configBtn} onClick={handleRestart}>restart</button>
				<button className={styles.configBtn} onClick={handleOpen}>set time</button>
			</div>

			<Modal
				open={open}
				onClose={handleClose}
			>
				<Box sx={style}>
					<div className={styles.modalContentWrapper}>
						<h1>Adjust clock</h1>
						<div className={styles.numberAdjustWrapper}>
							<NumberAdjust defaultValue={cfgTime.hour} handleAdjustNumber={handleAdjustNumber} type={"hour"} min={0} max={23} />
							<span >時</span>
							<NumberAdjust defaultValue={cfgTime.min} handleAdjustNumber={handleAdjustNumber} type={"min"} min={0} max={59} />
							<span>分</span>
							<NumberAdjust defaultValue={cfgTime.second} handleAdjustNumber={handleAdjustNumber} type={"second"} min={0} max={59} />
							<span>秒</span>
						</div>
						<div className={styles.confirmWrapper}>
							<button className={styles.closeBtn} onClick={handleClose}>
								<CloseIcon />
							</button>
							<button className={styles.confirmBtn} onClick={handleCfgTime}>
								<CheckIcon />
							</button>
						</div>
					</div>
				</Box>
			</Modal>
		</div>
	);
};
export default Clock;
