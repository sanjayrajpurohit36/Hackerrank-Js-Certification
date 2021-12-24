/*
    Create a class ParkingLot with the below mentioned details.


*/
class ParkingLot {
    // Add the methods here
    constructor(slots) {
        this.slots = new Array(slots);
        slots.fill(0);
    }
    
    park(carId) {
        for(let i = 0; i<this.slots.length; i++){
            if(this.slots[i].length == 0) {
                this.slots[i].push(carId);
                return true;
            }
        }
        return false;
    }
    
    getSlots() {
        let ans = [];
        for(let i = 0; i<this.slots.length; i++){ 
            if(this.slots[i].length) {
                ans.push(this.slots[i]);
            } else ans.push(null);
        }
        // console.log("=>", ans);
        return ans;
    }
    
    remove(carId) {
        for(let i = 0; i<this.slots.length; i++){ 
            if(this.slots[i][0] == carId) {
                this.slots[i] = [];
                return true;
            } 
        }
        return false;
    }

}


let ParkinglotObject = new ParkingLot;
