import {Injectable} from '@angular/core';
import {forEach} from '@angular-devkit/schematics';

@Injectable({
    providedIn: 'root'
})
export class SlotService {

    public slotService: any;

    constructor() {
        this.slotService = this;
    }


    reduceBlockedTime(blockTimes, availableTimes) {

        blockTimes.forEach((blocked) => {
            availableTimes.forEach((available, availableIndex, avTimes) => {
                    //     console.log('availble index', availableIndex);
                    if (available[0] <= blocked[0] && (available[1] >= blocked[0])) {

                        //     console.log('if', avTimes[availableIndex][1], blocked[0]);

                        const newAvailbleTime = [blocked[1], available[1], available[2]];
                        availableTimes[availableIndex][1] = blocked[0];
                        availableTimes.splice(availableIndex + 1, 0, newAvailbleTime);
                    }
                }
            );
        });
        console.log('availble index', availableTimes);
        return availableTimes;
    }

    toTime(time) {
        const t = time.split(':');
        return ((parseInt(t[0]) * 60) + parseInt(t[1]));
    }

    getTimeSlots(blockTimes: any[], availableTimes: any[], showTimeAsString = true, interval = 30, includeStartBlockedTime = false, includeEndBlockedTime = false) {
        const times = 1;
        const sums = interval;

        includeStartBlockedTime = includeStartBlockedTime === true ? true : false;
        includeEndBlockedTime = includeEndBlockedTime === true ? true : false;

        availableTimes = this.reduceBlockedTime(blockTimes, availableTimes);

        let dateTimes = [];
        availableTimes.forEach((value, index, array) => {
            //   console.log("value",value,times,sums);
            //  console.log(this.getSlotFromTimeArray(value[0], value[1], times, sums));
            let arr = this.getSlotFromTimeArray(value[0], value[1], times, value[2]);
            dateTimes = dateTimes.concat(arr);
        });

        console.log(dateTimes);


        if (showTimeAsString === true) {
            return dateTimes
                .map(x => this.getTime(x))
                .reduce(function(accc, element) {
                    accc['' + element.num] = element.time;
                    return accc;
                }, {});
        }
        return dateTimes;
    }

    getTime(num) {
        const tempHour = String(Math.trunc(num / 60));
        const hour = tempHour.length === 1 ? '0' + tempHour : tempHour;
        const min = num % 60 === 0 ? '00' : num % 60;
        return {num, time: hour + ':' + min};
    }

    getTime2(num) {
        const tempHour = String(Math.trunc(num / 60));
        const hour = tempHour.length === 1 ? '0' + tempHour : tempHour;
        const min = num % 60 === 0 ? '00' : num % 60;
        return hour + ':' + min;
    }

    getSlotFromTimeArray(start: number, end: number, times: number, sums: number) {
        const slotNumbers = (((end - start) * times) / sums);
        let i = 0;
        return Array(Math.round(slotNumbers))
            .fill(0)
            .map((x) => {
                if (i === 0) {
                    i = i + 1;
                    return start;
                }
                start = start + (sums * 1);
                i = 1 + i;
                return start;
            });
    }
}
