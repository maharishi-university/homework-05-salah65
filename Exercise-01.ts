// const morning_meditation = new Meditation(5);
// morning_meditation.start();
// console.log(`Start meditation`);

// Start meditation
// 5
// 4
// 3
// 2
// 1
// Jay Guru Dev
class Meditation {
    times: number;
    constructor(times: number) {
        this.times = times;
    }
    async start() {
        await this.foo(this.times);

    }

    async foo(timer: number) {
        for (let i = 0; i < timer; i++) {
            setTimeout(() => {
                console.log(timer - i);
                if (i === timer - 1) {
                    console.log("Jay Guru Dev");
                }
            }, i * 1000);


        }
    }

}

export function startMeditation() {
    const morning_meditation = new Meditation(5);
    morning_meditation.start();
    console.log(`Start meditation`);
}